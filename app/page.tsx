import React from 'react'
import Image from 'next/image'
import Nav from './components/Nav'
import { CarouselPlugin } from './components/Caroussel'
import menu from "@/public/menu.jpg"
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function page() {
  return (
    <>
      <Nav />
      <div className="pt-24 flex justify-center">
        <CarouselPlugin />
      </div>
      <div className="flex justify-center items-center space-x-20 my-20">
        <div className="m-10 p-10 w-1/2 ">
          <h1 className='text-4xl font-bold text-[#016630]'>C'est quoi Menu en ligne ?</h1>
          <p className='mt-6 text-lg'>
            Menu en ligne est une application web qui permet aux restaurants de
            créer et gérer des menus numériques accessibles via des codes QR.
            Les clients peuvent scanner le code QR avec leur smartphone pour
            consulter le menu, passer des commandes et effectuer des paiements
            en ligne. Cela améliore l'expérience client, réduit les coûts
            d'impression et facilite la mise à jour des menus.
          </p>
          <Link href="formulaire">
            <Button className="mt-6 bg-[#016630] text-white rounded-full cursor-pointer">
              Essayez gratuitement
            </Button>
          </Link>
        </div>
        <div>
          <Image src={menu} alt="Le logo"  className="rounded-xl" />
        </div>
      </div>
    </>
  )
}

export default page