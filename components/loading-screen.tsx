"use client";

import React from "react";
import { motion } from "framer-motion";

/*
Original loader snippet kept commented as requested.
*/

export function OrbitalLoader({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-black">
      <div className="relative h-16 w-16">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-black"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#F2D1C9]"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#8332AC]"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {message ? (
        <p className="text-sm font-semibold tracking-[0.08em] text-black/78">
          {message}
        </p>
      ) : null}
    </div>
  );
}

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#E086D3]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(14px)", scale: 1.04 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, filter: "blur(12px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center"
      >
        <OrbitalLoader message="Welcome to CreativeHub!" />
      </motion.div>
    </motion.div>
  );
}
