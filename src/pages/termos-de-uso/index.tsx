import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const TermosDeUso = () => {
  return (
    <section className="w-full px-4 my-11 py-12 max-w-4xl mx-auto text-white">
      <Button asChild>
        <Link
          href="/"
          className="flex gap-2 items-start mb-9 bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 transition">
          <ArrowLeft />
          Voltar
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
      <div className="space-y-6 text-zinc-300 text-base leading-relaxed">
        <p>
          Ao utilizar os canais de contato disponibilizados pela{" "}
          <strong>G.O.I Service</strong>, o usuário concorda com os seguintes
          termos:
        </p>

        <p>
          O formulário presente neste site tem como objetivo exclusivo facilitar
          o contato entre o usuário e a equipe da G.O.I Service. Ao preenchê-lo,
          o usuário autoriza o envio de mensagens por e-mail, telefone ou outros
          meios informados, com o propósito de atendimento, esclarecimento de
          dúvidas, envio de propostas ou informações relacionadas aos serviços
          prestados.
        </p>

        <p>
          O contato via <strong>WhatsApp</strong>, através do número
          disponibilizado neste site, também está sujeito a este termo. Ao
          iniciar uma conversa com a G.O.I Service por esse canal, o usuário
          consente em receber mensagens, notificações e informações relacionadas
          ao atendimento e aos serviços oferecidos.
        </p>

        <p>
          A G.O.I Service se compromete a utilizar os dados fornecidos com
          responsabilidade, respeitando a privacidade do usuário e não
          compartilhando informações com terceiros sem autorização prévia.
        </p>

        <p>
          Para mais informações sobre como tratamos seus dados, entre em contato
          conosco pelos canais oficiais.
        </p>
      </div>
    </section>
  );
};

export default TermosDeUso;
