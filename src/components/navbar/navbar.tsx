"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaWhatsapp } from "react-icons/fa";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-rose-600 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/img/logo.jpg" alt="Logo" width={40} height={40} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-zinc-200">
          {["servicos", "eventos", "contato", "sobre"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="relative transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all after:duration-300 hover:after:w-full">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* WhatsApp */}
        <div className="hidden md:block">
          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer">
            <Button
              variant="outline"
              className="flex items-center gap-2 cursor-pointer text-white shadow-md transition">
              <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
              Contato
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="md:hidden">
            <Menu className="h-6 w-6 text-zinc-100" />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="relative mt-2 w-40 bg-zinc-950 text-zinc-100 rounded shadow-md border border-zinc-800 before:absolute before:-top-2 before:right-4 before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-[12px] before:border-l-transparent before:border-r-transparent before:border-b-zinc-950">
            <nav className="flex flex-col gap-3">
              {["servicos", "eventos", "contato", "sobre"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="hover:text-rose-500 transition">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Navbar;
