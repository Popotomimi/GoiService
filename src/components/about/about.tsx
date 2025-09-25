import Image from "next/image";

const About = () => {
  return (
    <section id="sobre" className="w-full px-4 py-12 text-white bg-zinc-950">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left md:pl-10">
          <h2 className="text-3xl font-bold">Quem Somos?</h2>
          <p className="text-zinc-300 text-base leading-relaxed">
            A <strong className="text-rose-600">G.O.I Service</strong> — Grupo
            de Operações Inteligentes — Nasceu com a missão de revolucionar e
            valorizar o mercado de serviços. Atuamos com excelência em soluções
            operacionais como limpeza profissional, carregadores, cordeiros,
            garçons e muito mais. Nossa equipe é formada por profissionais
            capacitados e comprometidos em entregar experiências únicas, com
            agilidade, respeito e qualidade. Somos movidos por inovação, e
            estamos sempre prontos para atender você com inteligência e
            dedicação.
          </p>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-[360px] h-[360px] overflow-hidden rounded-xl shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-105">
            <Image
              src="/img/Equipe.jpg"
              alt="Equipe da G.O.I Service"
              width={360}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
