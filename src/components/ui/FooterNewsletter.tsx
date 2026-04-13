import { Mail, Bell } from 'lucide-react';

export default function FooterNewsletter() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 mb-20">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0b3164] via-[#0b3164] to-[#041a36] p-8 md:p-14 shadow-2xl border border-white/10 group">
        
        {/* Decoraciones de fondo Dinámicas */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-0 group-hover:bg-primary/30 transition-colors duration-1000"></div>
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-accent/15 blur-[100px] rounded-full -z-0"></div>
        
        <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 backdrop-blur-md shadow-lg">
                <Bell className="size-3 text-white animate-bounce" />
                CÍRCULO DE BIENESTAR
            </div>
            
            <h3 className="mb-4 text-4xl font-black md:text-5xl text-white leading-[1.1] tracking-tight">
              Acompáñenos en el camino <br/>
              <span className="text-blue-300 italic bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                hacia el bienestar.
              </span>
            </h3>
            
            <p className="text-white/70 text-lg leading-relaxed font-medium max-w-md">
              Reciba consejos exclusivos de nuestras enfermeras jefe y especialistas en geriatría directamente en su correo.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row max-w-md pt-4">
              <div className="relative flex-1 group/input">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40 group-focus-within/input:text-primary transition-colors" />
                <input
                  type="email"
                  placeholder="Su correo electrónico"
                  className="w-full border-white/10 bg-white/5 text-white placeholder-white/30 focus:ring-primary rounded-2xl border pl-12 pr-4 py-5 focus:ring-2 focus:outline-none focus:bg-white/10 transition-all font-medium backdrop-blur-sm"
                />
              </div>
              <button className="bg-[#155ec0] hover:bg-[#104892] text-white shadow-[0_10px_25px_rgba(21,94,192,0.4)] rounded-2xl px-10 py-5 font-black tracking-widest text-[11px] uppercase transition-all hover:scale-[1.05] active:scale-95">
                SUSCRIBIRME
              </button>
            </div>
          </div>
          
          <div className="hidden justify-end md:flex">
            <div className="relative group/card">
              {/* Efecto de resplandor detrás de la imagen */}
              <div className="bg-primary/30 absolute inset-0 rotate-6 rounded-[40px] blur-3xl group-hover/card:rotate-2 transition-transform duration-700 -z-10" />
              
              <div className="relative overflow-hidden rounded-[40px] border border-white/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&h=450&q=80"
                    alt="VitalHome Team"
                    className="w-[450px] h-[320px] object-cover group-hover/card:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover/card:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b3164] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-[2px] bg-primary"></div>
                        <p className="text-white font-black text-[10px] uppercase tracking-widest">Compromiso Vital</p>
                      </div>
                      <p className="text-white/80 text-xs font-bold italic">Excelencia clínica desde 2018</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
