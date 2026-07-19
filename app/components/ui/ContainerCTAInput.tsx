"use client"
import { Loader, LoaderCircle } from "lucide-react";
import React, { useState } from "react"
import { toast } from "sonner";

interface ILead {
  id: number;
  email: string;
}

export const ContainerCTAInput: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [lead, setLead] = useState<ILead>({
    id: 0,
    email: ''
  })

  const postLead = async () => {

    if (isLoading) return;

    if (!lead.email.trim()) {
      toast.error('Digite seu e-mail')
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);

    if (!isValidEmail) {
      toast.error('Digite um e-mail válido')
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          email: lead.email
        })
      })

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.error || 'Ocorreu um erro');
      return;
    } else {
        toast.success('Você entrou na fila de espera! Em breve entraremos em contato.')
    }

      console.log('data', data)
      setLead({
        id: 0,
        email: ''
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao cadastrar usuário', error.message)
      } else console.log('Erro desconhecido')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full px-0">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postLead();
        }}
        className="w-full flex flex-col md:flex-row min-w-0 items-stretch md:items-center gap-3 md:gap-4 rounded-2xl md:rounded-full bg-[rgba(255,255,255,0.05)] border border-white/10 p-2 md:px-2 md:py-2 shadow-inner backdrop-blur-sm max-w-full md:max-w-[620px]"
      >
        <input
          type="email"
          aria-label="Seu melhor e-mail institucional"
          placeholder="Seu melhor e-mail institucional"
          className="min-w-0 flex-1 bg-transparent placeholder:text-white/60 text-white text-base md:text-lg outline-none px-4 py-3 md:py-2"
          value={lead.email}
          onChange={(e) => setLead({
            ...lead,
            email: e.target.value.toLowerCase()
          })}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto md:ml-2 whitespace-normal md:whitespace-nowrap rounded-full bg-primary px-4 py-3 text-base md:text-lg font-medium text-white shadow-[0_6px_20px_rgba(37,99,235,0.18)] hover:bg-primary-hover duration-300 flex items-center justify-center"
        >
          {isLoading ? <LoaderCircle className='animate-spin h-5 w-5' /> : 'Garantir acesso antecipado'}
        </button>
      </form>
    </div>
  )
}