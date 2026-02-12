"use client";

import { Check, Star } from "lucide-react";
import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/24177009049";

const plans = [
  {
    id: "mensuel",
    name: "Mensuel",
    price: "10 000",
    period: "/mois",
    description: "Parfait pour tester et adopter le menu digital.",
    features: [
      "Menus illimites",
      "QR Codes personnalises",
      "Mises a jour en temps reel",
      "Support prioritaire",
    ],
    popular: false,
  },
  {
    id: "annuel",
    name: "Annuel",
    price: "100 000",
    period: "/an",
    badge: "Economisez 20 %",
    description:
      "L'offre la plus avantageuse pour les restaurateurs engages.",
    features: [
      "Toutes les fonctionnalites de la formule mensuelle",
      "Economisez 20 %",
      "Acces prioritaire aux nouvelles fonctionnalites",
      "Referencement sur nos reseaux sociaux",
    ],
    popular: true,
  },
];

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="tarifs" className="py-24 md:py-32 bg-beige">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">
            Tarifs
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Un prix simple, sans surprise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond le mieux a votre restaurant.
            Sans engagement, sans frais caches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const isHovered = hoveredPlan === plan.id;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative flex flex-col rounded-2xl border-2 p-8 md:p-10 transition-all duration-300 ${
                  isPopular
                    ? "border-gold bg-card shadow-xl scale-[1.02]"
                    : "border-border bg-card hover:border-gold/40 hover:shadow-lg"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                      <Star size={14} className="fill-current" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-base text-muted-foreground">
                    Fcfa{plan.period}
                  </span>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          isPopular
                            ? "bg-gold/15 text-gold"
                            : "bg-green-deep/10 text-green-deep"
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isPopular
                      ? "bg-gold text-accent-foreground hover:bg-gold-light shadow-md hover:shadow-lg"
                      : "bg-green-deep text-primary-foreground hover:bg-green-deep/90"
                  } ${isHovered ? "translate-y-[-1px]" : ""}`}
                >
                  Demandez une demo
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Tous les tarifs sont en Francs CFA (XAF). Paiement par Mobile Money ou
          virement bancaire.
        </p>
      </div>
    </section>
  );
}
