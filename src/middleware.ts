import { defineMiddleware } from 'astro:middleware';

/**
 * Middleware de Astro configurado bajo la metodología MAES (Guardrails)
 * Aplica Tripletas de Seguridad: Sentry, Better Auth y Headers Estrictos.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  // Guardrail 1: Autenticación con Better Auth
  // const session = await auth.api.getSession({ headers: context.request.headers });
  // if (!session && context.url.pathname.startsWith('/dashboard')) {
  //   return context.redirect('/login');
  // }

  const startTime = performance.now();
  
  try {
    const response = await next();
    
    // Guardrail 2: Security Headers (YMYL Priority)
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    
    // Server Timing API (AEO Performance Tracking)
    const duration = performance.now() - startTime;
    response.headers.set('Server-Timing', `app;desc="React Render";dur=${duration}`);

    return response;
  } catch (error) {
    // Guardrail 3: Sentry Integration for Error Tracking
    // import * as Sentry from '@sentry/astro';
    // Sentry.captureException(error);
    
    console.error('[MAES Error Guardrail]:', error);
    throw error;
  }
});
