"use client"

import * as React from "react"
import Image from "next/image"

export function CarouselPlugin() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const images = [
    { src: "/Group21.png", alt: "Menu 2", text: "Créez un menu digital moderne, simple et prêt en quelques minutes." },
    { src: "/Group22.png", alt: "Menu", text: "Réinventez votre restaurant en le digitalisant" },
    { src: "/Qr.png", alt: "QR Code", text: "Offrez à vos clients une expérience de menu 100 % digitale" },
    { src: "/Qrcode.jpeg", alt: "QR Code 2", text: "Toutes vos statistiques claire et centralisées" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div id="default-carousel" className="relative w-full h-[600px]">
      {/* Carousel wrapper */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "" : "hidden"
            } duration-700 ease-in-out w-full h-full relative flex items-center justify-center`}
          >
            {/* Background image with dark overlay */}
            <div className="absolute inset-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Text overlay */}
            {image.text && (
              <div className="absolute inset-0 flex items-center justify-center z-0 px-8 pt-20">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                  {image.text}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-0 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
