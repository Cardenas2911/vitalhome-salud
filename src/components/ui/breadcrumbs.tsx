import React from "react";
import { Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center text-sm font-medium", className)}
    >
      <ol className="flex items-center flex-wrap gap-y-1 gap-x-1 sm:gap-x-2">
        {/* Inicio / Home */}
        <li>
          <a
            href="/"
            className="text-slate-400 hover:text-[#104892] transition-colors duration-200 flex items-center"
            aria-label="Inicio"
          >
            <Home size={12} strokeWidth={2.5} />
          </a>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-x-1 sm:gap-x-2">
            <ChevronRight 
              size={10} 
              className="text-slate-300 flex-shrink-0" 
              strokeWidth={3}
            />
            
            {item.isCurrent || !item.href ? (
              <span 
                className="text-[#104892] font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.2em]"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="text-slate-400 hover:text-[#104892] transition-all duration-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
