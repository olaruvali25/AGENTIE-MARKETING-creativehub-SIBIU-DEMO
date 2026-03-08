"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FinancialHeroProps {
  title: React.ReactNode;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

export const FinancialHero = ({
  title,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className
}: FinancialHeroProps) => {
  return (
    <section
      className={cn(
        "relative min-h-[92vh] w-full overflow-hidden bg-center bg-cover bg-no-repeat text-black",
        className
      )}
      style={{ backgroundImage: "url('/hero-background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_68%,rgba(255,255,255,0.76)_100%)]" />

      <motion.div
        className="relative flex min-h-[92vh] w-full items-center justify-center px-6 py-16 md:px-10 xl:px-20"
        initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex w-full max-w-5xl flex-col items-center justify-center px-6 py-10 text-center md:px-10 md:py-14"
        >
          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-balance text-5xl font-bold leading-[0.9] text-[#2F3437] md:text-7xl"
            style={{
              textShadow: "0 12px 34px rgba(255, 255, 255, 0.42)",
              WebkitTextStroke: "0.6px rgba(255, 255, 255, 0.2)"
            }}
          >
            {title}
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={primaryButtonLink}>
              <Button size="lg" className="min-w-[220px] gap-2">
                {primaryButtonText}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href={secondaryButtonLink}>
              <Button variant="outline" size="lg" className="min-w-[220px] gap-2 border-black/20 bg-white/62 text-black hover:bg-white/78">
                <PlayCircle className="h-5 w-5" />
                {secondaryButtonText}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
