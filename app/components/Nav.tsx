"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import menu from "@/public/menu.jpg";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "A propos", href: "#Apropos" },
    { label: "Fonctionnement", href: "#Fonctionnement" },
    { label: "Nos Tarifs", href: "#Tarifs" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <>
      <nav className="w-full fixed top-0 px-6 md:px-20 bg-[#A8853B] shadow z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="h-16 w-24 flex items-center">
            <Link href="#">
              <Image src={menu} alt="Le logo" height={50} className="rounded-xl" />
            </Link>
          </div>

          {/* Menu pour desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="font-semibold text-white hover:text-gray-900"
                scroll={false}
              >
                {item.label}
              </Link>
            ))}

            {/* Boutons pour desktop */}
            <div className="flex space-x-4">
              <Link href="formulaire">
                <Button className="bg-[#016630] text-white rounded-full">
                  Démo gratuite
                </Button>
              </Link>
            </div>
          </div>

          {/* Menu mobile (menu burger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block font-semibold text-white hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}

            {/* Boutons dans le menu mobile */}
            <div className="space-y-2 m-4">
              <Link href="formulaire">
                <Button className="bg-[#016630] text-white w-full">
                  Démo gratuite
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
