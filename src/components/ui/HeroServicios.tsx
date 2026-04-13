import HeroSection from './hero-section-9';
import { Users, Shield, Star } from 'lucide-react';

const HeroServicios = () => {
  const heroData = {
    title: (
      <>
        Ecosistema de Salud Integral <br /> <span className="text-[#155ec0]">y Bienestar en Casa.</span>
      </>
    ),
    subtitle: 'Atención clínica especializada, telemedicina y rehabilitación funcional para cada etapa de la vida. Descubra nuestras unidades de negocio diseñadas para devolverle la tranquilidad.',
    actions: [
      {
        text: 'Agendar Valoración Gratuita',
        onClick: () => window.location.href = '/contacto/formulario/',
        className: 'bg-[#155ec0] hover:bg-[#104892] shadow-2xl shadow-blue-900/40',
        variant: 'default' as const,
      },
      {
        text: 'Ver Catálogo',
        onClick: () => {
            const el = document.getElementById('catalogo');
            el?.scrollIntoView({ behavior: 'smooth' });
        },
        variant: 'outline' as const,
        className: 'bg-transparent hover:bg-[#104892]/5 border-[#104892] text-[#104892]',
      },
    ],
    stats: [
      {
        value: '5.0/5',
        label: 'Calificación Médica',
        icon: <Star className="h-5 w-5" />,
      },
      {
        value: '+150',
        label: 'Familias Atendidas',
        icon: <Users className="h-5 w-5" />,
      },
      {
        value: '24/7',
        label: 'Soporte Crítico',
        icon: <Shield className="h-5 w-5" />,
      },
    ],
    images: [
      '/images/servicios/enfermeria.png',
      '/images/servicios/telemedicina.png',
      '/images/servicios/rehabilitacion.png',
    ],
  };

  return (
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
      />
  );
};

export default HeroServicios;
