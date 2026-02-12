import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-green-deep relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-light/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight text-balance mb-6">
          Passez au menu digital des aujourd'hui
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Rejoignez les restaurants modernes qui offrent une experience digitale
          a leurs clients. Simple, rapide et elegant.
        </p>
        <a
          href="https://wa.me/24177009049"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-background hover:bg-gold-light transition-colors"
        >
          Demandez une demo sur WhatsApp
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
