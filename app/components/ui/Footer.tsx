import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-8 max-md:px-4">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Image src="/assets/logo.png" alt="Logo" loading={'lazy'} width={220} height={220} />
        <p className="text-left text-white/60 md:text-center mt-2">
          Lançamento em Breve · © 2026 Venn. <br className="md:hidden" />Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
