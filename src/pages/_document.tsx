import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "sonner";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Toaster duration={3000} position="top-center" />
      </body>
    </Html>
  );
}
