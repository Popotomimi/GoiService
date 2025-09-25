import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import CarouselComponent from "@/components/carousel/carousel";
import About from "@/components/about/about";
import Services from "@/components/services/services";
import Events from "@/components/events/events";
import Contact from "@/components/contact-form/Contact";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans bg-zinc-900 text-white min-h-screen`}>
      <header className="w-full border-b border-zinc-700">
        <Navbar />
      </header>

      <main className="flex flex-col gap-16 px-4 sm:px-8 lg:px-16 py-10">
        <CarouselComponent />
        <div className="-mx-4 sm:-mx-8 lg:-mx-16">
          <About />
        </div>
        <Services />
        <div className="-mx-4 sm:-mx-8 lg:-mx-16 bg-zinc-950">
          <div className="px-4 sm:px-8 lg:px-16">
            <Events />
          </div>
        </div>
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
