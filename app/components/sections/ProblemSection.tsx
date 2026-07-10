"use client"
import { AlertTriangle, Clock3, GitMerge, UserX } from "lucide-react"
import { motion } from "framer-motion"
import { Subtitle } from "../ui/Subtitle"
import { Title } from "../ui/Title"

export const ProblemSection = () => {

    const problems = [
        {
            icon: <Clock3 className="h-6 w-6" />,
            title: "Sobrecarga do Orientador",
            description: "O tempo escasso é consumido com microgerenciamento, cobrança de prazos, correção de normas ABNT e suporte emocional — desviando o foco da verdadeira discussão acadêmica."
        },
        {
            icon: <AlertTriangle className="h-6 w-6" />,
            title: "Ansiedade na Formatação",
            description: "Alunos lutam mais com margens do que com o conteúdo. A falta de autonomia transforma a orientação em uma relação de extrema dependência tecnológica."
        },
        {
            icon: <UserX className="h-6 w-6" />,
            title: "Evasão Invisível",
            description: "Instituições perdem alunos na reta final pelo desalinhamento crônico de escopo e expectativas entre orientador e orientando. Sem dados, não há prevenção."
        },
    ]

    return (
        <section id='problem' className='max-w-5xl mx-auto py-24'>

            <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className='mx-auto max-w-xl space-y-4'
            >
                <Subtitle text='O PROBLEMA' color='text-[#FF6467]' isCenter={true} />
                <Title text='A gestão atual de trabalhos acadêmicos está quebrada.' highlight='quebrada' />
                <p className='text-center text-white/80'>E você já sentiu isso no dia a dia.</p>
            </motion.div>


            <motion.div
                className='grid grid-cols-3 gap-8 mt-28'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                {problems.map((problem, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20,
                                filter: 'blur(10px)'
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)'
                            }
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className='bg-white/[0.03] rounded-card p-6 border border-white/15'
                    >
                        <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6467]/15 text-[#FF6467] border border-[#FF6467]/30'>
                            {problem.icon}
                        </div>

                        <h4 className='mb-2 text-xl font-bold text-white mt-4'>
                            {problem.title}
                        </h4>

                        <p className='text-white/70'>
                            {problem.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className='mt-10 flex items-center gap-3 rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/10 px-6 py-4 font-medium text-white/70'
            >
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/15 text-[#2563EB]'>
                    <GitMerge className='h-5 w-5' />
                </div>

                <p>
                    <strong className='text-white/85'>
                        O Venn substitui o Word, o WhatsApp e as planilhas do coordenador
                    </strong>{" "}
                    em um único fluxo organizado. Do primeiro encontro à ata de defesa assinada.
                </p>
            </motion.div>

        </section>
    )
}