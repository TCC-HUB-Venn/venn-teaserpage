import { motion } from "framer-motion";
import { ShieldCheck, Check, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

const audits = [
  {
    time: "09:41",
    title: "Acesso ao documento",
    user: "Prof. Carla",
    status: "success",
  },
  {
    time: "09:38",
    title: "Exportação de dados",
    user: "Coord. Fernanda",
    status: "success",
  },
  {
    time: "09:22",
    title: "Login institucional",
    user: "Gabriel R.",
    status: "success",
  },
  {
    time: "08:55",
    title: "Alteração de permissão",
    user: "Admin",
    status: "warning",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.97,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Counter({ start }: { start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [start]);

  return <>{value}%</>;
}

export function CompilanceMockup() {
  const [counterStarted, setCounterStarted] = useState(false);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      onAnimationComplete={() => setCounterStarted(true)}
      className="w-full text-white"
    >

      {/* Header */}
      <div className="flex justify-between items-start">

        <div className="flex gap-2 items-center">

          <motion.div
            initial={{
              scale: 0,
              rotate: -15,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 12,
              delay: 0.4,
            }}
            className="
              w-11 h-11
              rounded-2xl
              border border-[#1e5c40]
              bg-[#10231b]
              flex items-center justify-center
            "
          >
            <ShieldCheck
              size={22}
              className="text-[#5ee39a]"
            />
          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            <h3 className="text-sm font-semibold text-[#00D492] uppercase tracking-wider">
              Conformidade LGPD
            </h3>

            <p className="text-gray-500 text-sm">
              Auditoria em tempo real
            </p>
          </motion.div>

        </div>


        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="text-right"
        >
          <div className="
            text-lg
            font-bold
            text-[#63e39b]
          ">
            <Counter start={counterStarted} />
          </div>

          <p className="text-gray-600">
            score
          </p>
        </motion.div>

      </div>


      {/* Lista */}
      <motion.div
        className="mt-8"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.4,
            },
          },
        }}
      >

        {audits.map((item, index) => (

          <motion.div
            key={item.title}
            variants={itemVariants}
            className="
              flex
              items-center
              py-3
              border-b
              border-[#171b19]
            "
          >

            <span className="
              w-14
              text-gray-600
              text-sm
            ">
              {item.time}
            </span>


            <div className="flex-1">

              <h3 className="text-gray-300">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.user}
              </p>

            </div>


            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 14,
                delay: 1.4 + index * 0.15,
              }}
              className={`
                w-6 h-6
                rounded-full
                flex
                items-center
                justify-center

                ${
                  item.status === "success"
                    ? "bg-[#123528]"
                    : "bg-[#4b3510]"
                }
              `}
            >
              {item.status === "success" ? (
                <Check
                  size={18}
                  className="text-[#63e39b]"
                />
              ) : (
                <Minus
                  size={18}
                  className="text-yellow-400"
                />
              )}

            </motion.div>

          </motion.div>

        ))}

      </motion.div>

    </motion.div>
  );
}