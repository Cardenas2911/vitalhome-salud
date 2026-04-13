# 📋 Informe de Diseño: Sistema "Lujo Clínico 2026"
## Proyecto: VitalHome Salud - Páginas de Servicios

Este informe detalla las instrucciones visuales, técnicas y psicológicas aplicadas en la arquitectura de servicios para garantizar una experiencia de usuario premium y una alta tasa de conversión.

---

### 🎨 1. Fundamentos Visuales (Design Tokens)

El diseño se basa en el concepto de **"Aislamiento Clínico"**: un entorno limpio que resalta los elementos de acción mediante contrastes profundos.

#### **Paleta de Colores**
*   **Dark Trust (Fondo Hero):** `#061a36`
    *   *Uso:* Fondos de impacto, secciones de autoridad. Proyecta seguridad hospitalaria y exclusividad.
*   **Corporate Blue (Identidad):** `#104892`
    *   *Uso:* Elementos de marca, iconos secundarios, etiquetas de categoría.
*   **Action Blue (Conversión):** `#155ec0`
    *   *Uso:* CTAs (Botones), enlaces críticos, acentos dinámicos. Es el color que guía el ojo hacia la acción.
*   **Clinical Grey (Descanso):** `#f8f9fa` / `#eceef0`
    *   *Uso:* Fondos de cuerpo de página. Evita la fatiga visual y permite que el texto sea legible.

#### **Tipografía (Jerarquía Visual)**
*   **Titulares (H1, H2, H3):** `Outfit` (Sans-serif)
    *   *Estilo:* Black (900) o ExtraBold (800).
    *   *Efecto:* Autoridad inmediata y modernidad.
*   **Cuerpo de Texto:** `Inter`
    *   *Estilo:* Medium (500) o SemiBold (600).
    *   *Efecto:* Claridad clínica y facilidad de lectura en dispositivos móviles.

---

### 🏗️ 2. Arquitectura UX y Componentes Clave

Cada página de servicio sigue una estructura de **Pirámide Invertida** diseñada para resolver el miedo del usuario y facilitar la conversión.

#### **A. Hero de Alivio Inmediato (Split-Screen)**
*   **Izquierda:** Copy empático que valida el problema del usuario.
*   **Derecha:** Un elemento de "Isla" (Card blanca sobre fondo oscuro) que contiene la propuesta de valor o el botón principal.
*   **Efecto:** Crea una sensación de "solución enmarcada", separando el ruido del mundo exterior de la atención de VitalHome.

#### **B. Bento Grid Clínico**
*   **Diseño:** Tarjetas de bordes redondeados (`rounded-[40px]`) con bordes sutiles (`border-[#e2e8f0]`).
*   **Interacción:** Hover activo que cambia el color de la tarjeta o del icono al azul vibrante.
*   **Objetivo:** Indexación semántica (SEO) y escaneabilidad rápida de los beneficios técnicos del servicio.

#### **C. El "Destructor de Objeciones"**
*   **Diseño:** Secciones con fondos neutros (`#eceef0`) y micro-animaciones (pings de estado).
*   **Psicología:** Ataca directamente los miedos (seguridad, calidad, supervisión) antes de que el usuario llegue al formulario.

#### **D. Footer de Conversión (Lead Magnet)**
*   **Diseño:** Combinación de testimonio (prueba social) a la izquierda y formulario minimalista a la derecha.
*   **Efecto:** El usuario lee una experiencia positiva justo antes de ingresar sus datos, reduciendo la fricción de salida.

---

### ⚙️ 3. Reglas Técnicas Obligatorias

1.  **Cero Precios:** La estrategia prohíbe el uso de tarifas numéricas para evitar la comoditización del servicio. Se vende siempre una **"Valoración Personalizada"**.
2.  **Sticky Awareness:** Un botón flotante (`fixed bottom-8`) debe estar presente en escritorio para capturar la atención en cualquier punto del scroll.
3.  **Micro-interacciones:**
    *   `duration-500` para transiciones suaves.
    *   `hover:-translate-y-1` en botones e iconos para dar respuesta táctil al usuario.
    *   `text-glow` (sombra de texto sutil) en palabras clave del H1 para resaltar importancia.

---

### 🔍 4. Optimización SEO (E-E-A-T)

*   **Schema Markup:** Cada página inyecta un JSON-LD tipo `Service` que especifica:
    *   `serviceType`: El nombre clínico exacto.
    *   `areaServed`: Radio de 50km (Bogotá y Sabana).
    *   `offers`: Precio "0" orientado a la valoración gratuita para activar fragmentos enriquecidos en Google.
*   **Keywords LSI:** Integración natural de términos médicos (ej. "constantes vitales", "post-operatorio", "geriatría") para dominar el grafo de conocimiento de Google Salud.

---

> [!TIP]
> **Consistencia:** Mantener siempre el radio de curvatura de contenedores en `rounded-[40px]` o `rounded-[60px]` para conservar la estética de "Lujo Moderno 2026" que diferencia a VitalHome de la competencia tradicional.
