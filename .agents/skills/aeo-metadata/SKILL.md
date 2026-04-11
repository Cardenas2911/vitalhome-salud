---
description: Creación Estandarizada de Componentes Semánticos AEO Readiness
---

# AEO Metadata (Agent Engine Optimization) Skill

Usa esta skill cada vez que se requiera crear o editar una nueva página (Silo) dentro del proyecto VitalHome Salud. El propósito del sistema centralizado de SEO es garantizar que los motores abstractos (LLMs, Google GSE, ChatGPT) identifiquen correctamente toda la taxonomía médica de la institución usando Golden Embeddings (Grafos JSON-LD conectados mediante la misma raíz).

## Cómo funciona el sistema centralizado
Todos los metadatos y esquemas JSON-LD están consolidados en **`src/data/seo.ts`**, y son inyectados dinámicamente mediante el componente transversal `<SEO />` incluido en el tag `<head>` de `src/layouts/Layout.astro`.

## Protocolo al crear una nueva Pestaña o Ruta (Page)

1. **Codificar la URL en el config file (`seo.ts`)**
   Abre el archivo `src/data/seo.ts` e ingresa la ruta absoluta de Astro (ej. `/recursos/pacientes-agudos/`).
    
    ```typescript
    "/recursos/pacientes-agudos/": {
        title: "Atención a Pacientes Agudos | VitalHome Salud",
        description: "Servicio premium para pacientes crónicos agudos con atención especializada e ingeniería de cuidado VitalCare.",
        keywords: "Pacientes agudos en casa, cuidado domiciliario, VitalHome, médicos urgencia",
        schemaType: "MedicalWebPage"
    }
    ```

2. **Crear la Página (`[ruta].astro`)**
   Crearás la ruta habitual de Astro utilizando el componente `<Layout>`.  
   Debido a que el Layout ya importa el componente `<SEO />` y le pasa la URL de petición actual de Astro (`Astro.request.url`), **LA PESTAÑA NO NECESITA LLAMAR NINGUNA METADATA**. Es 100% automático.

   ```astro
   ---
   import Layout from '../../layouts/Layout.astro';
   ---
   <Layout>
      <main>
          <h1>Nueva Pestaña Optimizada Automáticamente</h1>
      </main>
   </Layout>
   ```

3. **Restricción y Lógica Técnica (Golden Embedding)**
   - No generes tags `<title>` ni `<meta>` manualmente dentro de la página.
   - El esquema central en `SEO.astro` ya construye el bloque `@graph` vinculando el tipo particular de la página con la "MedicalOrganization" raíz usando el ID global `/#organization`. Todo enlace de jugo de autoridad (Link Juice QA) siempre va a fluir hacia la entidad madre.
