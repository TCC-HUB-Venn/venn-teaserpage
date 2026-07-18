"use client"

import { motion } from "framer-motion"
import { ContainerCTAInput } from "../ui/ContainerCTAInput"
import { Subtitle } from "../ui/Subtitle"
import { Title } from "../ui/Title"

export const GuaranteeSection = () => {
    return (
        <section id='guarantee' className='px-8 relative overflow-hidden border-y border-white/10 py-24 bg-[#2563EB]/8'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_30%)]' />
            <div className='pointer-events-none absolute -right-20 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-3xl' />
            <div className='pointer-events-none absolute left-8 top-6 h-24 w-24 rounded-full bg-[#2563EB]/10 blur-2xl' />

            <div className='relative mx-auto flex max-w-7xl flex-col gap-24 py-12 lg:flex-row lg:items-center lg:justify-between'>

                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className='relative z-10 space-y-5 w-full lg:w-5/6'
                >
                    <Subtitle 
                        text='Vagas limitadas para a fase beta' 
                        color="#FFD230" 
                        isCenter={false} 
                    />

                    <Title text='Seja um dos primeiros a usar o Venn.' />

                    <p className='text-white/80'>
                        Junte-se a coordenadores e orientadores pioneiros que estão moldando o futuro da educação acadêmica.
                    </p>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className='relative z-10 w-full'
                >
                    <ContainerCTAInput />
                </motion.div>

            </div>
        </section>
    )
}