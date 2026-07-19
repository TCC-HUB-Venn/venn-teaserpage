"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export const IAMockup = () => {
  const risk = [
    { name: "Beatriz M.", value: "72", color: "#EF5350" },
    { name: "Carlos F.", value: "38", color: "#D89A24" },
    { name: "Ana Lima", value: "18", color: "#4FA276" },
    { name: "Pedro R.", value: "55", color: "#D89A24" },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="space-y-6"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider">
            Painel de Risco - IA
          </h3>

          <span className="text-xs text-white/40">
            Atualizado há 2 min · Semestre 2025.2
          </span>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="font-medium flex gap-2 items-center justify-center rounded-full bg-red-600/20 border border-red-600/30 sm:px-3 px-2 py-1.5 w-fit text-red-200 text-sm"
        >
          <span className="w-2 h-2 bg-red-600 rounded-full" />1 alerta
        </motion.div>
      </div>

      {/* RISCOS */}
      <div className="space-y-4">
        {risk.map((student, index) => (
          <motion.div
            key={student.name}
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.5,
            }}
            className="flex items-center gap-4"
          >
            <span className="w-24 text-sm text-white/50">{student.name}</span>

            <div
              className="
                            flex-1 
                            h-3 
                            rounded-full 
                            bg-white/10 
                            overflow-hidden
                        "
            >
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${student.value}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full rounded-full"
                style={{
                  backgroundColor: student.color,
                }}
              />
            </div>

            <motion.span
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.8 + index * 0.15,
              }}
              className="text-sm font-bold"
              style={{
                color: student.color,
              }}
            >
              {student.value}%
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* SUGESTÃO IA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 1,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5
                    flex
                    gap-4
                "
      >
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-2xl
        bg-purple-500/20
        border
        border-purple-500/30
    "
        >
          <Bot className="h-5 w-5" />
        </motion.div>

        <div>
          <span className="text-sm font-bold text-white/50 uppercase">
            Sugestão da IA
          </span>
          <p className="mt-2 text-white/60">
            Beatriz M. não abre a plataforma há 12 dias. Risco de abandono:
            <strong className="text-red-400"> alto.</strong>
          </p>
          <p className="text-white/60">
            Recomenda-se contato do orientador ainda hoje.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
