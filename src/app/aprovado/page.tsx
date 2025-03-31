import Image from "next/image";
import Link from "next/link";
import { BsRobot } from "react-icons/bs";

export default async function ComoUsarPage() {
  // 🔹 Simulação: Usuário recebeu a mensagem do assistente?
  // (Isso pode ser substituído no futuro por uma checagem real via API)
  const assistenteEnviouMensagem = false;

  // 🔹 Link para o WhatsApp (troque pelo número real)
  const whatsappLink =
    "https://wa.me/5561999772985?text=Olá,%20quero%20ativar%20meu%20Assistente%20Financeiro!";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
        <div className="w-full flex justify-center mt-6">
          <Image
            src="/images/logo.png"
            alt="Gráfico de Economia"
            width={120}
            height={110}
            className="w-32"
          />
        </div>
        <h1 className="text-2xl font-bold pt-2 text-[#2fb3a2]">
          Bem-vindo à sua nova jornada financeira!
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Para ativar sua assinatura, envie uma mensagem para nosso Assistente
          Financeiro no WhatsApp.
          <br />
          Basta dizer:{" "}
          <strong>&quot;Quero ativar minha assinatura&quot;</strong> e pronto!
        </p>

        {!assistenteEnviouMensagem && (
          <div className="mt-6">
            <p className="text-gray-700 text-sm mb-4">
              Caso ainda não tenha enviado a mensagem, clique no botão abaixo
              para iniciar a conversa. A mensagem{" "}
              <strong>&quot;Quero ativar minha assinatura&quot;</strong> será
              preenchida automaticamente.
            </p>

            <Link
              href={whatsappLink}
              target="_blank"
              className="w-full py-3 px-4 bg-[#2fb3a2] text-white rounded-md text-sm font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition duration-300"
            >
              Iniciar conversa com seu Assistente <BsRobot className="size-4" />
            </Link>
          </div>
        )}

        <p className="text-gray-700 mt-6 text-md">
          🎉 Parabéns por dar esse passo! <br />
          Seu futuro financeiro agradece. Agora, siga as instruções do
          assistente e aproveite essa nova fase!
        </p>

        <p className="text-xs text-gray-600 mt-5">
          Se encontrar algum problema, entre em contato com nosso suporte.{" "}
          <Link className="text-[#2fb3a2]" href="/suporte">
            Falar com Suporte
          </Link>
        </p>
      </div>
    </main>
  );
}
