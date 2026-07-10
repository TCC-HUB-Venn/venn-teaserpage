"use client"
import React from "react"

export const ContainerCTAInput: React.FC = () => {
  return (
    <div className="w-full px-0">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex min-w-0 items-center gap-4 rounded-full bg-[rgba(255,255,255,0.08)] border border-white/15 px-2 py-2 shadow-inner backdrop-blur-sm max-w-[620px]"
      >
        <input
          aria-label="Seu melhor e-mail institucional"
          placeholder="Seu melhor e-mail institucional"
          className="min-w-0 flex-1 bg-transparent placeholder:text-white/60 text-white text-lg outline-none px-4 py-2"
        />

        <button
          type="submit"
          className="ml-2 whitespace-nowrap rounded-full bg-primary px-4 py-3 text-lg font-medium text-white shadow-[0_6px_20px_rgba(37,99,235,0.18)] hover:bg-primary-hover duration-300"
        >
          Garantir acesso antecipado
        </button>
      </form>
    </div>
  )
}
