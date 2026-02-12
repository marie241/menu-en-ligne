import {
  Zap,
  Smartphone,
  TrendingUp,
  RefreshCw,
  Award,
  Globe,
  Clock,
  Heart,
} from "lucide-react";

const clientBenefits = [
  {
    icon: Smartphone,
    title: "Plus besoin de menu papier",
    description: "Un menu toujours propre, lisible et accessible directement sur le telephone.",
  },
  {
    icon: Zap,
    title: "Rapide et simple",
    description: "Un scan suffit pour consulter tous les plats et boissons du restaurant.",
  },
  {
    icon: Heart,
    title: "Experience fluide et moderne",
    description: "Une navigation intuitive avec photos, descriptions et filtres.",
  },
  {
    icon: Clock,
    title: "Gain de temps",
    description: "Plus besoin d'attendre le serveur pour consulter le menu et choisir.",
  },
];

const restaurantBenefits = [
  {
    icon: TrendingUp,
    title: "Statistiques detaillees",
    description: "Suivez les plats les plus populaires, les habitudes clients et les tendances.",
  },
  {
    icon: RefreshCw,
    title: "Mise a jour en temps reel",
    description: "Modifiez prix, plats et photos instantanement sans reimprimer.",
  },
  {
    icon: Award,
    title: "Image professionnelle",
    description: "Offrez une experience premium et moderne a vos clients.",
  },
  {
    icon: Globe,
    title: "Adapte aux restaurants africains",
    description: "Solution concue pour le marche gabonais et le continent africain.",
  },
];

export default function Benefits() {
  return (
    <section id="avantages" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">
            Avantages
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Pourquoi choisir Menu en Ligne ?
          </h2>
        </div>

        {/* Client Benefits */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-10 bg-gold rounded-full" />
            <h3 className="text-xl font-semibold text-foreground">
              Pour vos clients
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-card p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-green-deep flex items-center justify-center mb-5">
                  <benefit.icon size={20} className="text-primary-foreground" />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Benefits */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-10 bg-green-deep rounded-full" />
            <h3 className="text-xl font-semibold text-foreground">
              Pour votre restaurant
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurantBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-card p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-gold flex items-center justify-center mb-5">
                  <benefit.icon size={20} className="text-accent-foreground" />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
