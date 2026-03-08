"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ContactItem {
  title: string;
  icon: LucideIcon;
  description: string;
}

interface ContactUsProps {
  contactInfo: ContactItem[];
}

const ContactUs = ({ contactInfo }: ContactUsProps) => {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-0 py-10 md:py-14">
      <div className="grid gap-10 xl:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/64">
            Contact
          </p>
          <h2 className="mt-4 max-w-4xl text-5xl font-bold text-black md:text-6xl">
            Campanii mai clare. Lead-uri mai bune. Decizii bazate pe date.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-black/72">
            Daca vrei un sistem de achizitie mai bun pentru Google Ads, Meta Ads si SEO, de aici porneste brief-ul.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:max-w-4xl">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="p-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E086D3]/32 text-black">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-black/72">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="bg-transparent p-0"
        >
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/62">
              Cere oferta
            </p>
            <h3 className="mt-3 text-3xl font-bold text-black">
              Spune-ne ce vrei sa scalezi.
            </h3>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Numele tau"
              className="w-full border-0 border-b border-black/18 bg-transparent px-0 py-3 text-black outline-none transition placeholder:text-black/40 focus:border-[#8332AC]"
            />
            <input
              type="text"
              placeholder="Compania sau website-ul"
              className="w-full border-0 border-b border-black/18 bg-transparent px-0 py-3 text-black outline-none transition placeholder:text-black/40 focus:border-[#8332AC]"
            />
            <input
              type="email"
              placeholder="Adresa de email"
              className="w-full border-0 border-b border-black/18 bg-transparent px-0 py-3 text-black outline-none transition placeholder:text-black/40 focus:border-[#8332AC]"
            />
            <textarea
              placeholder="Spune-ne despre business, obiective si bugetul estimativ"
              rows={5}
              className="w-full resize-none border-0 border-b border-black/18 bg-transparent px-0 py-3 text-black outline-none transition placeholder:text-black/40 focus:border-[#8332AC]"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#E086D3] px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#d46cc6]"
            >
              Trimite solicitarea
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
