import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

export default function PulseFitHeroDemo() {
  return (
    <PulseFitHero
      title="Enfermería domiciliaria y hospitalaria integral especializada 24/7"
      subtitle="Recupere su tranquilidad. Brindamos atención de enfermería experta, rehabilitación física y cuidados post-operatorios directamente en su hogar. Personal clínico certificado para que su ser querido esté seguro y usted pueda descansar."
      primaryAction={{
        label: "Solicitar Evaluación Gratuita",
        onClick: () => window.location.href = '/contacto/',
      }}
      secondaryAction={{
        label: "Nuestros Servicios",
        onClick: () => window.location.href = '/servicios/',
      }}
      socialProof={{
        avatars: [
          "/images/avatars/avatar1.png",
          "/images/avatars/avatar2.png",
          "/images/avatars/avatar3.png",
          "/images/avatars/avatar4.png",
        ],
        text: "⭐⭐⭐⭐⭐ 5.0/5 | +150 Familias confían en nuestro personal médico.",
      }}
      programs={[
        {
          image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&h=500&fit=crop",
          category: "24/7",
          title: "Enfermería Especializada",
          onClick: () => window.location.href = '/servicios/enfermeria/',
          objectPosition: "center 10%",
        },
        {
          image: "/rehabilitacion_fisica.png",
          category: "MOVILIDAD",
          title: "Entrenador en rehabilitación física",
          onClick: () => window.location.href = '/servicios/fisioterapia-rehabilitacion/',
        },
        {
          image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=400&h=500&fit=crop",
          category: "ALIVIO",
          title: "Terapias de Recuperación",
          onClick: () => window.location.href = '/servicios/terapias-recuperacion/',
        },
        {
          image: "/medico_en_casa.png",
          category: "DIAGNÓSTICO",
          title: "Médico en Casa",
          onClick: () => window.location.href = '/servicios/medicina-domiciliaria/',
        },
      ]}
    />
  );
}
