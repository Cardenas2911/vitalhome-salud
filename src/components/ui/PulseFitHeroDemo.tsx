import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

export default function PulseFitHeroDemo() {
  return (
    <PulseFitHero
      title="Enfermería y Cuidado Médico a Domicilio Especializado 24/7."
      subtitle="Recupere su tranquilidad. Brindamos atención de enfermería experta, rehabilitación física y cuidados post-operatorios directamente en su hogar. Personal clínico certificado para que su ser querido esté seguro y usted pueda descansar."
      primaryAction={{
        label: "Solicitar Evaluación Gratuita",
        onClick: () => window.location.href = '/contacto/formulario/',
      }}
      secondaryAction={{
        label: "Nuestros Servicios",
        onClick: () => window.location.href = '/servicios/',
      }}
      socialProof={{
        avatars: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
        ],
        text: "⭐⭐⭐⭐⭐ 5.0/5 | +150 Familias confían en nuestro personal médico.",
      }}
      programs={[
        {
          image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&h=500&fit=crop",
          category: "24/7",
          title: "Enfermería Especializada",
          onClick: () => window.location.href = '/servicios/enfermeria-domiciliaria/',
        },
        {
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&h=500&fit=crop",
          category: "MOVILIDAD",
          title: "Senior Fit: Vitalidad",
          onClick: () => window.location.href = '/servicios/entrenamiento-senior-fit/',
        },
        {
          image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=400&h=500&fit=crop",
          category: "ALIVIO",
          title: "Terapias de Recuperación",
          onClick: () => window.location.href = '/servicios/terapias-recuperacion/',
        },
        {
          image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&h=500&fit=crop",
          category: "DIAGNÓSTICO",
          title: "Médico en Casa",
          onClick: () => window.location.href = '/servicios/medicina-domiciliaria/',
        },
      ]}
    />
  );
}
