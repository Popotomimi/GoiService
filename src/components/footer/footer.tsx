import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-black text-white border-t border-rose-600 px-4 py-8
    pb-20">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/img/logo.jpg" alt="Logo" width={40} height={40} />
        </Link>

        {/* Redes e navegação */}
        <div className="flex flex-col items-center md:items-start gap-2 text-sm">
          <Link
            href="https://www.instagram.com/goi.service/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline">
            <FaInstagram className="h-4 w-4" style={{ color: "#E4405F" }} />
            Instagram
          </Link>
          <Link href="/termos-de-uso" className="hover:underline">
            Termos de Uso
          </Link>
        </div>

        {/* Desenvolvedor e copyright */}
        <div className="text-center md:text-right text-sm space-y-1">
          <p>© {year} G.O.I Service. Todos os direitos reservados.</p>
          <p className="flex items-center justify-center md:justify-end gap-2">
            Desenvolvido por{" "}
            <Link
              href="https://www.linkedin.com/in/roberto-de-oliveira-35976621b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 flex items-center gap-1 hover:underline">
              <SiLinkedin className="h-4 w-4" style={{ color: "#0077B5" }} />
              Roberto de Oliveira
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
