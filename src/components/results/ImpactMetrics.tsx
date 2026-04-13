import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, HeartPulse } from 'lucide-react';

const stats = [
  {
    label: 'Éxito en Rehabilitación',
    value: '94%',
    desc: 'De pacientes recuperan movilidad funcional en casa.',
    icon: TrendingUp,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    label: 'Reducción Hospitalaria',
    value: '40%',
    desc: 'Menos reingresos comparado con cuidado empírico.',
    icon: HeartPulse,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    label: 'Familias Satisfechas',
    value: '+500',
    desc: 'Hogares que han recuperado su tranquilidad.',
    icon: Users,
    color: 'text-[#104892]',
    bg: 'bg-blue-100/50'
  }
];

export const ImpactMetrics = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[40px] p-10 border border-[#e2e8f0] hover:shadow-2xl transition-all duration-500 group"
          >
            <div className={`size-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
              <stat.icon className="size-7" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-5xl font-black text-[#061a36] font-heading tracking-tight">
                {stat.value}
              </h3>
              <p className="text-[#104892] font-black text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </p>
              <p className="text-slate-500 font-medium text-sm leading-relaxed pt-2">
                {stat.desc}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-2 text-[#155ec0]">
                <CheckCircle2 className="size-4" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#155ec0]/70">Dato Clínico Verificado</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
