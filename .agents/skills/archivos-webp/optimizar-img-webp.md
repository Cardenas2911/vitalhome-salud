# Flujo para Optimizar Imágenes (WebP)

Este workflow define cómo deben procesarse **todas las imágenes** (portadas, logos, galerías, blog) antes de ser integradas al proyecto `CardenasnicolasAstro`. El objetivo es mantener el LCP bajo y el rendimiento general al máximo.

## 1. Regla de Oro
**NUNCA** se deben subir imágenes en formato `.jpg`, `.jpeg` o `.png` directamente a la carpeta `public/` o `src/assets/`. Todas las imágenes **obligatoriamente** deben ser convertidas a `.webp`.

## 2. Proceso de Carga Local (Cómo subir tú mismo las imágenes)
Si tienes las imágenes originales en tu computadora:

1. Coloca las imágenes originales `.jpg` o `.png` en la raíz del proyecto (fuera de las carpetas públicas) o mantenlas en tu carpeta de *Descargas*.
2. Asegúrate de tener instalada la librería `sharp`.
3. Crea temporalmente un script (o modifica el existente en `scripts/process-image.js`) que tome tu imagen original y la convierta usando compresión.

**Código base para Sharp (Node.js):**
```js
import sharp from 'sharp';

// Cambia estas rutas por la ubicación de tu imagen y el destino final.
const inputPath = './mi-imagen-original.jpg';
const outputPath = './public/images/casos-de-exito/nombre-optimizado.webp';

sharp(inputPath)
    .webp({ quality: 80 }) // Compresión óptima para web
    .toFile(outputPath)
    .then(info => console.log('✅ Imagen optimizada y guardada:', info))
    .catch(err => console.error('❌ Error:', err));
```

4. Ejecuta el script corriendo: `node scripts/process-image.js`

## 3. Proceso mediante Agente (Chat)
Si le estás pidiendo a un agente de Inteligencia Artificial que procese las imágenes por ti:

1. **Sube las imágenes** pesadas (`.jpg`/`.png`) directamente como archivos adjuntos en la interfaz del chat.
2. Escribe el comando o instrucción: *"Aquí tienes las imágenes para el caso de [Nombre], procésalas a WebP y muévelas a la carpeta de casos de éxito".*
3. El Agente tiene la capacidad técnica de recibir ese archivo temporal, ejecutar el script de `sharp` internamente y colocar la versión `.webp` definitiva en la carpeta correcta (por ejemplo `public/images/casos-de-exito/...`).

## 4. Nomenclatura de Archivos
Todos los nombres de archivo `.webp` finales deben ser en minúsculas, separados por guiones (kebab-case) y no tener caracteres especiales.
- Portadas: `proyecto-[nombre-cliente]-portada.webp`
- Logos: `logo-[nombre-cliente].webp`
- Galerías: `caso-[nombre-cliente]-img-1.webp`
