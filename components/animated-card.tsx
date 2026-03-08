"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const serviceCards = [
  {
    title: "Google Ads cu intentie mare",
    description: "Structuri de campanii orientate pe lead-uri, nu pe trafic gol."
  },
  {
    title: "Meta Ads pentru oferta si retentie",
    description: "Mesaje creative, unghiuri comerciale si remarketing cu ritm bun."
  },
  {
    title: "SEO care sustine media platita",
    description: "Continut, structura si semnale on-page pentru crestere pe termen lung."
  },
  {
    title: "Landing pages pentru conversie",
    description: "Pagini rapide, clare si construite pentru actiune si tracking."
  }
];

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.85 }}
      className="relative w-full overflow-hidden bg-white"
    >
      <BackgroundGradientAnimation
        containerClassName="min-h-[540px] px-6 py-10 md:px-10 md:py-12 xl:px-20"
        className="h-full w-full"
        gradientBackgroundStart="rgb(255, 255, 255)"
        gradientBackgroundEnd="rgb(249, 244, 255)"
        firstColor="131, 50, 172"
        secondColor="224, 134, 211"
        thirdColor="162, 112, 214"
        fourthColor="242, 209, 201"
        fifthColor="187, 137, 224"
        pointerColor="131, 50, 172"
        size="82%"
        blendingValue="multiply"
      >
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <div className="text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-black/72">
              Servicii cheie
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold text-black md:text-5xl">
              Sistem complet pentru crestere prin trafic platit si SEO.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-black/78 md:text-lg">
              Campanii, continut si pagini de vanzare gandite sa lucreze impreuna, cu un fundal aerisit si mai elegant pentru prezentare.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {serviceCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="border border-black/10 bg-white/72 p-5 text-left shadow-[0_22px_70px_rgba(131,50,172,0.08)] backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/86"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E086D3]/72 text-sm font-bold text-black">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-black/76">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </BackgroundGradientAnimation>
    </motion.div>
  );
};

export default AnimatedCard;

