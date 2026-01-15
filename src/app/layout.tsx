import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viking Cuts - O Corte que Impõe Respeito",
  description: "Agende seu horário em 30 segundos pelo nosso sistema automático. Sem espera. Barbearia premium com serviços de corte, barba e tratamentos completos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
