"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white text-black">
      <nav className="flex w-full items-center justify-between gap-6 px-6 py-4 md:px-10 xl:px-20">
        <a href="#hero" className="transition-opacity hover:opacity-80" aria-label="CreativeHub - acasa">
          <Logo />
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a className="text-black/80 transition hover:text-black" href="#servicii">
            Servicii
          </a>
          <a className="text-black transition" href="#proces">
            Proces
          </a>
          <a className="text-black/80 transition hover:text-black" href="#contact">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact">
            <Button className="h-10 px-5" variant="secondary">
              Cere o opinie
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}