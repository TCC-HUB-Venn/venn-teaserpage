"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContainerCTAInput } from "../ui/ContainerCTAInput";

export const InitialSection = () => {
  return (
    <section
      id="initial"
      className="relative flex items-center overflow-hidden pt-32 pb-20 px-4 sm:pt-40 sm:pb-24 sm:px-6 lg:pt-64 lg:pb-32 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center md:gap-10 lg:flex-row lg:items-center lg:gap-0 lg:pr-16">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 order-1 w-full max-w-[610px] space-y-5 text-center lg:text-left"
        >
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl mb-12">
            Orientar e escrever um TCC não precisa ser um pesadelo.
          </h1>

          <p className="mx-auto max-w-xl text-base text-white/80 sm:text-lg lg:mx-0">
            Diga adeus aos e-mails perdidos, formatações ABNT manuais e grupos
            de WhatsApp caóticos. O primeiro CRM acadêmico all-in-one focado em
            produtividade está chegando.
          </p>

          <div className="flex justify-center lg:justify-start">
            <ContainerCTAInput />
          </div>
        </motion.div>

        {/* Imagem no mobile/tablet: bem maior, sempre abaixo do texto */}
        <div className="relative order-2 self-end h-[380px] w-[90%] max-w-[560px] sm:h-[460px] sm:w-[75%] sm:max-w-[640px] lg:hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <motion.div
              className="absolute right-0 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-primary/20 blur-[110px] sm:h-[320px] sm:w-[320px]"
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
              src="/assets/layout.png"
              alt="Initial Image"
              fill
              priority
              quality={100}
              sizes="(max-width: 1023px) 95vw, 0vw"
              className="object-contain object-right"
            />
          </motion.div>
        </div>
      </div>

      {/* Imagem no desktop: comportamento absoluto original, ao lado direito */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44vw] max-w-[720px] lg:block">
        <motion.div
          animate={{ y: [0, -32, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
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
            src="/assets/layout.png"
            alt="Initial Image"
            fill
            priority
            quality={100}
            sizes="(min-width: 1024px) 44vw, 0vw"
            className="object-contain object-right"
          />
        </motion.div>
      </div>
    </section>
  );
};