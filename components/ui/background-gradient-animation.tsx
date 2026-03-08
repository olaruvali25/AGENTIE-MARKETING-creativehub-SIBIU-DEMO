"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: React.CSSProperties["mixBlendMode"];
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

export function BackgroundGradientAnimation({
  gradientBackgroundStart = "rgb(255, 255, 255)",
  gradientBackgroundEnd = "rgb(250, 244, 255)",
  firstColor = "131, 50, 172",
  secondColor = "224, 134, 211",
  thirdColor = "100, 220, 255",
  fourthColor = "242, 209, 201",
  fifthColor = "190, 139, 224",
  pointerColor = "131, 50, 172",
  size = "78%",
  blendingValue = "multiply",
  children,
  className,
  interactive = false,
  containerClassName
}: BackgroundGradientAnimationProps) {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!interactive) {
      return;
    }

    const animate = () => {
      const nextX = currentRef.current.x + (targetRef.current.x - currentRef.current.x) / 18;
      const nextY = currentRef.current.y + (targetRef.current.y - currentRef.current.y) / 18;

      currentRef.current = { x: nextX, y: nextY };

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(nextX)}px, ${Math.round(nextY)}px)`;
      }

      animationRef.current = window.requestAnimationFrame(animate);
    };

    animationRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [interactive]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[linear-gradient(135deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
      style={
        {
          "--gradient-background-start": gradientBackgroundStart,
          "--gradient-background-end": gradientBackgroundEnd,
          "--first-color": firstColor,
          "--second-color": secondColor,
          "--third-color": thirdColor,
          "--fourth-color": fourthColor,
          "--fifth-color": fifthColor,
          "--pointer-color": pointerColor,
          "--size": size,
          "--blending-value": blendingValue
        } as React.CSSProperties
      }
      onMouseMove={(event) => {
        if (!interactiveRef.current || !interactive) {
          return;
        }

        const rect = interactiveRef.current.getBoundingClientRect();
        targetRef.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        };
      }}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("relative z-10", className)}>{children}</div>

      <div
        className={cn(
          "gradients-container absolute inset-0 h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(42px)]"
        )}
      >
        <div className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] animate-first opacity-95 [background:radial-gradient(circle_at_center,rgba(var(--first-color),0.92)_0,rgba(var(--first-color),0)_52%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:center_center]" />
        <div className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] animate-second opacity-90 [background:radial-gradient(circle_at_center,rgba(var(--second-color),0.9)_0,rgba(var(--second-color),0)_52%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-360px)]" />
        <div className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] animate-third opacity-82 [background:radial-gradient(circle_at_center,rgba(var(--third-color),0.76)_0,rgba(var(--third-color),0)_52%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%+360px)]" />
        <div className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] animate-fourth opacity-58 [background:radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0,rgba(var(--fourth-color),0)_52%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-180px)]" />
        <div className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] animate-fifth opacity-82 [background:radial-gradient(circle_at_center,rgba(var(--fifth-color),0.82)_0,rgba(var(--fifth-color),0)_52%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-620px)_calc(50%+620px)]" />

        {interactive ? (
          <div
            ref={interactiveRef}
            className="absolute -left-1/2 -top-1/2 h-full w-full opacity-45 [background:radial-gradient(circle_at_center,rgba(var(--pointer-color),0.62)_0,rgba(var(--pointer-color),0)_45%)_no-repeat] [mix-blend-mode:var(--blending-value)]"
          />
        ) : null}
      </div>
    </div>
  );
}
