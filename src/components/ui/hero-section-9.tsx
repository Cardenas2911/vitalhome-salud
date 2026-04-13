import { motion, type Variants } from 'framer-motion';
import { type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { Activity, UserCheck, ShieldCheck } from 'lucide-react';

// Mapeo de iconos internos para evitar errores de serialización desde Astro
const IconMap = {
  activity: Activity,
  users: UserCheck,
  shield: ShieldCheck
};

interface StatProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  iconName?: keyof typeof IconMap;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatGlow {
          0% { transform: translateX(-50%) translateY(0px) scale(1); opacity: 0.85; }
          50% { transform: translateX(-48%) translateY(20px) scale(1.05); opacity: 1; }
          100% { transform: translateX(-50%) translateY(0px) scale(1); opacity: 0.85; }
        }
        .hero-halo-animate {
          animation: floatGlow 12s ease-in-out infinite;
        }
      `}} />
      <section 
        className={cn('w-full overflow-hidden pt-32 pb-12 sm:pt-48 sm:pb-24 relative', className)}
        style={{
          background: "linear-gradient(to bottom, #cfd8e3 0%, #e6e6e6 25%, #f5f7fa 45%, #ffffff 60%, #ffffff 100%)",
          isolation: "isolate"
        }}
      >
        <div 
          className="absolute left-1/2 top-[-250px] w-[900px] h-[900px] pointer-events-none blur-[60px] hero-halo-animate"
          style={{
            background: "radial-gradient(circle, rgba(21, 94, 192, 0.45) 0%, rgba(16, 72, 146, 0.35) 30%, rgba(255, 255, 255, 0.4) 55%, rgba(255, 255, 255, 0) 70%)",
            zIndex: 0,
          }}
        />
        
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(circle at 0% 0%, rgba(16,72,146,0.12), transparent 40%), radial-gradient(circle at 100% 0%, rgba(21,94,192,0.12), transparent 40%)",
            zIndex: 0
          }}
        />
        
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 relative z-10 px-4">
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-black tracking-tight text-[#061a36] sm:text-6xl font-heading leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p className="mt-8 max-w-xl text-lg text-[#0b3164]/70 font-body leading-relaxed" variants={itemVariants}>
              {subtitle}
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start font-bold" variants={itemVariants}>
              {actions.map((action, index) => (
                <button 
                  key={index} 
                  onClick={action.onClick} 
                  className={cn(
                    "transition-transform hover:scale-105 active:scale-95",
                    action.variant === 'outline' ? "px-8 py-4 rounded-full border border-[#104892] text-[#104892] font-medium text-lg bg-transparent hover:bg-[#104892]/5 transition-all text-center" : "btn-brand px-10 py-5",
                    action.className
                  )}
                >
                  {action.text}
                </button>
              ))}
            </motion.div>
            <motion.div className="mt-16 flex flex-wrap justify-center gap-12 lg:justify-start border-t border-[#061a36]/10 pt-10" variants={itemVariants}>
            {stats.map((stat, index) => {
              const IconComp = stat.iconName ? IconMap[stat.iconName] : null;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#061a36]/5 border border-[#061a36]/10 text-[#155ec0] backdrop-blur-sm">
                    {IconComp ? <IconComp className="size-6" /> : stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#061a36]">{stat.value}</p>
                    <p className="text-xs font-bold text-[#061a36]/40 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
          </motion.div>

          {/* Right Column: Image Collage */}
          <motion.div
            className="relative h-[400px] w-full sm:h-[600px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-blue-400/20 blur-xl"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div
              className="absolute bottom-10 right-1/4 h-24 w-24 rounded-3xl bg-primary/10 blur-2xl"
              variants={floatingVariants}
              animate="animate"
              style={{ transitionDelay: '0.5s' }}
            />

            <motion.div
              className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-[32px] bg-white p-2 shadow-2xl sm:h-72 sm:w-72 border border-[#061a36]/10"
              style={{ transformOrigin: 'bottom center' }}
              variants={imageVariants}
            >
              <img src={images[0]} alt="Servicio 1" className="h-full w-full rounded-[24px] object-cover" />
            </motion.div>
            <motion.div
              className="absolute right-0 top-1/3 h-40 w-40 rounded-[32px] bg-white p-2 shadow-2xl sm:h-64 sm:w-64 border border-[#061a36]/10"
              style={{ transformOrigin: 'left center' }}
              variants={imageVariants}
            >
              <img src={images[1]} alt="Servicio 2" className="h-full w-full rounded-[24px] object-cover" />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 h-32 w-32 rounded-[32px] bg-white p-2 shadow-2xl sm:h-56 sm:w-56 border border-[#061a36]/10"
              style={{ transformOrigin: 'top right' }}
              variants={imageVariants}
            >
              <img src={images[2]} alt="Servicio 3" className="h-full w-full rounded-[24px] object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
