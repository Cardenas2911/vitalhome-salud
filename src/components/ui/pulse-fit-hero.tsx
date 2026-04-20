import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, ArrowRight } from "lucide-react";

interface NavigationItem {
  label: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

interface ProgramCard {
  image: string;
  category: string;
  title: string;
  onClick?: () => void;
  objectPosition?: string;
}

interface PulseFitHeroProps {
  logo?: string;
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  title: string;
  subtitle: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  disclaimer?: string;
  socialProof?: {
    avatars: string[];
    text: string;
  };
  programs?: ProgramCard[];
  className?: string;
  children?: React.ReactNode;
}

export function PulseFitHero({
  logo = "PulseFit",
  navigation = [
    { label: "Features" },
    { label: "Programs", hasDropdown: true },
    { label: "Testimonials" },
    { label: "Pricing" },
    { label: "Contact" },
  ],
  ctaButton,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  className,
  children,
}: PulseFitHeroProps) {
  return (
    <>
      <style>{`
        @keyframes floatGlow {
          0% {
            transform: translateX(-50%) translateY(0px) scale(1);
            opacity: 0.85;
          }
          50% {
            transform: translateX(-48%) translateY(20px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(0px) scale(1);
            opacity: 0.85;
          }
        }
        .hero-halo-animate {
          animation: floatGlow 12s ease-in-out infinite;
        }
      `}</style>
      <section
        className={cn(
          "relative w-full min-h-screen flex flex-col overflow-hidden pt-24 md:pt-40 lg:pt-56",
          className
        )}
        style={{
          background: "linear-gradient(to bottom, #cfd8e3 0%, #e6e6e6 25%, #f5f7fa 45%, #ffffff 60%, #ffffff 100%)",
          isolation: "isolate"
        }}
        role="banner"
        aria-label="Hero section"
      >
        {/* 🔵 Halo principal (Efecto circular flotante animado de foco) */}
        <div 
          className="absolute left-1/2 top-[-100px] md:top-[-250px] w-[500px] md:w-[900px] h-[500px] md:h-[900px] pointer-events-none hero-halo-animate"
          style={{
            background: "radial-gradient(circle, rgba(21, 94, 192, 0.45) 0%, rgba(16, 72, 146, 0.35) 30%, rgba(255, 255, 255, 0.4) 55%, rgba(255, 255, 255, 0) 70%)",
            filter: "blur(40px) md:blur(60px)",
            zIndex: 0,
            bottom: "auto"
          }}
        />

        {/* 🌀 Curvaturas sutiles en esquinas */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 0% 0%, rgba(16,72,146,0.12), transparent 40%), radial-gradient(circle at 100% 0%, rgba(21,94,192,0.12), transparent 40%)",
            zIndex: 0
          }}
        />

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl gap-6 md:gap-10"
          >
            {/* Title */}
            <h1
              className="px-2 font-heading tracking-tight text-[#061a36]"
              style={{
                fontWeight: 800,
                fontSize: "clamp(30px, 5.5vw, 76px)",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className="px-4 text-[#0b3164]/80 max-w-2xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: "1.6",
              }}
            >
              {subtitle}
            </p>

            {/* Action Buttons */}
            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                {primaryAction && (
                  <button
                    onClick={primaryAction.onClick}
                    className={cn(
                      "btn-brand w-full sm:w-auto",
                      "flex flex-row items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5"
                    )}
                  >
                    {primaryAction.label}
                    <ArrowRight size={22} className="ml-1" />
                  </button>
                )}

                {secondaryAction && (
                  <button
                    onClick={secondaryAction.onClick}
                    className="w-full sm:w-auto px-6 md:px-10 py-3.5 md:py-4 rounded-full transition-all hover:scale-105 border border-[#104892] text-[#104892] font-semibold text-lg hover:bg-white/40"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {secondaryAction.label}
                  </button>
                )}
              </motion.div>
            )}

            {/* Disclaimer */}
            {disclaimer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xs md:text-sm text-[#0b3164]/60 italic font-medium"
              >
                {disclaimer}
              </motion.p>
            )}

            {/* Social Proof */}
            {socialProof && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center gap-3 mt-6 md:mt-2"
              >
                <div className="flex flex-row -space-x-3">
                  {socialProof.avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`User ${index + 1}`}
                      className="rounded-full border-2 border-white w-10 h-10 md:w-12 md:h-12 shadow-sm"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
                <span
                  className="text-center sm:text-left text-[#0b3164]/70 font-medium"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(13px, 1.2vw, 15px)",
                    maxWidth: "280px md:maxWidth: none"
                  }}
                >
                  {socialProof.text}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* Program Cards Carousel */}
      {programs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden py-10 md:py-20"
        >
          {/* Gradient Overlays */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-20 md:w-48"
            style={{
              background: "linear-gradient(90deg, #FFFFFF 10%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-20 md:w-48"
            style={{
              background: "linear-gradient(270deg, #FFFFFF 10%, rgba(255, 255, 255, 0) 100%)",
            }}
          />

          {/* Scrolling Container */}
          <motion.div
            className="flex items-center gap-4 md:gap-8 px-4 md:px-12"
            animate={{
              x: [0, -((programs.length * 360))], // Ajuste empírico aproximado
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: programs.length * 5,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate programs for seamless loop */}
            {[...programs, ...programs, ...programs].map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={program.onClick}
                className="flex-shrink-0 cursor-pointer relative overflow-hidden rounded-[32px] shadow-2xl border border-white/20 w-[280px] md:w-[380px] h-[380px] md:h-[520px]"
              >
                {/* Image */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: program.objectPosition || "center",
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, rgba(6, 26, 54, 0) 0%, rgba(6, 26, 54, 0.85) 100%)",
                  }}
                />

                {/* Text Content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-2 md:gap-3"
                >
                  <span
                    className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-[.2em]"
                  >
                    {program.category}
                  </span>
                  <h3
                    className="text-xl md:text-3xl font-bold text-white leading-tight font-heading"
                  >
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
    </>
  );
}
