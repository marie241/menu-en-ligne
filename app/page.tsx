import React from "react";
import Image from "next/image";
import Nav from "./components/Nav";
import { CarouselPlugin } from "./components/Caroussel";
import menu from "@/public/menu.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HandPlatter } from 'lucide-react';
import { ChartPie } from 'lucide-react';
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
                  <BookOpenCheck className="text-white" size={40} />
                </CardAction>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
