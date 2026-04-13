import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface ShineButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const ShineButton = React.forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="brand"
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          // Efecto de brillo (Shine) al hacer hover - Suavizado
          "before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)]",
          "before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat",
          "before:transition-[background-position] before:duration-[1500ms] before:ease-in-out",
          "hover:before:bg-[position:-100%_0,0_0]",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

ShineButton.displayName = "ShineButton";

export default ShineButton;
