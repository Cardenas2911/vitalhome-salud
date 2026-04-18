"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Info, ArrowLeft, ArrowRight, BookOpen, ChevronRight } from "lucide-react";

interface Term {
  term: string;
  definition: string;
  solution: string;
}

const termsData: Term[] = [
  {
    term: "Astenia",
    definition: "Sensación generalizada de cansancio, fatiga física y psíquica que no desaparece con el descanso.",
    solution: "Evaluamos el perfil nutricional y diseñamos rutinas de actividad física leve para recuperar niveles óptimos de energía."
  },
  {
    term: "Burnout del Cuidador",
    definition: "Estado de agotamiento físico, emocional y mental severo que afecta a los familiares responsables de un paciente dependiente.",
    solution: "Transformamos la dinámica familiar mediante servicios de relevo clínico, permitiendo que usted recupere su rol de hijo/a mientras nosotros asumimos la carga médica."
  },
  {
    term: "Cuidados Paliativos",
    definition: "Atención médica enfocada en mejorar la calidad de vida aliviando el dolor y síntomas de enfermedades graves.",
    solution: "Brindamos soporte 24/7 con enfermeras jefe expertas en control del dolor y acompañamiento emocional para el paciente y su familia."
  },
  {
    term: "Disfagia",
    definition: "Dificultad o molestia al tragar alimentos o líquidos, lo que aumenta el riesgo de asfixia o neumonía.",
    solution: "Nuestras enfermeras implementan protocolos de alimentación segura y texturas adaptadas para evitar complicaciones letales."
  },
  {
    term: "Edema Periférico",
    definition: "Hinchazón causada por la acumulación de líquidos en los tejidos corporales, generalmente en las piernas.",
    solution: "Realizamos drenaje linfático manual y terapia física especializada para mejorar la circulación y reducir el dolor asociado."
  },
  {
    term: "Fragilidad Geriátrica",
    definition: "Estado de vulnerabilidad biológica caracterizado por la disminución de reservas fisiológicas, aumentando el riesgo de caídas y hospitalización.",
    solution: "Implementamos un enfoque preventivo de 360° (programa de Entrenador en rehabilitación física) para revertir este estado y recuperar la autonomía de su familiar."
  },
  {
    term: "Gastrostomía (Sonda GTT)",
    definition: "Abertura quirúrgica en el estómago para la administración directa de alimentación enteral y medicamentos.",
    solution: "Nuestro personal de enfermería asume el manejo completo, higiene y alimentación por sonda, evitando infecciones y eliminando el estrés familiar."
  },
  {
    term: "Hospitalización Domiciliaria",
    definition: "Traslado de los cuidados intensivos y de nivel hospitalario a la comodidad y seguridad del hogar del paciente.",
    solution: "Desplegamos tecnología de monitoreo remoto y personal clínico 24/7 para que su familiar se recupere en su propia cama, lejos de virus intrahospitalarios."
  },
  {
    term: "Incontinencia Urinaria",
    definition: "Pérdida del control de la vejiga; una condición común que genera aislamiento social y alto riesgo de infecciones o dermatitis.",
    solution: "Manejamos la higiene integral con absoluto respeto a la dignidad del paciente, devolviendo el confort diario y protegiendo la integridad de su piel."
  },
  {
    term: "Junta Médica Interdisciplinaria",
    definition: "Evaluación conjunta de un caso clínico por múltiples especialistas para definir la mejor ruta de acción y tratamiento.",
    solution: "Nuestro equipo de geriatras, enfermeras jefes y terapeutas audita periódicamente el plan de cuidado de su familiar para ajustarlo según su evolución exacta."
  },
  {
    term: "Kinesioterapia",
    definition: "Tratamiento de enfermedades y lesiones a través del movimiento guiado y la terapia física.",
    solution: "Llevamos la rehabilitación a su sala. Nuestros entrenadores en rehabilitación física diseñan rutinas clínicas seguras para combatir la rigidez articular y restaurar la movilidad."
  },
  {
    term: "Labilidad Emocional",
    definition: "Cambios rápidos, exagerados y a menudo impredecibles en el estado de ánimo, comunes en demencias o tras eventos neurológicos.",
    solution: "Brindamos apoyo psicológico y contención emocional experta, creando un entorno de calma constante para el paciente y orientación para la familia."
  },
  {
    term: "Multimorbilidad",
    definition: "Presencia simultánea de dos o más enfermedades crónicas (ej. diabetes, hipertensión, artrosis) en un mismo paciente.",
    solution: "Nuestra coordinación clínica orquesta un plan de cuidado maestro que equilibra todos los tratamientos, evitando interacciones peligrosas y estabilizando la salud general."
  },
  {
    term: "Neumonía Aspirativa",
    definition: "Infección pulmonar grave causada por la inhalación accidental de alimentos, líquidos o saliva hacia las vías respiratorias. Es un riesgo crítico en adultos mayores con disfagia.",
    solution: "Implementamos protocolos clínicos de alimentación segura (elevación a 45°, texturas adaptadas y supervisión constante), mitigando el riesgo de asfixia."
  },
  {
    term: "Ostomía (Cuidado de estomas)",
    definition: "Abertura creada quirúrgicamente en el abdomen para la eliminación de desechos corporales. Su mal manejo provoca infecciones severas.",
    solution: "Nuestro personal asume el manejo experto, limpieza y cambio de bolsas de recolección, devolviéndole la dignidad al paciente y liberándolo a usted de esta carga clínica."
  },
  {
    term: "Polifarmacia",
    definition: "Uso simultáneo de múltiples medicamentos, común en adultos mayores, que eleva el riesgo de intoxicación o efectos adversos.",
    solution: "Nuestra dirección médica y enfermería supervisa estrictamente las dosis y horarios de administración para evitar interacciones medicamentosas peligrosas."
  },
  {
    term: "Quimioterapia (Soporte Post-Sesión)",
    definition: "Manejo de los síntomas secundarios severos (náuseas, debilidad extrema, inmunosupresión) tras un tratamiento oncológico.",
    solution: "Proporcionamos monitoreo de signos vitales, hidratación y soporte clínico en casa, siendo el escudo protector de su familiar en su momento más vulnerable."
  },
  {
    term: "Rehabilitación Cognitiva",
    definition: "Terapias diseñadas para restaurar o compensar déficits de memoria, atención o razonamiento en patologías como el Alzheimer.",
    solution: "Integramos ejercicios neuro-cognitivos en la rutina diaria del paciente para ralentizar el deterioro y mantenerlo conectado positivamente con su entorno."
  },
  {
    term: "Sarcopenia",
    definition: "Pérdida degenerativa de masa y potencia muscular que ocurre durante el envejecimiento o en pacientes postrados.",
    solution: "Mediante nuestro programa de Entrenador en rehabilitación física, prevenimos la pérdida muscular con ejercicios de resistencia progresiva dirigidos clínicamente por entrenadores en rehabilitación física."
  },
  {
    term: "Trombosis Venosa Profunda (TVP)",
    definition: "Formación de un coágulo de sangre en una vena profunda, un riesgo crítico y potencialmente letal en pacientes encamados.",
    solution: "La prevenimos activamente mediante movilización programada, masajes de drenaje circulatorio y estricto control de signos por parte de nuestras enfermeras."
  },
  {
    term: "Úlcera por Presión (Escara)",
    definition: "Lesión grave en la piel y el tejido inferior causada por presión prolongada, común en pacientes encamados o con movilidad reducida. Su aparición genera dolor extremo y un altísimo riesgo de infección severa.",
    solution: "No permitimos que el deterioro avance. Implementamos protocolos inquebrantables de cambios de posición cada 2 horas y curaciones avanzadas lideradas por enfermeras, para prevenir infecciones y promover la cicatrización total en la cama del paciente."
  },
  {
    term: "Valoración Integral Geriátrica (VIG)",
    definition: "Proceso diagnóstico multidimensional para identificar las necesidades clínicas funcionales, mentales y sociales del adulto mayor.",
    solution: "Es el punto de partida de nuestra metodología. No improvisamos; trazamos una ruta de cuidado exacta basada en datos clínicos y en la realidad de su hogar."
  },
  {
    term: "Wearables Médicos (Dispositivos Remotos)",
    definition: "Aparatos electrónicos portátiles que monitorizan continuamente constantes vitales como el ritmo cardíaco o la saturación de oxígeno.",
    solution: "Integramos lecturas de dispositivos en nuestro esquema de monitoreo, permitiendo a nuestras enfermeras jefes anticiparse a emergencias médicas las 24 horas."
  },
  {
    term: "Xerostomía",
    definition: "Sequedad extrema de la boca por falta de saliva, una condición dolorosa muy común en el adulto mayor polimedicado.",
    solution: "Aplicamos protocolos de hidratación oral constante e higiene bucal especializada para evitar fisuras, infecciones y garantizar el confort nutricional del paciente."
  },
  {
    term: "Yeyunostomía",
    definition: "Sonda de alimentación implantada quirúrgicamente de forma directa en el intestino delgado para soporte nutricional avanzado.",
    solution: "Nuestras enfermeras realizan la administración de nutrientes y la asepsia del estoma con técnica estéril estricta, eliminando cualquier riesgo de infección en casa."
  },
  {
    term: "Zóster (Herpes Zóster / Culebrilla)",
    definition: "Infección viral aguda y extremadamente dolorosa que se reactiva frecuentemente en adultos mayores debido a la baja del sistema inmune.",
    solution: "Ofrecemos control estricto del dolor prescrito y curaciones tópicas avanzadas, acortando el tiempo de recuperación y aliviando el sufrimiento continuo del paciente."
  }
];

