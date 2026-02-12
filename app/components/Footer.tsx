import Link from "next/link";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-green-deep flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-lg font-bold text-background tracking-tight">
                MENU EN LIGNE
              </span>
            </div>
            <p className="text-sm text-background/50 leading-relaxed">
              Solution pensee pour les restaurants au Gabon. Digitalisez votre
              menu et offrez une experience moderne a vos clients.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-1">
              Navigation
            </span>
            <Link href="#comment-ca-marche" className="text-sm text-background/60 hover:text-background transition-colors">
              Comment ca marche
            </Link>
            <Link href="#avantages" className="text-sm text-background/60 hover:text-background transition-colors">
              Avantages
            </Link>
            <Link href="#faq" className="text-sm text-background/60 hover:text-background transition-colors">
              FAQ
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-1">
              Contact
            </span>
            <a
              href="https://wa.me/24177009049"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
            >
              <Phone size={16} />
              +241 77 009 049
            </a>
            <p className="text-sm text-background/50">
              Libreville, Gabon
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} MENU EN LIGNE par IFOUMB. Tous droits reserves.
          </p>
          <p className="text-xs text-background/40">
            Solution pensee pour les restaurants au Gabon
          </p>
        </div>
      </div>
    </footer>
  );
}
