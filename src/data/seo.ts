// ============================================================
// DICCIONARIO MAESTRO SEO - VitalHome Salud
// Basado en la Matriz Maestra del Sitemap (Metodología MAES)
// Cada ruta tiene sus metadatos y el tipo de Schema JSON-LD.
// ============================================================

export type SeoEntry = {
  title: string;
  description: string;
  keywords: string;
  schemaType: string;
};

export const seoConfig: Record<string, SeoEntry> = {

  // ── BLOQUE 1: PÁGINAS ESTRUCTURALES (CORE) ──────────────────────

  "/": {
    title: "VitalHome Salud: Cuidado Domiciliario de Élite para Adultos Mayores",
    description: "VitalHome Salud ofrece atención integral en salud domiciliaria para adultos mayores. Expertos en enfermería, rehabilitación y bienestar.",
    keywords: "Atención Integral Salud Domiciliaria, Cuidado domiciliario de élite, Ingeniería de bienestar, familiar responsable, enfermería especializada",
    schemaType: "MedicalOrganization",
  },

  // Servicios (General)
  "/servicios/": {
    title: "Servicios de Cuidado Domiciliario Integral | VitalHome Salud",
    description: "Descubra los servicios de VitalHome Salud: enfermería, masajes, rehabilitación y planes integrales para el bienestar en casa.",
    keywords: "Servicios Cuidado Domiciliario, enfermería domiciliaria especializada, pacientes crónicos, masajes terapéuticos, rehabilitación",
    schemaType: "Service",
  },

  // Nosotros (General)
  "/nosotros/": {
    title: "Quiénes Somos - VitalHome Salud: Líderes en Cuidado Domiciliario",
    description: "Conozca la misión, visión, valores y el equipo profesional detrás de VitalHome Salud, líderes en cuidado domiciliario.",
    keywords: "VitalHome Salud Quiénes Somos, misión cuidado domiciliario, valores excelencia clínica, familiar responsable",
    schemaType: "AboutPage",
  },
  "/nosotros/mision-vision-valores/": {
    title: "Misión, Visión y Valores de VitalHome Salud | Cuidado con Propósito",
    description: "Descubra los principios que guían a VitalHome Salud en la atención integral y digna del adulto mayor en su hogar.",
    keywords: "Misión Visión Valores VitalHome Salud, valores cuidado domiciliario, excelencia clínica, empatía, integridad",
    schemaType: "AboutPage",
  },
  "/nosotros/historia/": {
    title: "Historia de VitalHome Salud | Pioneros en Cuidado Domiciliario",
    description: "Conozca la trayectoria de VitalHome Salud, pioneros en atención domiciliaria especializada y tecnología de vanguardia.",
    keywords: "Historia VitalHome Salud, atención domiciliaria especializada, innovación en salud, ingeniería de bienestar",
    schemaType: "AboutPage",
  },
  "/nosotros/equipo/": {
    title: "Equipo Profesional - VitalHome Salud: Expertos en Cuidado Domiciliario",
    description: "Conozca a nuestras enfermeras especializadas, entrenadores en rehabilitación física y médicos geriatras dedicados al cuidado domiciliario.",
    keywords: "Equipo Médico Domiciliario, Enfermeras Especializadas Domicilio, entrenadores en rehabilitación física, médicos geriatras",
    schemaType: "AboutPage",
  },
  "/nosotros/gobierno-corporativo/": {
    title: "Gobierno Corporativo - VitalHome Salud: Transparencia y Ética",
    description: "Descubra el compromiso de VitalHome Salud con la transparencia, ética y gestión responsable en el cuidado domiciliario.",
    keywords: "Gobierno Corporativo Salud, transparencia, rendición de cuentas, solvencia institucional, ética",
    schemaType: "Organization",
  },

  // Metodología
  "/metodologia/": {
    title: "Metodología VitalHome Salud® - VitalHome Salud: Ingeniería del Cuidado",
    description: "Descubra nuestra metodología propietaria VitalHome Salud®, un enfoque sistemático para el bienestar sostenible en el hogar.",
    keywords: "Metodología Cuidado Domiciliario, VitalHome Salud, evaluación holística, intervención multidisciplinaria",
    schemaType: "HowTo",
  },
  "/metodologia/VitalHome/": {
    title: "Detalle Metodología VitalHome Salud® | Cuidado Domiciliario Excepcional",
    description: "Profundice en los pasos de nuestra Metodología VitalHome Salud® para un cuidado domiciliario excepcional y resultados medibles.",
    keywords: "Metodología VitalHome Salud, planificación personalizada, monitoreo continuo, atención predictiva",
    schemaType: "HowTo",
  },
  "/metodologia/enfoque-multidisciplinario/": {
    title: "Enfoque Multidisciplinario en Cuidado Domiciliario | VitalHome Salud",
    description: "Descubra cómo nuestro equipo multidisciplinario garantiza una atención holística y coordinada para el bienestar de su ser querido.",
    keywords: "Enfoque Multidisciplinario Salud, equipo multidisciplinario, atención holística, evaluación holística",
    schemaType: "AboutPage",
  },

  // Resultados
  "/resultados/": {
    title: "Resultados VitalHome Salud: Evidencia de Excelencia en Cuidado Domiciliario",
    description: "Descubra los resultados medibles y el impacto positivo de VitalHome Salud en la calidad de vida y autonomía de pacientes.",
    keywords: "Resultados Cuidado Domiciliario, reducción reingresos hospitalarios, eficacia clínica, KPIs",
    schemaType: "MedicalWebPage",
  },
  "/resultados/casos-exito/": {
    title: "Casos de Éxito y Testimonios | VitalHome Salud",
    description: "Lea historias reales de transformación y testimonios auténticos de familias que confiaron en VitalHome Salud.",
    keywords: "Casos Éxito Cuidado Domiciliario, testimonios auténticos, recuperación funcional, calidad de vida",
    schemaType: "CollectionPage",
  },
  "/resultados/estudios-impacto/": {
    title: "Estudios de Impacto y Evidencia Científica | VitalHome Salud",
    description: "Acceda a nuestros estudios de impacto que demuestran la reducción de reingresos y mejora en indicadores de salud.",
    keywords: "Estudios Impacto Salud Domiciliaria, reducción reingresos hospitalarios, bienestar medible, datos objetivos",
    schemaType: "MedicalWebPage",
  },

  // Tecnología
  "/tecnologia/": {
    title: "Tecnología de Vanguardia para el Cuidado Domiciliario | VitalHome Salud",
    description: "Descubra la infraestructura tecnológica de VitalHome Salud: monitoreo inteligente, seguridad de datos y eficiencia operativa.",
    keywords: "Tecnología Cuidado Domiciliario, stack headless-ready, sistemas de monitoreo remoto, ingeniería digital",
    schemaType: "AboutPage",
  },
  "/tecnologia/plataforma-monitoreo/": {
    title: "Plataforma de Monitoreo Inteligente 24/7 | VitalHome Salud",
    description: "Monitoreo inteligente 24/7 con alertas en tiempo real y datos de salud accesibles para la seguridad de su ser querido.",
    keywords: "Plataforma Monitoreo Salud, supervisión 24/7, alertas en tiempo real, sensores no invasivos",
    schemaType: "SoftwareApplication",
  },
  "/tecnologia/seguridad-datos/": {
    title: "Seguridad de Datos Médicos y Privacidad | VitalHome Salud",
    description: "Garantizamos la privacidad y confidencialidad de la información médica con encriptación y protocolos de acceso restringido.",
    keywords: "Seguridad Datos Médicos, encriptación extremo a extremo, HIPAA, GDPR, privacidad salud",
    schemaType: "WebPage",
  },



  // Contacto
  "/contacto/": {
    title: "Contacto VitalHome Salud | Concierge Médico y Valoración Élite",
    description: "Inicie su camino hacia la tranquilidad. Solicite una valoración clínica gratuita en casa. Nuestra unidad médica móvil llega a su puerta en Bogotá y Sabana.",
    keywords: "Contacto VitalHome Salud, valoración gratuita, enfermería a domicilio, médico en casa, concierge médico, familiar responsable",
    schemaType: "ContactPage",
  },
  "/contacto/formulario/": {
    title: "Formulario de Contacto para VitalHome Salud | Consultoría Gratuita",
    description: "Complete nuestro formulario para solicitar una consultoría estratégica gratuita o una evaluación de necesidades personalizada.",
    keywords: "Formulario Contacto Salud, consultoría estratégica gratuita, evaluación necesidades personalizada",
    schemaType: "ContactPage",
  },
  "/contacto/zonas-de-cobertura/": {
    title: "Zonas de Cobertura VitalHome Salud | El Hospital de Élite en su Hogar",
    description: "Cobertura geográfica inmediata en Bogotá y Sabana Norte. No se desplace, nuestra red de cuidado llega a su barrio con rigor clínico y exclusividad.",
    keywords: "Cobertura VitalHome Salud, enfermeras a domicilio Bogotá, médico en casa Chía, zonas de servicio salud, Sabana Norte",
    schemaType: "LocalBusiness",
  },
  "/contacto/trabaja-con-nosotros/": {
    title: "Trabaja con Nosotros en VitalHome Salud | Carrera con Propósito",
    description: "Únase a VitalHome Salud y construya una carrera con propósito en el cuidado domiciliario de alto rendimiento.",
    keywords: "Empleo Enfermería Domiciliaria, Trabajo Cuidado Adultos Mayores, entrenadores en rehabilitación física, cuidadores",
    schemaType: "WebPage",
  },

  // ── BLOQUE 2: PILARES SEO (SERVICIOS) ───────────────────────────

  "/servicios/enfermeria-domiciliaria/": {
    title: "Enfermería Domiciliaria Especializada | VitalHome Salud",
    description: "Atención médica experta en casa para pacientes crónicos y post-operatorios. Confianza y bienestar para su ser querido.",
    keywords: "Enfermería Domiciliaria, Pacientes crónicos domicilio, post-operatorios, curaciones complejas, administración medicamentos",
    schemaType: "Service",
  },
  "/servicios/masajes-terapeuticos/": {
    title: "Masajes Terapéuticos a Domicilio para Adultos Mayores | VitalHome Salud",
    description: "Alivio del dolor, reducción del estrés y mejora del bienestar físico y emocional para adultos mayores en casa.",
    keywords: "Masajes Terapéuticos Domicilio, dolor crónico adultos mayores, bienestar físico, relajación profunda",
    schemaType: "Service",
  },
  "/servicios/actividad-fisica-rehabilitacion/": {
    title: "Rehabilitación Domiciliaria: Movilidad y Autonomía en Casa | VitalHome Salud",
    description: "Recuperación de la movilidad y autonomía con programas personalizados de actividad física y rehabilitación en casa.",
    keywords: "Rehabilitación Domiciliaria, actividad física domicilio, autonomía funcional, entrenadores en rehabilitación física, ejercicios de resistencia",
    schemaType: "Service",
  },
  "/servicios/planes-cuidado-integral/": {
    title: "Planes de Cuidado Integral Personalizados para Adultos Mayores | VitalHome Salud",
    description: "Soluciones personalizadas y flexibles para el cuidado holístico del adulto mayor, con monitoreo y soporte paliativo.",
    keywords: "Planes Cuidado Integral Adultos Mayores, atención holística, monitoreo preventivo, soporte paliativo",
    schemaType: "Service",
  },

  // ── BLOQUE 3: HUB DE RECURSOS ────────────────────────────────────

  "/recursos/": {
    title: "Hub de Recursos VitalHome Salud: Conocimiento Experto en Salud",
    description: "Explore nuestro centro de recursos: blog especializado, preguntas frecuentes y glosario médico para el cuidado del adulto mayor.",
    keywords: "Recursos Salud Domiciliaria, blog cuidado adultos mayores, FAQ enfermería, glosario médico",
    schemaType: "CollectionPage",
  },
  "/recursos/faq/": {
    title: "Preguntas Frecuentes sobre Cuidado Domiciliario | VitalHome Salud",
    description: "Respuestas claras a sus dudas sobre enfermería, planes de cuidado, tecnología y aspectos administrativos de VitalHome Salud.",
    keywords: "Preguntas Frecuentes Cuidado Domiciliario, FAQ enfermería, dudas planes de cuidado, servicios de monitoreo",
    schemaType: "FAQPage",
  },
  "/recursos/glosario/": {
    title: "Glosario Médico: Términos Clave de Salud Domiciliaria | VitalHome Salud",
    description: "Comprenda la terminología médica clave sobre enfermedades crónicas, terapias y condiciones geriátricas.",
    keywords: "Glosario Médico Cuidado, términos clave salud domiciliaria, condiciones geriátricas, enfermedades crónicas",
    schemaType: "MedicalWebPage",
  },

  // ── BLOQUE 4: PÁGINAS TÉCNICAS ───────────────────────────────────

  "/gracias/": {
    title: "¡Gracias por Contactarnos! | VitalHome Salud",
    description: "Su solicitud ha sido recibida con éxito. Nos pondremos en contacto con usted a la brevedad.",
    keywords: "confirmación solicitud VitalHome Salud, gracias contacto",
    schemaType: "WebPage",
  },
  "/404/": {
    title: "Página No Encontrada | VitalHome Salud",
    description: "La página que busca no existe. Explore nuestros servicios o contacte con VitalHome Salud.",
    keywords: "página no encontrada, 404 VitalHome Salud",
    schemaType: "WebPage",
  },
  "/onboarding/": {
    title: "Bienvenida a VitalHome Salud: Su Proceso de Onboarding",
    description: "Guía paso a paso para nuevos clientes de VitalHome Salud. Conozca cómo empezar a disfrutar de nuestros servicios.",
    keywords: "onboarding cliente VitalHome Salud, bienvenida, proceso de cuidado",
    schemaType: "WebPage",
  },
};
