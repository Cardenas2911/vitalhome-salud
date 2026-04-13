import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  MessageCircle
} from 'lucide-react';

const data = {
  company: {
    name: "VitalHome Salud",
    logo: "/images/logo-vitalhomesalud.png",
    tagline: "Ingeniería de Bienestar Domiciliario. Cuidado Integral, Dignidad y Tranquilidad para su Familia.",
    phone: "+57 313 805 0356",
    email: "vitalhomesalud1004@gmail.com",
  },
  silos: {
    servicios: [
      { text: 'Enfermería Domiciliaria', href: '/servicios/enfermeria/' },
      { text: 'Cuidados Pediátricos', href: '/servicios/cuidados-pediatricos/' },
      { text: 'Médico Domiciliario y Telemedicina', href: '/servicios/medicina-domiciliaria/' },
      { text: 'Monitoreo y Acompañamiento 24/7', href: '/servicios/gestion-monitoreo-salud/' },
      { text: 'Apoyo Psicológico', href: '/servicios/apoyo-psicologico/' },
      { text: 'Fisioterapia y Rehabilitación', href: '/servicios/fisioterapia-rehabilitacion/' },
      { text: 'Acondicionamiento Geriátrico', href: '/servicios/acondicionamiento-fisico-geriatrico/' },
      { text: 'Terapias y Masajes de Recuperación', href: '/servicios/terapias-recuperacion/' },
    ],
    institucional: [
      { text: 'Quiénes Somos', href: '/nosotros/' },
      { text: 'Misión, Visión y Valores', href: '/nosotros/mision-vision-valores/' },
      { text: 'Equipo Profesional', href: '/nosotros/equipo/' },
      { text: 'Nuestra Historia', href: '/nosotros/historia/' },
      { text: 'Gobierno Corporativo', href: '/nosotros/gobierno-corporativo/' },
      { text: 'Metodología VitalCare®', href: '/metodologia/' },
      { text: 'Resultados y Casos de Éxito', href: '/resultados/' },
    ],
    recursos: [
      { text: 'Blog de Salud Domiciliaria', href: '/recursos/' },
      { text: 'Preguntas Frecuentes (FAQ)', href: '/recursos/faq/' },
      { text: 'Glosario Médico', href: '/recursos/glosario/' },
      { text: 'Contacto', href: '/contacto/' },
    ]
  }
};

export default function FooterColumn() {
  return (
    <footer className="bg-[#061a36]/95 backdrop-blur-2xl text-white pt-20 pb-10 relative overflow-hidden font-body border-t border-white/10">
      {/* Glow de Autoridad */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-0"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* GRID PRINCIPAL: 12 columnas para control total de anchos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-white/5 pb-16">
          
          {/* ── Columna 1: Marca y NAP (3/12) ─────────────────────── */}
          <div className="lg:col-span-3 space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.15)] -z-10 bg-gradient-to-br from-white to-blue-50"></div>
              <div className="px-2 py-2 flex items-center justify-center">
                <img 
                  src={data.company.logo} 
                  alt={data.company.name} 
                  className="h-16 md:h-18 w-auto object-contain"
                />
              </div>
            </div>
            
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs italic font-medium pr-4">
              "{data.company.tagline}"
            </p>

            <address className="not-italic space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3 group">
                <MapPin className="size-5 text-blue-300 shrink-0 mt-0.5" />
                <a href="/contacto/" className="text-sm text-white/60 hover:text-white transition-colors leading-tight">
                  Bogotá — Colombia
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="size-5 text-blue-300 shrink-0" />
                <a href="tel:573138050356" className="text-sm text-white/60 hover:text-white transition-colors font-bold">
                  {data.company.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="size-5 text-blue-300 shrink-0" />
                <a href={`mailto:${data.company.email}`} className="text-sm text-white/60 hover:text-white transition-colors font-medium">
                   {data.company.email}
                </a>
              </div>
            </address>
          </div>

          {/* ── Columna 2: Servicios (2/12) ───────────────────────── */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8 border-l-4 border-blue-400 pl-4 bg-white/5 py-1">
              Servicios
            </h4>
            <ul className="space-y-4">
              {data.silos.servicios.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-white/50 hover:text-white transition-all hover:pl-2 flex items-center gap-2 text-sm group font-medium">
                    <ChevronRight className="size-3 text-blue-300 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Columna 3: Institucional y Recursos (3/12) ────────── */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8 border-l-4 border-blue-400 pl-4 bg-white/5 py-1">
              Institución
            </h4>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4">
              {data.silos.institucional.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-white/50 hover:text-white transition-all hover:pl-2 flex items-center gap-2 text-sm group font-medium">
                    <ChevronRight className="size-3 text-blue-300 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mt-10 mb-6 border-l-4 border-blue-400 pl-4 bg-white/5 py-1">
              Recursos Clave
            </h4>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4">
              {data.silos.recursos.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-white/50 hover:text-white transition-all hover:pl-2 flex items-center gap-2 text-sm group font-medium">
                    <ChevronRight className="size-3 text-blue-300 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Columna 4: Gatillo CTA (4/12) ─────────────────────── */}
          <div className="lg:col-span-4 bg-white/[0.02] rounded-[3rem] p-10 border border-white/5 relative overflow-hidden group shadow-2xl backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-0"></div>
            
            <div className="relative z-10">
                <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full mb-6 inline-block uppercase">
                   Atención Clínica
                </span>
                <h4 className="text-2xl font-black text-white mb-4 leading-tight">
                  Atención Inmediata
                </h4>
                <p className="text-base text-white/50 mb-10 leading-relaxed font-medium">
                  ¿Necesita apoyo urgente? Nuestro equipo de enfermería profesional está disponible para orientarle ahora mismo.
                </p>
            </div>
            
            <div className="space-y-4 relative z-10 pr-2">
                <a 
                  href="https://wa.me/573138050356" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-6 text-xs font-black tracking-[0.2em] flex items-center justify-center gap-4 bg-[#155ec0] hover:bg-blue-600 text-white rounded-3xl transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(21,94,192,0.4)] active:scale-95 px-6"
                >
                  <MessageCircle className="size-6 shrink-0" />
                  WHATSAPP PRIORITARIO
                </a>

                <a
                  href="/contacto/"
                  className="w-full py-5 text-xs font-black tracking-[0.2em] flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 text-white rounded-3xl transition-all border border-white/10 hover:border-white/20 px-6"
                >
                  SOLICITAR VALORACIÓN
                </a>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-4 relative z-10">
              <div className="relative flex size-3">
                <span className="bg-green-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-green-500 relative inline-flex size-3 rounded-full" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40">SOPORTE CLÍNICO ACTIVO 24/7</span>
            </div>
          </div>

        </div>

        {/* ── Footer Bottom ───────────────────────────────────────── */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <p>© 2024 VITALHOME SALUD. TODOS LOS DERECHOS RESERVADOS.</p>
          
          <div className="flex items-center gap-8">
            <a href="/nosotros/" className="hover:text-blue-400 transition-colors">Institucional</a>
            <a href="/metodologia/" className="hover:text-blue-400 transition-colors">Metodología VitalCare®</a>
            <a href="/contacto/" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
