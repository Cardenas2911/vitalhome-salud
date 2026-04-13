# 🎨 Manual de Estilos UI — VitalHome Salud
> **Versión 1.0** | Fuente de Verdad para Diseño Visual  
> Basado en el código real del `PulseFitHero` en producción.  
> **Regla de oro:** Cualquier nuevo componente (Hero, botón, sección) DEBE seguir estas especificaciones.

---

## 📐 Tokens de Diseño Base (Paleta de Marca)

Definidos en `src/styles/global.css` bajo `@theme`:

| Token CSS | Valor HEX | Uso |
|---|---|---|
| `--color-primary` | `#104892` | Texto de marca, bordes fuertes, CTA secundario |
| `--color-primary-dark` | `#0b3164` | Gradiente oscuro del botón primario, textos secundarios |
| `--color-secondary` | `#061a36` | Color de texto principal, fondo oscuro de Footer |
| `--color-accent` | `#155ec0` | Acento de interacción, gradiente claro del botón primario |
| `--color-background-brand` | `#e6e6e6` | Fondo general de la web |
| `--color-surface-brand` | `#ffffff` | Superficies de tarjetas y contenedores |
| `--color-text-brand` | `#061a36` | Color de texto base |

**Tipografía:**
- `--font-heading`: **Outfit**, sans-serif
- `--font-body`: **Inter**, sans-serif

---

## 🟦 Botón Primario — CTA Principal

> *Ejemplo visual: "Solicitar Evaluación Gratuita →" en el Hero*

### Clase Tailwind reutilizable: `btn-brand`
Definida globalmente en `src/styles/global.css`:

```css
@utility btn-brand {
  /* Base */
  @apply relative overflow-hidden inline-flex items-center justify-center 
         rounded-full font-bold text-white transition-all duration-500 
         cursor-pointer select-none;
  
  /* Gradiente tricolor de izquierda a derecha */
  background: linear-gradient(to right, #0b3164, #104892, #155ec0);
  background-size: 200% auto;
  
  /* Sombra azul profunda */
  box-shadow: 0 10px 30px -10px rgba(16, 72, 146, 0.5);

  /* Hover: mueve el gradiente + aumenta sombra + escala */
  &:hover {
    scale: 1.05;
    background-position: right center;
    box-shadow: 0 20px 40px -15px rgba(16, 72, 146, 0.6);
  }

  /* Click: escala hacia abajo (feedback táctil) */
  &:active { scale: 0.95; }

  /* Efecto Shine (destello de luz al hover) */
  &::before {
    content: "";
    @apply absolute inset-0 rounded-[inherit] pointer-events-none 
           opacity-0 transition-opacity duration-300;
    background: linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%);
    background-size: 250% 250%;
    background-position: 200% 0;
    transition: background-position 1.5s ease-in-out;
  }
  &:hover::before {
    opacity: 1;
    background-position: -100% 0;
  }
}
```

### Uso en JSX/TSX (React):
```tsx
<button className="btn-brand flex flex-row items-center gap-2 px-10 py-5">
  Solicitar Evaluación Gratuita
  <ArrowRight size={22} className="ml-1" />
</button>
```

### Uso en Astro:
```astro
<a href="/contacto/" class="btn-brand px-10 py-5 text-base gap-2 flex items-center">
  Solicitar Evaluación Gratuita
  <svg .../>
</a>
```

### Especificaciones visuales resumidas:
| Propiedad | Valor |
|---|---|
| `border-radius` | `rounded-full` (9999px) |
| `padding` | `px-10 py-5` (40px / 20px) |
| `font-weight` | `bold` (700) |
| `font-family` | Inter |
| `color` | `#ffffff` |
| Gradiente | `#0b3164` → `#104892` → `#155ec0` (200% auto) |
| Sombra base | `0 10px 30px -10px rgba(16,72,146, 0.5)` |
| Sombra hover | `0 20px 40px -15px rgba(16,72,146, 0.6)` |
| Hover Transform | `scale(1.05)` |
| Active Transform | `scale(0.95)` |
| Shine effect | `::before` con gradiente blanco al 45° |

---

## ⬜ Botón Secundario — CTA de Apoyo

> *Ejemplo visual: "Nuestros Servicios" en el Hero (contorno azul, fondo transparente)*

### Uso en JSX/TSX (React):
```tsx
<button
  className="px-8 py-4 rounded-full transition-all hover:scale-105"
  style={{
    background: "transparent",
    border: "1px solid #104892",
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontWeight: 500,
    color: "#104892",
  }}
>
  Nuestros Servicios
</button>
```

### Uso en Astro / Tailwind:
```astro
<a
  href="/servicios/"
  class="px-8 py-4 rounded-full border border-[#104892] text-[#104892] 
         font-medium text-lg bg-transparent hover:bg-[#104892]/5 
         transition-all hover:scale-105"
>
  Nuestros Servicios
</a>
```

