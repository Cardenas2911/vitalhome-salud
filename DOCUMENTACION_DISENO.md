# VitalHome Salud - Sistema de Diseño 2026

Este proyecto utiliza el estándar **"Lujo Clínico 2026"**, diseñado para proyectar autoridad institucional, rigor científico y confianza absoluta.

## 🎨 Estilos y Tokens Core
- **Dark Trust (#061a36)**: Utilizado para secciones de profundidad, footers y texto de alta jerarquía.
- **Action Blue (#155ec0)**: Color de acento exclusivo para CTAs principales y elementos de autoridad.
- **Clinical Grey (#f8f9fa / #eceef0)**: Fondos de lectura para descanso visual.
- **Superficies**: Cards blancas con `rounded-[40px]` y bordes sutiles `border-slate-100`.

## 🏗️ Patrones de Diseño UX

### **1. Estilo "Isla de Autoridad"** (Gold Standard para Landing Pages)
Este es el patrón principal utilizado en las páginas de servicios de élite.

**Componentes Clave:**
- **Hero Split-Screen (Dark Trust)**: Fondo principal en `#061a36`. Proyecta seguridad inquebrantable.
- **Isla de Autoridad**: Tarjeta blanca (`rounded-[40px]`) que flota sobre el fondo oscuro, conteniendo:
  - Icono de autoridad superior.
  - Checklist procedimental de alta precisión.
  - CTA principal de conversión (`#155ec0`).
- **Bento Grid 360°**: Estructura de servicios complementarios con cards blancas y hover dinámico.
- **Sticky CTA**: Se ha decidido ELIMINAR los CTAs flotantes para mantener el minimalismo y el prestigio de marca (Focus on the main CTA).
- **SEO Ready**: Integración de FAQ con Schema JSON-LD y Micro-Glosario técnico para mejorar E-E-A-T.

### **2. Regla de "Cero Precios Visibles"**
Toda la arquitectura de persuasión está diseñada para vender la **transferencia de responsabilidad** y la **paz mental**. No se muestran precios para evitar la comoditización del servicio; el objetivo es siempre el contacto directo con la coordinación clínica.

### **3. Estándar de Implementación (.astro)**
- Los elementos HTML nativos deben usar `class`.
- Los componentes de React (Iconos, UI dinámica) deben usar `className`.
- Tipografía: `Outfit` para encabezados, `Inter` para cuerpo de texto.
