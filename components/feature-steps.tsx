"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image?: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "Cum incepem",
  autoPlayInterval = 4500,
  imageHeight = "h-[400px]"
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const imageUrls = features
      .map((feature) => feature.image)
      .filter((image): image is string => Boolean(image));

    imageUrls.forEach((src) => {
      const preloadImage = new window.Image();
      preloadImage.src = src;
    });
  }, [features]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("w-full bg-white px-6 py-12 md:px-10 md:py-14 xl:px-20", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8 }}
        className="mb-12 max-w-4xl text-left text-4xl font-bold text-black md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      <div className="grid w-full grid-cols-1 gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:gap-14">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={cn(
                "flex items-start gap-5 px-1 py-4 md:gap-8",
                index === currentFeature ? "opacity-100" : "opacity-55"
              )}
              initial={{ opacity: 0.3, x: -10 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.55, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <motion.div
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold md:h-12 md:w-12",
                  index === currentFeature
                    ? "scale-110 bg-[#E086D3] text-black"
                    : "bg-black/8 text-black/75"
                )}
              >
                {feature.step}
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black">
                  {feature.title || feature.step}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-black/70 md:text-base">
                  {feature.content}
                </p>

                {index === currentFeature ? (
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/8">
                    <motion.div className="h-full rounded-full bg-[#8332AC]" animate={{ width: `${progress}%` }} />
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        <div className={cn("relative overflow-hidden", "h-[320px] md:h-[480px] xl:h-[560px]", imageHeight)}>
          {features.map((feature, index) => {
            const active = index === currentFeature;

            return feature.image ? (
              <motion.div
                key={feature.image}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active ? 1 : 0,
                  scale: active ? 1 : 1.015,
                  filter: active ? "blur(0px)" : "blur(4px)"
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: active ? 2 : 1, pointerEvents: "none" }}
              >
                <img
                  src={feature.image}
                  alt={feature.title || feature.step || "Imagine sectiune"}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-8 py-8 text-left">
                  <h3 className="max-w-md text-3xl font-bold text-black md:text-4xl">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
