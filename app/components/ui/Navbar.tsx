"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "initial", label: "Início" },
  { id: "problem", label: "O problema" },
  { id: "features", label: "Funcionalidades" },
  { id: "guarantee", label: "Garanta o seu" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("initial");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -40% 0px" },
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ===== Navbar Desktop ===== */}
      <header
        className="hidden md:flex items-center justify-center  rounded-full border border-white/15
bg-[#0A0A0A]/30
backdrop-blur-[24px]
shadow-[0_8px_32px_rgba(0,0,0,0.25)] py-4 px-8 w-fit mx-auto mt-4 fixed top-0 left-0 right-0 backdrop-blur-3xl z-50 shadow-[0_0_30px_6px_rgba(37,99,235,0.10)] gap-16"
      >
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className=""
        />
        <nav>
          <ul className="flex items-center justify-center gap-2 font-medium text-base">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className={`rounded-full px-4 py-3 transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {section.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* ===== Navbar Mobile ===== */}
      <header className="flex md:hidden items-center justify-between rounded-full border border-white/10 bg-[#0A0A0A]/55 py-3 px-5 w-[92%] mx-auto mt-4 fixed top-0 left-0 right-0 backdrop-blur-3xl z-50 shadow-[0_0_30px_6px_rgba(37,99,235,0.10)]">
        <Image src="/assets/logo.png" alt="Logo" width={90} height={90} />

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu"
          className="text-white p-2"
        >
          <Menu className="h-7 w-7" />
        </button>
      </header>

      {/* ===== Overlay ===== */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ===== Sidebar Mobile (estilo navbar, flutuante) ===== */}
      <aside
        className={`fixed top-4 bottom-4 right-4 w-[80%] max-w-[300px] rounded-3xl border border-white/10 bg-[#0A0A0A]/70 backdrop-blur-3xl z-50 flex flex-col overflow-hidden shadow-[0_0_50px_10px_rgba(37,99,235,0.15)] transition-all duration-500 ease-out md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-[110%] opacity-0 pointer-events-none"
        }`}
      >
        {/* Glow decorativo no topo */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

        {/* Header da sidebar */}
        <div className="relative flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
          <Image src="/assets/logo.png" alt="Logo" width={70} height={70} />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fechar menu"
            className="rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navegação */}
        <nav className="relative flex-1 px-3 py-6">
          <ul className="flex flex-col gap-1.5">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;

              return (
                <li
                  key={section.id}
                  className="transition-all duration-500 ease-out"
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 60 + 100}ms`
                      : "0ms",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(16px)",
                  }}
                >
                  <Link
                    href={`#${section.id}`}
                    onClick={handleMobileLinkClick}
                    className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3.5 font-medium text-[15px] transition-colors ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-primary scale-100"
                          : "bg-white/20 scale-75 group-hover:bg-white/40"
                      }`}
                    />
                    {section.label}
                    {isActive && (
                      <span className="absolute right-3 h-6 w-[3px] rounded-full bg-primary shadow-[0_0_10px_2px_rgba(37,99,235,0.6)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Rodapé removido (sem redes sociais) */}
      </aside>
    </>
  );
};
