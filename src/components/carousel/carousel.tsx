import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const items = [
  { img: "NBA.jpg", title: "NBA HOUSE" },
  { img: "Brasileirao.jpg", title: "Brasileirão Feminino" },
  { img: "Carnaval.jpg", title: "Carnaval 2025" },
  { img: "Paulistao.jpg", title: "Final do Paulistão 2025" },
  { img: "TOTVS.jpg", title: "TOTVS" },
];

const CarouselComponent = () => {
  return (
    <section className="w-full px-4 py-10 text-white">
      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">Operações Inteligentes</h1>
          <p className="text-zinc-300 text-lg">
            Estamos comprometidos em fazer seus eventos terem Operações
            Inteligentes e Inovadoras. Estamos por você e para você.
          </p>
          <Button
            className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 transition"
            asChild>
            <Link href="#contato" className="flex items-center gap-2">
              Entrar em contato
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Carrossel */}
        <div className="md:w-1/2 w-full relative">
          <Carousel>
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-transparent border-none">
                    <CardContent className="p-0">
                      <div className="w-full aspect-[16/9] overflow-hidden rounded-xl bg-zinc-900">
                        <Image
                          src={`/img/${item.img}`}
                          alt={item.title}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <h3 className="mt-4 text-center text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Setas */}
            <CarouselPrevious className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 text-white hover:border-rose-700 hover:shadow-md transition" />
            <CarouselNext className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 text-white hover:border-rose-700 hover:shadow-md transition" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
