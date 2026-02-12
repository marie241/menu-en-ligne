import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-restaurant.jpg"
          alt="Restaurant moderne avec menu digital"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-gold-light">
              Solution pour les restaurants au Gabon
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-background mb-6 text-balance">
            Le menu digital intelligent pour les restaurants modernes
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-background/80 mb-10 max-w-xl">
            Menus QR, statistiques en temps reel et meilleure experience client.
            Passez au digital et modernisez votre restaurant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/24177009049"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-background hover:bg-gold-light transition-colors"
            >
              Demandez une demo
              <ArrowRight size={18} />
            </a>
            <a
              href="#comment-ca-marche"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-background/30 px-7 py-3.5 text-base font-semibold text-background hover:bg-background/10 transition-colors"
            >
              Comment ca marche
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-background/50 tracking-widest uppercase">Decouvrir</span>
          <div className="w-px h-8 bg-background/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
