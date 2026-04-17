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

/* Componente reutilizable de columna de liens */
function NavSection({ title, links }: { title: string; links: { text: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-black uppercase tracking-widest text-white mb-5 border-l-4 border-blue-400 pl-3 bg-white/5 py-1">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className="text-blue-100/80 hover:text-white transition-all hover:pl-2 flex items-center gap-2 text-sm group font-medium"
            >
              <ChevronRight className="size-3 text-blue-300 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0 shrink-0" />
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterColumn() {
  return (
    <footer className="bg-[#061a36]/95 backdrop-blur-2xl text-white pt-16 pb-28 sm:pb-20 relative overflow-hidden font-body border-t border-white/10">
      {/* Glow de Autoridad */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full -z-0 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* ── GRID DE NAVEGACIÓN PRINCIPAL ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 border-b border-white/10 pb-16">
          
          {/* COLUMNA 1: MARCA Y CONTACTO */}
          <div className="space-y-6">
            <div className="relative inline-block shrink-0">
              <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.12)] -z-10 bg-gradient-to-br from-white to-blue-50" />
              <div className="px-2 py-1.5 flex items-center justify-center">
                <img
                  src={data.company.logo}
                  alt={data.company.name}
                  className="h-28 sm:h-24 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-blue-100/70 text-xs leading-relaxed italic font-medium max-w-[280px]">
              "{data.company.tagline}"
            </p>

            <address className="not-italic space-y-4 pt-2">
              <div className="flex items-start gap-3 group">
                <MapPin className="size-4 text-blue-300 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="/contacto/" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                    Bogotá — Colombia
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Phone className="size-4 text-blue-300 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:573138050356" className="text-sm text-blue-100/80 hover:text-white transition-colors font-bold">
                    {data.company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Mail className="size-4 text-blue-300 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`mailto:${data.company.email}`} className="text-sm text-blue-100/80 hover:text-white transition-colors font-medium break-all">
                    {data.company.email}
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* COLUMNA 2: SERVICIOS */}
          <NavSection title="Servicios" links={data.silos.servicios} />

          {/* COLUMNA 3: INSTITUCIÓN + RECURSOS (APILADOS) */}
          <div className="space-y-12">
            <NavSection title="Institución" links={data.silos.institucional} />
            <NavSection title="Recursos Clave" links={data.silos.recursos} />
          </div>

          {/* COLUMNA 4: CTA CARD */}
          <div className="bg-white/[0.04] rounded-3xl p-8 border border-white/10 relative overflow-hidden shadow-2xl h-fit">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[80px] rounded-full -z-0 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full mb-6 inline-block uppercase">
                Atención Clínica
              </span>
              <h4 className="text-2xl font-black text-white mb-4 leading-tight font-heading">
                Atención Inmediata
              </h4>
              <p className="text-sm text-blue-100/75 mb-8 leading-relaxed font-medium">
                ¿Necesita apoyo urgente? Nuestro equipo de enfermería profesional está disponible ahora mismo.
              </p>
            </div>

            <div className="space-y-4 relative z-10">
              <a
                href="https://wa.me/573138050356"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4.5 text-[10px] font-black tracking-[0.15em] flex items-center justify-center gap-3 bg-[#155ec0] hover:bg-blue-600 text-white rounded-2xl transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(21,94,192,0.4)] px-4"
              >
                <MessageCircle className="size-5 shrink-0" />
                WHATSAPP PRIORITARIO
              </a>

              <a
                href="/contacto/"
                className="w-full py-4 text-[10px] font-black tracking-[0.15em] flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/15 hover:border-white/25 px-4"
              >
                SOLICITAR VALORACIÓN
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 relative z-10">
              <div className="relative flex size-2.5">
                <span className="bg-green-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-green-500 relative inline-flex size-2.5 rounded-full" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-100/60 font-heading">
                SOPORTE CLÍNICO ACTIVO 24/7
              </span>
            </div>
          </div>
        </div>

        {/* ── FOOTER BOTTOM ───────────────────────────────────── */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center text-[10px] font-black uppercase tracking-[0.15em] text-blue-100/40">
          <p>© 2024 VitalHome Salud. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-8">
            <a href="/nosotros/" className="hover:text-blue-300 transition-colors">Institucional</a>
            <a href="/metodologia/" className="hover:text-blue-300 transition-colors">Metodología VitalCare®</a>
            <a href="/contacto/" className="hover:text-blue-300 transition-colors">Contacto</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
