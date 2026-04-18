import React from 'react';
import { motion } from 'framer-motion';
import { Play, Quote, Calendar, Activity, ShieldCheck, ArrowRight, TrendingUp, Users } from 'lucide-react';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  patient: string;
  challenge: string;
  methodology: string;
  result: string;
  kpi: string;
  kpiLabel: string;
  image: string;
  testimonial: string;
  author: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    category: 'Post-Quirúrgico de Alta Complejidad',
    title: 'Recuperación Acelerada de Reemplazo de Cadera',
    patient: 'Sra. Elena M. (78 años)',
    challenge: 'Riesgo inminente de neumonía y trombosis por inmovilidad prolongada tras una caída accidental.',
    methodology: 'Despliegue de enfermería 24/7 y entrenador en rehabilitación física diaria bajo la Metodología VitalHome Salud. Control estricto de dolor y movilización temprana.',
    result: 'Recuperación de la marcha independiente en 22 días (50% menos que el promedio clínico habitual). Reincorporación total a su entorno familiar.',
    kpi: '22 Días',
    kpiLabel: 'Deporte a Marcha',
    image: '/images/results/hip-recovery.jpg',
    testimonial: "Pasamos del miedo de ver a mi madre postrada, a la alegría de verla caminar de nuevo en su jardín. El equipo de VitalHome fue su red de seguridad.",
    author: "Hijo de la paciente"
  },
  {
    id: '2',
    category: 'Neuro-Geriatría (Alzheimer)',
    title: 'Estabilización Cognitiva y Alivio Familiar',
    patient: 'Sr. Roberto G. (84 años)',
    challenge: 'Episodios de agresividad y desorientación que llevaron al agotamiento extremo (Burnout) de su esposa e hijos.',
    methodology: 'Implementación de Rutina Predictiva VitalHome®. Estimulación cognitiva diaria y manejo no farmacológico de conductas disruptivas.',
    result: 'Reducción del 80% en episodios de agitación. La familia recuperó el descanso nocturno y la conexión emocional positiva con su padre.',
    kpi: '-80%',
    kpiLabel: 'Episodios de Agitación',
    image: '/images/results/alzheimer-stability.jpg',
    testimonial: "Gracias a las enfermeras jefes, pudimos volver a ser sus hijos y dejar de ser sus celadores. La calidad de vida de todos cambió para siempre.",
    author: "Familiar Responsable"
  },
  {
    id: '3',
    category: 'Cuidados Paliativos y Dolor',
    title: 'Dignidad y Comfort en Etapa Final',
    patient: 'Sra. Martha L. (72 años)',
    challenge: 'Dolor oncológico no controlado y angustia respiratoria que impedían una despedida en paz.',
    methodology: 'Gestión avanzada de síntomas por enfermería oncológica. Soporte psicológico continuo y manejo del dolor por infusiones subcutáneas fijas.',
    result: 'Control total del dolor físico en 24h. La paciente pudo compartir momentos lúcidos y serenos con su familia en la comodidad de su propia cama.',
    kpi: '100%',
    kpiLabel: 'Control del Dolor',
    image: '/images/results/palliative-care.jpg',
    testimonial: "VitalHome no solo cuidó su cuerpo, cuidó su dignidad. Pudimos despedirnos con amor y sin sufrimiento, tal como ella quería.",
    author: "Hija de la paciente"
  }
];

export const CaseStudyCard = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {caseStudies.map((study, idx) => (
        <motion.div 
          key={study.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.1 }}
          className={`flex flex-col lg:flex-row gap-12 lg:items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative group">
             <div className="absolute inset-0 bg-blue-600/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a36]/60 to-transparent z-10"></div>
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                   <ShieldCheck className="size-4 text-[#155ec0]" />
                   <span className="text-[10px] font-black text-[#104892] uppercase tracking-wider">Identidad Protegida</span>
                </div>
                
                {/* Placeholder para imagen (usar color de marca si no hay imagen) */}
                <div className="w-full h-full bg-[#061a36]/5 flex items-center justify-center">
                    <Activity className="size-20 text-blue-100 animate-pulse" />
                </div>

                <div className="absolute bottom-8 left-8 right-8 z-20">
                   <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-xl flex items-center justify-between">
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">{study.kpiLabel}</p>
                         <p className="text-3xl font-black font-heading leading-none">{study.kpi}</p>
                      </div>
                      <div className="size-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                         <TrendingUp className="size-6" />
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#155ec0] text-[10px] font-black uppercase tracking-wider">
                {study.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#011633] font-heading leading-tight italic">
                "{study.title}"
              </h2>
              <p className="text-[#104892] font-black text-sm flex items-center gap-2">
                <Users className="size-4" /> Caso: {study.patient}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-slate-100">
              <div className="space-y-2">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">El Desafío Clínico</p>
                 <p className="text-slate-600 text-sm font-medium leading-relaxed">{study.challenge}</p>
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] font-black text-[#155ec0] uppercase tracking-widest">Nuestra Intervención</p>
                 <p className="text-[#061a36] text-sm font-bold leading-relaxed">{study.methodology}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 relative overflow-hidden group">
               <Quote className="absolute -top-4 -right-4 size-24 text-slate-200/50 group-hover:text-blue-200/30 transition-colors" />
               <p className="relative z-10 text-[#061a36] font-medium text-lg italic leading-relaxed mb-4">
                 "{study.testimonial}"
               </p>
               <p className="relative z-10 text-[10px] font-black text-[#104892] uppercase tracking-[0.2em]">
                 — {study.author}
               </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
                <button className="flex items-center gap-3 bg-[#104892] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#061a36] transition-all shadow-xl shadow-blue-900/10 active:scale-95 group">
                   Solicitar este protocolo
                   <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
