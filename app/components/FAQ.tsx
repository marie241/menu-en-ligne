"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment puis-je commencer avec Menu en Ligne ?",
    answer:
      "Contactez-nous via WhatsApp, nous vous guidons pour creer votre menu digital en quelques minutes. Vous pouvez commencer gratuitement.",
  },
  {
    question: "Mes clients ont-ils besoin d'une application ?",
    answer:
      "Non, aucune application n'est necessaire. Le menu s'affiche directement dans le navigateur du smartphone apres le scan du QR code.",
  },
  {
    question: "Puis-je modifier mon menu a tout moment ?",
    answer:
      "Oui, vous pouvez modifier vos plats, prix, descriptions et photos en temps reel depuis votre tableau de bord. Les changements sont immediats.",
  },
  {
    question: "Est-ce adapte aux restaurants au Gabon ?",
    answer:
      "Absolument. Notre solution est concue specifiquement pour le marche gabonais et africain, avec une connexion optimisee pour les reseaux locaux.",
  },
  {
    question: "Quelles statistiques puis-je consulter ?",
    answer:
      "Vous avez acces aux plats les plus consultes, aux heures de pointe, aux preferences clients et aux tendances de votre menu.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Questions frequentes
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border overflow-hidden transition-colors hover:border-gold/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-card"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