export function GlossaryExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Ajustar items por página según el tamaño de la pantalla
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(3); // Móvil
      else if (window.innerWidth < 1024) setItemsPerPage(6); // Tablet
      else setItemsPerPage(9); // PC
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const filteredTerms = useMemo(() => {
    return termsData.filter(t => {
      const matchesSearch = t.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            t.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
      const termFirstLetter = t.term.charAt(0).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const matchesLetter = !selectedLetter || termFirstLetter === selectedLetter;
      
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedLetter]);

  const totalPages = Math.ceil(filteredTerms.length / itemsPerPage);
  
  const currentTerms = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTerms.slice(start, start + itemsPerPage);
  }, [filteredTerms, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll suave hacia arriba de la sección
    document.getElementById('glossary-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Reset de página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedLetter]);

  return (
    <div className="w-full space-y-12">
      
      {/* Search Input */}
      <div className="relative max-w-2xl mx-auto -mt-10 lg:-mt-16 z-30">
        <div className="bg-white rounded-[30px] shadow-2xl p-2 flex items-center border border-slate-100 group transition-all focus-within:ring-4 focus-within:ring-blue-100">
          <div className="pl-6 text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <input 
            type="text" 
            placeholder="¿Qué diagnóstico o término médico busca?" 
            className="w-full bg-transparent px-6 py-5 text-[#061a36] font-semibold outline-none placeholder:text-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Sticky Alphabet Nav */}
      <div className="sticky top-24 z-40 bg-[#f8f9fa]/80 backdrop-blur-md py-4 border-y border-slate-200 overflow-x-auto scrollbar-hide">
        <div className="max-w-max mx-auto flex justify-between gap-1 md:gap-2 px-4">
          <button 
            onClick={() => { setSelectedLetter(null); setSearchTerm(""); }}
            className={`text-xs font-black p-2 md:px-4 rounded-lg transition-all ${!selectedLetter ? 'bg-[#155ec0] text-white' : 'hover:bg-blue-50 text-slate-400'}`}
          >
            TODOS
          </button>
          {alphabet.map(letter => {
              const hasItems = termsData.some(t => {
                const termLetter = t.term.charAt(0).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return termLetter === letter;
              });
              return (
                <button 
                  key={letter}
                  onClick={() => { setSelectedLetter(letter); setSearchTerm(""); }}
                  disabled={!hasItems}
                  className={`text-xs font-black p-2 rounded-lg min-w-[32px] transition-all
                    ${selectedLetter === letter ? 'bg-[#155ec0] text-white' : hasItems ? 'text-[#104892] hover:bg-white hover:shadow-sm' : 'text-slate-300 cursor-not-allowed opacity-30'}
                  `}
                >
                  {letter}
                </button>
              )
          })}
        </div>
      </div>

      {/* Grid de Términos (Bento Grid) */}
      <div id="glossary-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {currentTerms.length > 0 ? (
          currentTerms.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[40px] p-8 md:p-10 border border-[#e2e8f0] hover:border-[#155ec0] hover:shadow-2xl transition-all duration-500 flex flex-col group animate-in fade-in slide-in-from-bottom-4">
              <div className="flex justify-between items-start mb-6">
                 <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#155ec0] group-hover:bg-[#155ec0] group-hover:text-white transition-all">
                    <BookOpen className="size-6" />
                 </div>
                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.term.charAt(0)}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-black text-[#011633] font-heading mb-4 group-hover:text-[#155ec0] transition-colors leading-tight">
                {item.term}
              </h3>
              
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 flex-grow italic overflow-hidden line-clamp-4">
                {item.definition}
              </p>
              
              <div className="mt-auto pt-8 border-t border-slate-100">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="h-[2px] w-4 bg-blue-400"></div>
                    <span className="text-[10px] font-black text-[#104892] uppercase tracking-[0.2em]">En VitalHome Salud</span>
                 </div>
                 <p className="text-[#061a36] font-bold text-[13px] leading-relaxed">
                   {item.solution}
                 </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center space-y-4">
            <div className="text-slate-100 flex justify-center">
              <BookOpen className="w-32 h-32" />
            </div>
            <p className="text-slate-400 font-bold text-xl italic text-balance">No hay términos que coincidan con su búsqueda.</p>
            <button 
                onClick={() => { setSelectedLetter(null); setSearchTerm(""); }}
                className="text-[#155ec0] font-black text-xs uppercase tracking-widest hover:underline"
            >
                Ver todos los términos
            </button>
          </div>
        )}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-t border-slate-200">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                Mostrando <span className="text-[#061a36]">{currentTerms.length}</span> de <span className="text-[#061a36]">{filteredTerms.length}</span> términos
            </div>
            
            <nav className="flex items-center gap-2">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-3 rounded-xl border border-slate-200 hover:border-[#155ec0] hover:text-[#155ec0] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-1">
                    {[...Array(totalPages)].map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`min-w-[44px] h-[44px] rounded-xl font-black text-xs transition-all ${currentPage === i + 1 ? 'bg-[#155ec0] text-white shadow-lg shadow-blue-200' : 'hover:bg-blue-50 text-[#104892]'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-3 rounded-xl border border-slate-200 hover:border-[#155ec0] hover:text-[#155ec0] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </nav>
        </div>
      )}
    </div>
  );
}
