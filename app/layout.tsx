import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Venn - Gestão Inteligente de TCC",
    template: "%s - Venn",
  },
  keywords: [
    "TCC",
    "Trabalho de Conclusão de Curso",
    "Gestão de TCC",
    "Sistema de gestão de TCC",
    "Plataforma de TCC",
    "Gestão acadêmica",
    "Orientação acadêmica",
    "Gestão de projetos acadêmicos",
    "Organização de TCC",
    "Faculdades",
    "ABNT",
  ],
  description: "A Venn está criando uma nova forma de gerenciar TCCs. Uma plataforma inteligente para conectar alunos, orientadores e instituições em uma jornada acadêmica mais organizada, simples e produtiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
