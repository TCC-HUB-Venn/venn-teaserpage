"use client"
import React, { useState } from "react"

interface ILead {
  id: number;
  email: string;
}

export const ContainerCTAInput: React.FC = () => {

  const [lead, setLead] = useState<ILead>({
    id: 0,
    email: ''
  })
  

  const postLead = async () => {
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

      if(!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const data = await response.json();
      console.log('data', data)

    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao cadastrar usuário', error.message)
      } else console.log('Erro desconhecido')
    }
  }

  return (
    <div className="w-full px-0">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postLead();
        }}
        className="w-full flex min-w-0 items-center gap-4 rounded-full bg-[rgba(255,255,255,0.08)] border border-white/15 px-2 py-2 shadow-inner backdrop-blur-sm max-w-[620px]"
      >
        <input
          aria-label="Seu melhor e-mail institucional"
          placeholder="Seu melhor e-mail institucional"
          className="min-w-0 flex-1 bg-transparent placeholder:text-white/60 text-white text-lg outline-none px-4 py-2"
          value={lead.email}
          onChange={(e) => setLead({
            ...lead, 
            email: e.target.value
          })}
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
