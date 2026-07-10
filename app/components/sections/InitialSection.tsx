"use client"
import Image from "next/image"
import { motion, useMotionValue } from "framer-motion"
import { ContainerCTAInput } from "../ui/ContainerCTAInput"

export const InitialSection = () => {

    return (
        <section id='initial' className='relative flex items-center overflow-hidden pt-52 pb-32'>
            <div className='mx-auto flex w-full max-w-7xl items-center pl-6 lg:pr-16'>
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className='relative z-10 w-full max-w-[610px] space-y-5'
                >
                    <h1 className='text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl'>Orientar e escrever um TCC não precisa ser um pesadelo.</h1>
                    <p className='max-w-xl text-lg text-white/80'>Diga adeus aos e-mails perdidos, formatações ABNT manuais e grupos de WhatsApp caóticos. O primeiro CRM acadêmico all-in-one focado em produtividade está chegando.</p>
                    <ContainerCTAInput />
                </motion.div>
            </div>

            <div className='pointer-events-none absolute inset-y-0 right-0 hidden w-[44vw] max-w-[720px] lg:block'>
                
                <motion.div
                    animate={{ y: [0, -32, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className='relative h-full w-full'>
                   
                    <motion.div
                        className="
                            absolute
                            right-0
                            top-1/2
                            h-[300px]
                            w-[300px]
                            rounded-full
                            bg-primary/20
                            blur-[120px]
                        "
                        animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.3, 0.45, 0.3],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        />
                    <Image
                        src='/assets/layout.png'
                        alt='Initial Image'
                        fill
                        priority
                        quality={100}
                        sizes='(min-width: 1024px) 44vw, 0vw'
                        className='object-contain object-right'
                    />
                </motion.div>
            </div>
        </section>
    )
}