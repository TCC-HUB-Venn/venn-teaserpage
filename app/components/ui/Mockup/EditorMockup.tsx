"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function EditorMockup() {
  const lines = ["80%", "65%", "72%", "45%", "70%", "55%"];

  const ref = useRef(null);

  const isVisible = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <div
      ref={ref}
      className="
      w-full
      h-[300px]
      rounded-card
      bg-[#181818]
      border border-white/10
      overflow-hidden
    "
    >
      {/* Browser */}
      <motion.div
        className="h-16 border-b border-white/10 flex items-center px-4 gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .5 }}
      >
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        <div className="flex gap-4 ml-4">
          <div className="px-3 py-1.5 text-sm rounded-xl bg-white/5 text-white/70">
            capitulo_01.docx
          </div>

          <div className="text-white/20 py-1.5">
            referencias.docx
          </div>
        </div>
      </motion.div>


      <div className="relative h-full p-10">

        {/* Linhas aparecendo */}
        {lines.map((width, i) => (
          <motion.div
            key={i}
            className="h-3 bg-white/10 rounded-full mb-4"
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={
              isVisible
                ? {
                    width,
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: .8,
              delay: i * .12,
            }}
          />
        ))}


        {/* Barra de progresso ABNT */}
        <motion.div
          className="absolute left-10 top-[7.7rem] h-3 bg-primary rounded-full"
          initial={{
            width: 0,
          }}
          animate={
            isVisible
              ? {
                  width: "55%",
                }
              : {}
          }
          transition={{
            duration: 1.5,
            delay: .8,
          }}
        />


        {/* Badge ABNT */}
       <motion.div
            className="
                absolute 
                left-[calc(60%+2.5rem)]
                top-[7.45rem]
                px-3 
                py-1.5 
                rounded-lg 
                border 
                border-primary/40 
                bg-primary/10 
                text-primary-300 
                flex 
                items-center 
                gap-2 
                text-sm 
                font-medium
            "
        initial={{
            opacity: 0,
            scale: 0.8,
        }}
        animate={
        isVisible
            ? {
                opacity: 1,
                scale: 1,
                rotate: [0, -8, 8, -5, 5, 0],
            }
            : {}
        }
        transition={{
        opacity: {
            delay: 2,
        },
        scale: {
            delay: 2,
            type: "spring",
        },
        rotate: {
            delay: 2.5,
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2.0,
            ease: "easeInOut",
        },
        }}
        >
        <div className="h-2 w-2 rounded-full bg-primary-400" />
        ABNT
        </motion.div>


        {/* Cursor piscando */}
        <motion.div
          className="
          absolute 
          bottom-[6.25rem] 
          left-[calc(55%+0.25rem)]
          h-6 
          rounded-full 
          w-1 
          bg-primary-300
          "
          initial={{
            opacity: 0,
          }}
          animate={
            isVisible
              ? {
                  opacity: [1, 0, 1],
                }
              : {}
          }
          transition={{
            delay: 2.2,
            repeat: Infinity,
            duration: 1,
          }}
        />

      </div>
    </div>
  );
}