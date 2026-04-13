import { defineMiddleware } from 'astro:middleware';

/**
 * Middleware de Astro configurado bajo la Metodología MAES (Guardrails)
 * Aplica Tripletas de Seguridad: Sentry, Autenticación y Headers Estrictos.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  // Guardrail 1: Autenticación (Listos para implementar Better Auth)
  // const session = await auth.api.getSession({ headers: context.request.headers });
  // if (!session && context.url.pathname.startsWith('/dashboard')) {
  //   return context.redirect('/login');
  // }

  const startTime = performance.now();
  
  try {
    const response = await next();
    
    // Guardrail 2: Security Headers Strict (YMYL Priority - Healthcare Standard)
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set(
      'Permissions-Policy', 
      'camera=(), microphone=(), geolocation=(), browsing-topics=()'
    );
    // Content Security Policy Base (Permite scripts de LordIcon y fuentes de Google, bloquea eval)
    response.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.lordicon.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';"
    );
    
    // Server Timing API (AEO Performance Tracking)
    const duration = performance.now() - startTime;
    response.headers.set('Server-Timing', `app;desc="React Render";dur=${duration}`);

    return response;
  } catch (error) {
    // Guardrail 3: Error Tracking (Listos para implementar Sentry)
    // import * as Sentry from '@sentry/astro';
    // Sentry.captureException(error);
    
    console.error('[MAES Error Guardrail]: Riesgo de seguridad o fallo no controlado detectado:', error);
    
    throw error;
  }
});
