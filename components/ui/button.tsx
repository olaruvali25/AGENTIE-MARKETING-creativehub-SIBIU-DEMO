import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-[#8332AC] text-black shadow-[0_14px_40px_rgba(131,50,172,0.22)] hover:-translate-y-0.5 hover:bg-[#702a95]",
        outline:
          "border border-black/20 bg-white/35 text-black backdrop-blur-sm hover:bg-white/50",
        secondary:
          "bg-[#E086D3] text-black shadow-[0_14px_40px_rgba(224,134,211,0.24)] hover:-translate-y-0.5 hover:bg-[#d874ca]"
      },
      size: {
        default: "h-10 px-5 py-2",
        lg: "h-12 px-8 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
