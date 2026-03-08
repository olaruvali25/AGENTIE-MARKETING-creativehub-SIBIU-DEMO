"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import AnimatedCard from "@/components/animated-card";
import ContactUsPage from "@/components/contact-us-page";
import FooterSection from "@/components/footer-section";
import { FeatureSteps } from "@/components/feature-steps";
import { FinancialHero } from "@/components/financial-hero";
import { LoadingScreen } from "@/components/loading-screen";
import { SiteNavbar } from "@/components/site-navbar";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  showDecorations?: boolean;
}

function ParallaxSection({ id, children, className, showDecorations = true }: ParallaxSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const deepY = useTransform(scrollYProgress, [0, 1], [180, -180]);

  return (
    <section ref={ref} id={id} className={cn("parallax__group relative isolate overflow-hidden", className)}>
      {showDecorations ? (
        <motion.div
          aria-hidden
          style={{ y: deepY }}
          className="parallax__layer parallax__layer--deep pointer-events-none opacity-70"
        >
          <div className="absolute left-[-6%] top-[16%] h-80 w-80 rounded-full bg-[#E086D3]/20 blur-3xl" />
          <div className="absolute right-[-4%] top-[38%] h-96 w-96 rounded-full bg-[#8332AC]/16 blur-3xl" />
        </motion.div>
      ) : null}

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

export function AgencyLanding() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  const features = [
    {
      step: "01",
      title: "Audit si clarificare de oferta",
      content:
        "Definim pozitionarea, oferta si mesajele comerciale care trebuie sa apara in reclame, pagini si follow-up.",
      image: "/second-section-photo-1.jpg"
    },
    {
      step: "02",
      title: "Structura de campanii si tracking",
      content:
        "Setam sistemul pentru Google Ads, Meta Ads si masurare corecta astfel incat fiecare lead sa fie atribuit clar.",
      image: "/second-section-photo-2.jpg"
    },
    {
      step: "03",
      title: "Landing pages si elemente SEO",
      content:
        "Construim sectiuni persuasive si optimizam structura on-page pentru relevanta, scor de calitate si indexare.",
      image: "/second-section-photo-3.jpg"
    },
    {
      step: "04",
      title: "Optimizare continua dupa date",
      content:
        "Testam headline-uri, audiente, CTA-uri si micro-conversii pana cand costul per lead incepe sa scada sanatos.",
      image: "/second-section-photo-4.jpg"
    }
  ];

  return (
    <>
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
      <SiteNavbar />

      <main className="parallax relative overflow-x-clip pb-0">
        <div id="hero">
          <FinancialHero
            title={<>PPC, SEO si landing pages pentru branduri care vor rezultate</>}
            primaryButtonText="Solicita un audit"
            primaryButtonLink="#contact"
            secondaryButtonText="Vezi procesul"
            secondaryButtonLink="#proces"
          />
        </div>

        <ParallaxSection id="proces" className="bg-white">
          <FeatureSteps
            features={features}
            title="Cum arata colaborarea de la primul click la prima optimizare"
            autoPlayInterval={4500}
          />
        </ParallaxSection>

        <ParallaxSection id="servicii">
          <AnimatedCard />
        </ParallaxSection>

        <ParallaxSection id="contact" className="bg-white" showDecorations={false}>
          <div className="px-6 md:px-10 xl:px-20">
            <ContactUsPage />
          </div>
        </ParallaxSection>

        <FooterSection />
      </main>
    </>
  );
}