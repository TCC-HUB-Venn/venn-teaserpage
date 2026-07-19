import Image from "next/image";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-4">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="relative h-[80px] w-[200px]">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>
        <p className="text-left text-white/60 md:text-center mt-2">
          Lançamento em Breve · © {year} Venn. <br className="md:hidden" />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
