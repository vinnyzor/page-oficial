export const runtime = "nodejs"; // 🔹 Garante que a API só rode no servidor
export const dynamic = "force-dynamic"; // 🚀 Garante que a API seja sempre dinâmica
export const revalidate = 0; // 🔹 Desativa qualquer tentativa de cache

import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/prisma"; // Importando o Prisma

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe Signature" },
      { status: 400 }
    );
  }

  try {
    const rawBody = await req.text(); // Obtém o corpo da requisição corretamente
    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    console.log("Evento recebido:", event.type);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("Pagamento confirmado:", session);

        const email = session.customer_details?.email ?? "";
        const subscriptionId = session.subscription as string;
        const telefone = session.customer_details?.phone ?? "";
        const sessionId = session.id;
        const amount = session.amount_total ? session.amount_total / 100 : 0;
        const currency = session.currency?.toUpperCase() || "USD";

        // 1. Verifica ou cria usuário
        let user = await db.users.findUnique({ where: { email } });

        if (!user) {
          user = await db.users.create({
            data: {
              email,
              nome: email.split("@")[0], // nome padrão
            },
          });
          console.log(`👤 Usuário criado: ${email}`);
        }

        // 2. Verifica se já existe pagamento
        let payment = await db.payments.findUnique({
          where: { sessionId: sessionId },
        });

        if (!payment) {
          payment = await db.payments.create({
            data: {
              userId: user.id,
              email,
              telefone,
              status: "paid",
              subscriptionId: subscriptionId,
              sessionId: sessionId,
              amount,
              currency,
            },
          });
          console.log(`💳 Pagamento registrado no banco: ${sessionId}`);
        }

        break;
      }

      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription;

        const subscriptionId = subscription.id;
        const item = subscription.items.data[0];
        const priceId = item?.price?.id;
        const productId = item?.price?.product as string;

        console.log("🆕 Assinatura criada:");
        console.log("📦 Produto:", productId);
        console.log("💰 Preço:", priceId);
        console.log("🔄 Assinatura ID:", subscriptionId);

        // Função retry
        const tryUpdate = async (attempt = 1): Promise<void> => {
          const payment = await db.payments.findFirst({
            where: { subscriptionId: subscriptionId },
          });

          if (payment) {
            await db.payments.update({
              where: { id: payment.id },
              data: {
                priceId: priceId,
                productId: productId,
              },
            });
            console.log(`✅ Payment atualizado na tentativa ${attempt}`);

            const userId = payment.userId;

            // 1. Buscar o planoPrice correspondente
            const planoPrice = await db.planosPrices.findFirst({
              where: { priceId: priceId },
            });

            if (!planoPrice) {
              console.error(
                "❌ PlanoPrice não encontrado para priceId:",
                priceId
              );
              return;
            }

            // 2. Criar a conta
            const conta = await db.contas.create({
              data: {
                nome: `Conta de usuário ${userId}`,
              },
            });

            // 3. Relacionar usuário à conta
            await db.userContas.create({
              data: {
                userId,
                contaId: conta.id,
              },
            });

            // 4. Criar o plano com data de validade baseada no período
            const inicio = new Date();
            const fim = new Date(inicio);

            switch (planoPrice.periodo) {
              case "mensal":
                fim.setMonth(fim.getMonth() + 1);
                break;
              case "anual":
                fim.setFullYear(fim.getFullYear() + 1);
                break;
              default:
                fim.setFullYear(fim.getFullYear() + 100); // fallback tipo "free"
            }

            const plano = await db.planos.create({
              data: {
                contaId: conta.id,
                planoPriceId: planoPrice.id,
                inicio,
                fim,
                periodoPagamento: planoPrice.periodo,
                payments: {
                  connect: { id: payment.id },
                },
              },
            });

            // 5. Relacionar usuário ao plano
            await db.userPlanos.create({
              data: {
                userId,
                planoId: plano.id,
              },
            });

            console.log(
              "🎉 Conta e plano criados com sucesso para o usuário:",
              userId
            );


            
          } else if (attempt < 3) {
            console.log(
              `⏳ Payment não encontrado, tentando novamente... (Tentativa ${attempt})`
            );
            await new Promise((res) => setTimeout(res, 1000)); // espera 1 segundo
            await tryUpdate(attempt + 1);
          } else {
            console.warn(
              `❌ Payment não encontrado após ${attempt} tentativas. Subscription ID: ${subscriptionId}`
            );
          }
        };

        await tryUpdate();

        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;

        const subscriptionId = subscription.id;
        const item = subscription.items.data[0];
        const priceId = item?.price?.id;
        const productId = item?.price?.product as string;

        console.log("📦 Produto:", productId);
        console.log("💰 Preço:", priceId);
        console.log("🔄 Assinatura ID:", subscriptionId);

        const tryUpdate = async (attempt = 1): Promise<void> => {
          const payment = await db.payments.findFirst({
            where: { subscriptionId: subscriptionId },
          });

          if (payment) {
            await db.payments.update({
              where: { id: payment.id },
              data: {
                priceId: priceId,
                productId: productId,
              },
            });
            console.log(
              `✅ Payment atualizado (updated) na tentativa ${attempt}`
            );
          } else if (attempt < 3) {
            console.log(
              `⏳ Payment não encontrado (updated), tentando novamente... (Tentativa ${attempt})`
            );
            await new Promise((res) => setTimeout(res, 1000)); // espera 1 segundo
            await tryUpdate(attempt + 1);
          } else {
            console.warn(
              `❌ Payment (updated) não encontrado após ${attempt} tentativas. Subscription ID: ${subscriptionId}`
            );
          }
        };

        await tryUpdate();

        break;
      }

      default:
        console.log(`Evento não tratado: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Erro ao processar o webhook:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
