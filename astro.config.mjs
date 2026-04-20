// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Silos prioritarios (Cuidado y Autoridad) según la arquitectura MAES
const PRIORITY_HIGH = 0.9;   // Servicios clínicos
const PRIORITY_MED  = 0.8;   // Institucional y metodología
const PRIORITY_LOW  = 0.6;   // Recursos y técnicas

// https://astro.build/config
export default defineConfig({
  site: 'https://vitalhomesalud.com',
  integrations: [
    react(),
    sitemap({
      // Prioridade personalizada por Silo
      serialize(item) {
        // Silo 1: Servicios Clínicos → Alta prioridad
        if (item.url.includes('/servicios/')) {
          item.priority = PRIORITY_HIGH;
        }
        // Silo 2: Metodología y Resultados → Autoridad
        else if (item.url.includes('/metodologia/') || item.url.includes('/resultados/')) {
          item.priority = PRIORITY_MED;
        }
        // Silo 3: Institución → Confianza
        else if (item.url.includes('/nosotros/') || item.url.includes('/contacto/')) {
          item.priority = PRIORITY_MED;
        }
        // Silo 4: Recursos → Tráfico de autoridad
        else if (item.url.includes('/recursos/')) {
          item.priority = PRIORITY_LOW;
        }
        // Página de Inicio → Máxima prioridad
        else if (item.url === 'https://vitalhomesalud.com/') {
          item.priority = 1.0;
        }
        // Resto de páginas
        else {
          item.priority = 0.5;
        }
        return item;
      },
      // Excluir páginas técnicas y no indexables
      filter: (page) =>
        !page.includes('/gracias/') &&
        !page.includes('/404/') &&
        !page.includes('/_blog/') &&
        !page.includes('/onboarding/'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});