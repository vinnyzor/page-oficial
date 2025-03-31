import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const priceMap: Record<string, string> = {
  'individual-mensal': 'price_1R7oGfG1HoAlGWWZ79tEsOZe',
  'individual-anual': 'price_1R7oGfG1HoAlGWWZdl1KvSSM',
  'duo-mensal': 'price_1R7oG8G1HoAlGWWZ27lhlGZK',
  'duo-anual': 'price_1R7oG8G1HoAlGWWZXcbntzBG',
  'profissional-mensal': 'price_1R7oFQG1HoAlGWWZ9vRCeaZP',
  'profissional-anual': 'price_1R7oFQG1HoAlGWWZTTAUY5Db',
};


export async function POST(req: Request) {
  try {
    const { plano, periodo } = await req.json();

    const key = `${plano}-${periodo}`.toLowerCase();
    const priceId = priceMap[key];

    console.log('🔑 Plano recebido:', key);

    if (!priceId) {
      return NextResponse.json({ error: 'Plano inválido.' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/aprovado`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      expand: ["subscription"],
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
