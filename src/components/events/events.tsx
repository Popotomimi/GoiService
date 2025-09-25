import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { events } from "@/db/events";

const Events = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, events.length));
  };

  return (
    <section id="eventos" className="w-full px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Título */}
        <h2 className="text-3xl font-bold text-start text-rose-600">Eventos</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.slice(0, visibleCount).map((event, index) => (
            <Card
              key={index}
              className="bg-zinc-800 pt-0 text-white border-none shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)]">
              <div className="w-full h-[200px] overflow-hidden rounded-t-xl">
                <Image
                  src={`/img/${event.img}`}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-zinc-300 text-sm">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Botão */}
        {visibleCount < events.length && (
          <div className="flex justify-end">
            <Button
              onClick={handleShowMore}
              className="bg-rose-600 hover:bg-rose-700 cursor-pointer text-white shadow-lg shadow-rose-600/30 transition flex items-center gap-2">
              Mais eventos <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
