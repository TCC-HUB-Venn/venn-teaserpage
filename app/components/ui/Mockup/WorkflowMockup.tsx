"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const WorkflowMockup = () => {
  const ref = useRef(null);

  const isVisible = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const columns = [
    {
      title: "PROPOSTA",
      color: "bg-yellow-400",
      card: "Definição do tema",
      height: "h-[120px]",
    },
    {
      title: "EXECUÇÃO",
      color: "bg-blue-400",
      card: "Cap. 1 — Revisão",
      height: "h-[140px]",
    },
    {
      title: "DEFESA",
      color: "bg-green-400",
      card: "Ata assinada",
      height: "h-[90px]",
    },
  ];

  return (
    <div ref={ref} className="w-full h-[300px] overflow-hidden">
      {/* Início do header */}
      <motion.div
        className="flex justify-between"
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={
          isVisible
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.5,
        }}
      >
        {" "}
        <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
          TCC - Gabriel Ramos
        </span>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
      </motion.div>
      {/* Fim do header */}

      <div className="grid grid-cols-3 gap-2 mt-6">
        {columns.map((column, index) => (
          <motion.div
            key={column.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: index * 0.2,
            }}
          >
            <div className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${column.color}`} />

              <span className="text-white/50 font-semibold text-xs">
                {column.title}
              </span>
            </div>
            <div className="mt-3">
              <motion.div
                key={column.card}
                className={`${column.height} rounded-card border border-white/10 bg-white/[0.02] p-3`}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={
                  isVisible
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  delay: index * 0.2,
                }}
              >
                <div className="h-3 w-3/4 rounded-full bg-white/10" />

                <p className="mt-3 text-sm text-white/40">{column.card}</p>

                <div className="mt-2 h-2.5 w-8 rounded-full bg-white/10" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <span className="text-white/40">Progresso geral</span>

          <motion.span
            className="text-blue-400 font-bold"
            initial={{
              opacity: 0,
            }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              delay: 2,
            }}
          >
            68%
          </motion.span>
        </div>

        <div
          className="mt-2 h-2.5 rounded-full bg-white/5 overflow-hidden"
        >
          <motion.div
            className="h-full bg-blue-500 rounded-full "
            initial={{
              width: 0,
            }}
            animate={
              isVisible
                ? {
                    width: "68%",
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              delay: 1.5,
            }}
          />
        </div>
      </div>
    </div>
  );
};
