"use client";

import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Search, Heart, ShieldAlert, Truck, CreditCard, ArrowRight, MessageSquare } from "lucide-react";

const faqData = [
  {
    category: "Sobre Nuestro Personal Médico",
    icon: <Heart className="w-5 h-5" />,
    questions: [
      {
        q: "¿Cómo verifican los antecedentes de las enfermeras?",
        a: "Cada profesional supera un riguroso proceso de selección que incluye verificación de titulaciones ante los entes reguladores de salud, pruebas psicológicas y revisión exhaustiva de antecedentes disciplinarios. A su casa solo ingresa personal de confianza y élite clínica."
      },
      {
        q: "¿El personal es propio o subcontratado?",
        a: "En VitalHome Salud, el 100% de nuestro personal central está vinculado directamente. Esto nos permite garantizar la estandarización de nuestros protocolos de lujo clínico y asegurar una supervisión constante sobre la calidad del servicio."
      }
    ]
  },
  {
    category: "Protocolos de Emergencia",
    icon: <ShieldAlert className="w-5 h-5" />,
    questions: [
      {
        q: "¿Qué ocurre si mi familiar se complica a las 3:00 AM?",
        a: "Nuestra Metodología VitalCare® incluye monitoreo 24/7. Ante cualquier eventualidad, la enfermera de turno se comunica inmediatamente con nuestra Enfermera Jefe de guardia, quien coordina la estabilización del paciente y, si es necesario, el traslado urgente siguiendo nuestros protocolos clínicos."
      },
      {
        q: "¿Cuentan con respaldo de ambulancias?",
        a: "Sí, mantenemos alianzas estratégicas con servicios de red de urgencias para traslados medicalizados inmediatos. El protocolo se activa en segundos bajo la supervisión de nuestra dirección médica."
      }
    ]
  },
  {
    category: "Cobertura y Logística",
    icon: <Truck className="w-5 h-5" />,
    questions: [
      {
        q: "¿Qué áreas de la ciudad cubren exactamente?",
        a: "Actualmente brindamos cobertura integral en toda el área urbana de Bogotá y la sabana norte (Chía, Cajicá, Zipaquirá). Nuestra unidad médica móvil está diseñada para llegar a cualquier rincón con la misma eficiencia operativa."
      },
      {
        q: "¿Cuánto tiempo tardan en iniciar un servicio?",
        a: "Tras la Valoración Inicial (que suele ocurrir en menos de 24h), podemos iniciar el plan de cuidado en un plazo de 24 a 48 horas, dependiendo de la complejidad clínica requerida."
      }
    ]
  },
  {
    category: "Costos y Planes",
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        q: "¿Tienen tarifas fijas o planes a medida?",
        a: "No trabajamos con tarifas estandarizadas porque cada paciente es único. Realizamos una Valoración Inicial Gratuita en su domicilio para entender las necesidades clínicas exactas y, con base en ello, diseñamos un plan de cuidado (o membresía) a medida que garantice resultados."
      },
      {
        q: "¿Aceptan seguros médicos o medicina prepagada?",
        a: "Operamos de forma independiente para garantizar un estándar de lujo clínico sin las limitaciones de las EPS tradicionales. Sin embargo, emitimos facturación detallada para que usted pueda gestionar reembolsos si su póliza de salud lo permite."
      }
    ]
  }
];

export function FaqSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaq = faqData.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="w-full space-y-12">
      {/* Buscador */}
      <div className="relative max-w-2xl mx-auto -mt-10 lg:-mt-16 z-30">
        <div className="bg-white rounded-[30px] shadow-2xl p-2 flex items-center border border-slate-100 group transition-all focus-within:ring-4 focus-within:ring-blue-100">
          <div className="pl-6 text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <input 
            type="text" 
            placeholder="¿Cuál es su duda hoy? (Ej: emergencias, personal...)" 
            className="w-full bg-transparent px-6 py-5 text-[#061a36] font-semibold outline-none placeholder:text-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="hidden md:flex bg-[#155ec0] hover:bg-[#104892] text-white px-8 py-4 rounded-[22px] font-black text-[12px] uppercase tracking-widest transition-all shrink-0">
            Buscar
          </button>
        </div>
      </div>

      {/* Grid de Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        {filteredFaq.length > 0 ? (
          filteredFaq.map((category, idx) => (
            <div key={idx} className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center gap-4 text-[#104892]">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-black font-heading">{category.category}</h3>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="border-none">
                    <AccordionTrigger className="text-left text-[#061a36] font-bold text-base hover:text-[#155ec0] hover:no-underline py-4 px-0 border-b border-slate-50 transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 font-medium text-sm leading-relaxed pt-4 pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center space-y-4">
            <div className="text-slate-300 flex justify-center">
              <MessageSquare className="w-20 h-20" />
            </div>
            <p className="text-slate-500 font-bold text-xl">No encontramos respuestas para "{searchTerm}"</p>
            <p className="text-slate-400">Pruebe con términos más generales o contáctenos directamente.</p>
          </div>
        )}
      </div>
    </div>
  );
}
