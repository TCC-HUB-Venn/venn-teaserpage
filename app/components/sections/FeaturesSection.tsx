"use client"

import { Workflow } from "lucide-react"
import { motion } from "framer-motion"
import { CardFeature } from "../ui/CardFeature"
import EditorMockup from "../ui/Mockup/EditorMockup"
import { Subtitle } from "../ui/Subtitle"
import { Title } from "../ui/Title"
import { WorkflowMockup } from "../ui/Mockup/WorkflowMockup"
import { IAMockup } from "../ui/Mockup/IAMockup"

export function FeatureSection() {
    
    return (
        <section id='features' className='mx-auto py-24 max-w-7xl flex gap-8'>
            
            <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className='w-[380px] space-y-5 text-center'
            >
                <Subtitle text='Funcionalidades' color='text-[#51A2FF]' />
                <Title text='O que está por vir' isCenter={false}/>
                <p className='text-white/80 text-left'>
                    Estes são apenas alguns dos recursos que estamos preparando para transformar a experiência de alunos, orientadores e coordenadores.
                </p>
            </motion.div>

            <div className='w-full grid grid-cols-5 gap-4'>
                <CardFeature 
                    title="Editor ABNT Nativo & Invisível"
                    description="Foque nas suas ideias. Nossa inteligência cuida de todas as regras e margens enquanto você digita."
                    isLarge={true}>
                    <EditorMockup />
                </CardFeature>

                <CardFeature 
                    title="Workflow Transparente (Kanban)"
                    description="Da primeira proposta à ata de defesa assinada. Saiba exatamente o que fazer, quando fazer e quem precisa aprovar."
                    isLarge={false}>
                    <WorkflowMockup />
                </CardFeature>

                <CardFeature 
                    title="IA Integrada"
                    description="Insights, verificação de plágio e risco preditivo trabalhando a favor do seu departamento."
                    isLarge={true}>
                    <IAMockup />
                </CardFeature>

                <CardFeature 
                    title="Compliance LGPD"
                    description="Auditoria completa e segurança jurídica desde o dia zero."
                    isLarge={false}>
                    <EditorMockup />
                </CardFeature>       
            </div>
        </section>
    )
}