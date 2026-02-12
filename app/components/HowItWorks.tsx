import { ScanLine, BookOpen, MousePointerClick, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Scanner le QR code",
    description:
      "Vos clients scannent simplement le QR code depuis leur table avec leur smartphone.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Consulter le menu",
    description:
      "Le menu digital s'affiche instantanement, avec photos, descriptions et prix a jour.",
  },
  {
    number: "03",
    icon: MousePointerClick,
    title: "Commander facilement",
    description:
      "Une interface intuitive pour choisir et commander en toute simplicite.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Suivre les statistiques",
    description:
      "En tant que restaurateur, suivez les plats les plus consultes et optimisez votre offre.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">
            Fonctionnement
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Comment ca marche ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Quatre etapes simples pour digitaliser votre restaurant et offrir une experience moderne a vos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                  {step.number}
                </span>
                <div className="h-12 w-12 rounded-xl bg-green-deep/10 flex items-center justify-center group-hover:bg-green-deep/20 transition-colors">
                  <step.icon size={24} className="text-green-deep" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