### Especificaciones visuales resumidas:
| Propiedad | Valor |
|---|---|
| `border-radius` | `rounded-full` (9999px) |
| `padding` | `px-8 py-4` (32px / 16px) |
| `font-weight` | `medium` (500) |
| `font-size` | `18px` |
| `color` texto | `#104892` (primary) |
| `background` | `transparent` |
| `border` | `1px solid #104892` |
| Hover | `background: rgba(16,72,146,0.05)` + `scale(1.05)` |

---

## 🌅 Fondo Hero — Degradé Principal

> *El fondo gris-azulado suave que va de `#cfd8e3` hasta `#ffffff`*

### Código CSS (inline style en React):
```tsx
style={{
  background: "linear-gradient(to bottom, #cfd8e3 0%, #e6e6e6 25%, #f5f7fa 45%, #ffffff 60%, #ffffff 100%)",
  isolation: "isolate"
}}
```

### Pasos del degradé:
| Punto | Color | Descripción |
|---|---|---|
| `0%` | `#cfd8e3` | Azul-gris claro (tono clínico institucional) |
| `25%` | `#e6e6e6` | Gris neutro (color de fondo de marca) |
| `45%` | `#f5f7fa` | Gris casi blanco |
| `60–100%` | `#ffffff` | Blanco puro (transición limpia hacia el contenido) |

### Equivalente Tailwind personalizado (si se necesita en clase):
```css
/* Agregar en global.css */
@utility hero-gradient {
  background: linear-gradient(to bottom, #cfd8e3 0%, #e6e6e6 25%, #f5f7fa 45%, #ffffff 60%, #ffffff 100%);
  isolation: isolate;
}
```

---

## 🔵 Mancha Circular Azul — "Halo" Flotante del Hero

> *El efecto de resplandor circular azul animado que flota sobre el hero*

### Código JSX:
```tsx
{/* Clase CSS de la animación: hero-halo-animate */}
<div
  className="absolute left-1/2 top-[-250px] w-[900px] h-[900px] 
             pointer-events-none hero-halo-animate"
  style={{
    background: "radial-gradient(circle, rgba(21,94,192,0.45) 0%, rgba(16,72,146,0.35) 30%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0) 70%)",
    filter: "blur(60px)",
    zIndex: 0,
  }}
/>
```

### Keyframe de la animación (en `<style>` tag):
```css
@keyframes floatGlow {
  0%   { transform: translateX(-50%) translateY(0px) scale(1);    opacity: 0.85; }
  50%  { transform: translateX(-48%) translateY(20px) scale(1.05); opacity: 1;    }
  100% { transform: translateX(-50%) translateY(0px) scale(1);    opacity: 0.85; }
}
.hero-halo-animate {
  animation: floatGlow 12s ease-in-out infinite;
}
```

### Especificaciones visuales:
| Propiedad | Valor |
|---|---|
| Tamaño | `900px × 900px` |
| Posición | `left: 50%`, `top: -250px` (sale del borde superior) |
| Centro del gradiente | `rgba(21, 94, 192, 0.45)` — Azul accent con 45% opacidad |
| Borde interior | `rgba(16, 72, 146, 0.35)` — Azul primary más oscuro |
| Transición a blanco | `rgba(255,255,255,0.4)` al `55%` |
| Desvanece en | `rgba(255,255,255,0)` al `70%` |
| `filter` | `blur(60px)` — suavizado máximo |
| Animación | `floatGlow` — 12s, ease-in-out, infinite |
| Movimiento | Flota ±20px en Y, escala de 1 a 1.05 |

### Acento de esquinas (complementario al halo):
```tsx
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(circle at 0% 0%,   rgba(16,72,146,0.12), transparent 40%),
      radial-gradient(circle at 100% 0%,  rgba(21,94,192,0.12), transparent 40%)
    `,
    zIndex: 0
  }}
/>
```

---

## ✅ Checklist — Nuevos Componentes Hero o Botones

Antes de crear cualquier Hero o botón nuevo, verifique:

**Hero:**
- [ ] Usa el degradé `#cfd8e3 → #e6e6e6 → #f5f7fa → #ffffff` de arriba a abajo
- [ ] Incluye el halo circular con `blur(60px)` y animación `floatGlow 12s`
- [ ] El halo comienza con `rgba(21,94,192,0.45)` en el centro
- [ ] El contenido tiene `z-index: 10` (por encima del halo que está en `z-index: 0`)
- [ ] Usa la clase `isolation: isolate` en la sección contenedora

**Botón Primario (CTA):**
- [ ] Usa la clase `btn-brand` (ya definida en `global.css`)
- [ ] Padding mínimo: `px-10 py-5`
- [ ] `rounded-full` (nunca `rounded-md` o cuadrado)
- [ ] Incluye icono de acción (`ArrowRight` o similar) a la derecha
- [ ] El enlace apunta a `/contacto/` (conversión principal)

**Botón Secundario:**
- [ ] `border: 1px solid #104892` — nunca de otro color
- [ ] `color: #104892` — nunca negro puro
- [ ] `background: transparent` — nunca relleno de color sólido
- [ ] `rounded-full` — mismo radio que el botón primario
- [ ] Hover: suave `background: rgba(16,72,146,0.05)` + `scale(1.05)`

---

*Manual generado el 12/04/2026 · VitalHome Salud Design System v1.0*
