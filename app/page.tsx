"use client"

import React from "react";
import Image from "next/image";
import Nav from "./components/Nav";
import { CarouselPlugin } from "./components/Caroussel";
import menu from "@/public/menu.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HandPlatter } from 'lucide-react';
import { ChartPie } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Footer from "./components/Footer";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";

function page() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Comment puis-je commencer avec Menu en ligne ?",
      answer: "C'est très simple ! Inscrivez-vous sur notre plateforme, créez votre menu en quelques clics, et générez votre code QR. Vous pouvez commencer gratuitement et mettre à jour votre menu à tout moment."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Oui, absolument. Nous utilisons le chiffrement SSL et les dernières normes de sécurité pour protéger vos données et celles de vos clients. Tous les paiements sont traités de manière sécurisée."
    },
    {
      question: "Puis-je personnaliser mon QR code ?",
      answer: "Oui ! Vous pouvez personnaliser votre code QR avec votre logo, vos couleurs et votre branding pour qu'il corresponde à l'identité de votre restaurant."
    },
    {
      question: "Quel est le support client disponible ?",
      answer: "Nous offrons un support client 24/7 par email, chat et téléphone. Notre équipe est toujours prête à vous aider avec vos questions ou problèmes."
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment sans frais de résiliation. Vos données resteront accessibles pendant 30 jours après l'annulation."
    },
    {
      question: "Acceptez-vous les paiements en ligne ?",
      answer: "Oui, nous acceptons tous les principaux moyens de paiement : cartes bancaires, virements, et paiements mobiles."
    }
  ];

  const testimonials = [
    {
      name: "Jean Dupont",
      restaurant: "Restaurant Le Gourmet",
      text: "Menu en ligne a transformé la façon dont nos clients consultent notre menu. C'est simple, rapide et nos clients adorent !",
      rating: 5
    },
    {
      name: "Marie Laurent",
      restaurant: "Café du Coin",
      text: "Excellent service et support ! L'équipe a été très réactive pour répondre à mes questions. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Pierre Martin",
      restaurant: "Pizzeria Italia",
      text: "Les analytics fournis sont impressionnants. Maintenant je sais exactement quels plats se vendent le mieux.",
      rating: 5
    }
  ];

  return (
    <>
      <Nav />
      <div className="pt-24 flex justify-center">
        <CarouselPlugin />
      </div>
      {/* C'est quoi Menu-en-ligne ? */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20 my-20 px-4 md:px-10 lg:px-20">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#016630] mb-6">
            C'est quoi Menu en ligne ?
          </h1>
          <div className="md:hidden flex justify-center mb-6">
            <Image src={menu} alt="Menu en ligne" className="rounded-xl w-full max-w-md" />
          </div>
          <p className="text-base md:text-lg lg:text-lg text-gray-700 mb-8">
            Menu en ligne est une application web qui permet aux restaurants de
            créer et gérer des menus numériques accessibles via des codes QR.
            Les clients peuvent scanner le code QR avec leur smartphone pour
            consulter le menu, passer des commandes et effectuer des paiements
            en ligne. Cela améliore l'expérience client, réduit les coûts
            d'impression et facilite la mise à jour des menus.
          </p>
          <Link href="formulaire">
            <Button className="bg-[#016630] text-white rounded-full cursor-pointer hover:bg-[#015228] transition">
              Essayez gratuitement
            </Button>
          </Link>
        </div>
        <div className="hidden md:flex w-full md:w-1/2 lg:w-1/2 justify-center">
          <Image src={menu} alt="Menu en ligne" className="rounded-xl w-full max-w-md" />
        </div>
      </div>
      {/* pourquoi choisir Menu-en-ligne */}
      <div className="my-20 px-4 md:px-20 bg-gray-100 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#016630] mb-10">
          Pourquoi choisir Menu en ligne ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Card 1 */}
          <div>
            <Card className="bg-green-100 h-full">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold m-2">
                  Mise à jour instantanée du menu
                </CardTitle>
                <CardDescription className="text-lg md:text-2xl m-2">
                  Vous modifiez vos plats, prix ou photos en temps réel, sans
                  frais supplémentaires.
                </CardDescription>
                <CardAction>
                  <BookOpenCheck className="text-green-900" size={40} />
                </CardAction>
              </CardHeader>
            </Card>
          </div>

          {/* Card 2 */}
          <div>
            <Card className="bg-sky-500/10 h-full">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold m-2">
                  Expérience client moderne
                </CardTitle>
                <CardDescription className="text-lg md:text-2xl m-2">
                  Les clients apprécient la rapidité et la simplicité du QR code
                </CardDescription>
                <CardAction>
                  <HandPlatter className="text-green-900" size={40} />
                </CardAction>
              </CardHeader>
            </Card>
          </div>

          {/* Card 3 */}
          <div>
            <Card className="bg-purple-500/10 h-full">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold m-2">
                  Statistiques de performance
                </CardTitle>
                <CardDescription className="text-lg md:text-2xl m-2">
                  Vous voyez quels plats se vendent le mieux et ajustez votre offre, en fonction des préférences de vos clients.
                </CardDescription>
                <CardAction>
                  <ChartPie className="text-purple-900" size={40} />
                </CardAction>
              </CardHeader>
            </Card>
          </div>

          {/* Card 4 */}
          <div>
            <Card className="bg-[#A8853B] h-full">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold m-2 text-white">
                  Visibilité sur vos  chiffres clés
                </CardTitle>
                <CardDescription className="text-lg md:text-2xl text-white m-2">
                  Suivez les commandes, revenus et préférences clients en un coup d'œil, pour optimiser votre activité.
                </CardDescription>
                <CardAction>
                  <ChartNoAxesCombined className="text-white" size={40} />
                </CardAction>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      {/* comment ca marche */}
      <div className="my-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#016630] mb-10">
          Comment ça marche ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Step 1 */}
          <Card className="h-full">
            <CardHeader>
              <div className="text-5xl mb-4 text-[#A8853B] text-center">1</div>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
                Inscription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center text-base md:text-lg">
                Créez un compte gratuit sur notre plateforme.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="h-full">
            <CardHeader>
              <div className="text-5xl mb-4 text-[#A8853B] text-center">2</div>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
                Création du menu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center text-base md:text-lg">
                Utilisez notre interface intuitive pour créer votre menu digital.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="h-full">
            <CardHeader>
              <div className="text-5xl mb-4 text-[#A8853B] text-center">3</div>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-center">
                Partagez le QR code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center text-base md:text-lg">
                Affichez le code QR dans votre restaurant pour que les clients puissent accéder au menu.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-12">
          <Link href="formulaire">
            <Button className="bg-[#016630] text-white rounded-full cursor-pointer hover:bg-[#015228] transition text-lg px-8 py-6">
              Essayez la démo
            </Button>
          </Link>
        </div>
      </div>
      {/* Nos Tarifs */}
      <div className="my-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#016630] mb-10">
          Nos Tarifs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Plan Mensuel */}
          <div className="flex flex-col h-full">
            <Card className="bg-white h-full border-2 border-[#016630] hover:shadow-2xl transition transform hover:scale-105">
              <CardHeader className="text-center border-b-2 border-[#016630] pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-[#016630] mb-4">
                  Plan Mensuel
                </CardTitle>
                <div className="text-5xl font-bold text-[#A8853B] mb-2">
                  10 000
                </div>
                <p className="text-xl text-gray-600">Fr CFA / mois</p>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Création illimitée de menus
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Codes QR personnalisés
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Analytics en temps réel
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Support client 24/7
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Mises à jour gratuites
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="border-t-2 border-[#016630] pt-6">
                <Link href="formulaire" className="w-full">
                  <Button className="w-full bg-[#016630] text-white rounded-lg hover:bg-[#015228] transition py-3 text-lg">
                    Choisir ce plan
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Plan Annuel (Recommandé) */}
          <div className="flex flex-col h-full">
            <div className="bg-[#A8853B] text-white text-center py-2 px-4 rounded-lg font-semibold text-lg">
              ⭐ MEILLEURE OFFRE ⭐
            </div>
            <Card className="bg-gradient-to-b from-[#FFF9E6] to-white h-full border-3 border-[#A8853B] hover:shadow-2xl transition transform hover:scale-105">
              <CardHeader className="text-center border-b-2 border-[#A8853B] pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-[#016630] mb-4">
                  Plan Annuel
                </CardTitle>
                <div className="text-5xl font-bold text-[#A8853B] mb-2">
                  110 000
                </div>
                <p className="text-xl text-gray-600">Fr CFA / an</p>
                <p className="text-lg text-[#A8853B] font-semibold mt-3">
                  Économisez 10% 💰
                </p>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-center">
                    <span className="text-[#A8853B] font-bold mr-3">✓</span>
                    Tout du plan mensuel
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#A8853B] font-bold mr-3">✓</span>
                    Priorité support premium
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#A8853B] font-bold mr-3">✓</span>
                    Rapports détaillés mensuel
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#A8853B] font-bold mr-3">✓</span>
                    Formation personnalisée
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#A8853B] font-bold mr-3">✓</span>
                    Accès API avancée
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="border-t-2 border-[#A8853B] pt-6">
                <Link href="formulaire" className="w-full">
                  <Button className="w-full bg-[#A8853B] text-white rounded-lg hover:bg-[#8A6E2E] transition py-3 text-lg font-semibold">
                    Choisir ce plan
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Plan Sur Mesure */}
          <div className="flex flex-col h-full">
            <Card className="bg-white h-full border-2 border-gray-300 hover:shadow-2xl transition transform hover:scale-105">
              <CardHeader className="text-center border-b-2 border-gray-300 pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-[#016630] mb-4">
                  Plan Sur Mesure
                </CardTitle>
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  À définir
                </div>
                <p className="text-xl text-gray-600">Fonctionnalités personnalisées</p>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Fonctionnalités spécifiques
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Intégrations personnalisées
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Support dédié 24/7
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Formation approfondie
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#016630] font-bold mr-3">✓</span>
                    Consultation stratégique
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="border-t-2 border-gray-300 pt-6">
                <Link href="formulaire" className="w-full">
                  <Button className="w-full bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition py-3 text-lg">
                    Nous contacter
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      {/* Témoignages */}
      <div className="my-20 px-4 md:px-20 bg-gray-100 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#016630] mb-10">
          Ce que nos clients disent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white h-full shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-[#016630]">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-lg text-[#A8853B] font-semibold">
                      {testimonial.restaurant}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic text-base md:text-lg">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="my-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#016630] mb-10">
          Questions Fréquemment Posées
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full bg-white border-2 border-[#016630] rounded-lg p-4 md:p-6 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#016630] text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-[#016630] transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                  size={28}
                />
              </button>
              {openFAQ === index && (
                <div className="bg-gray-50 border-b-2 border-l-2 border-r-2 border-[#016630] p-4 md:p-6 rounded-b-lg">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
