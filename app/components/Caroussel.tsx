"use client"

import * as React from "react"
import Image from "next/image"

export function CarouselPlugin() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const images = [
    { src: "/menu2.png", alt: "Menu 2", text: "Créez un menu digital moderne, simple et prêt en quelques minutes." },
    { src: "/menu.jpg", alt: "Menu", text: "Réinventez votre restaurant en le digitalisant" },
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
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Text overlay */}
            {image.text && (
              <div className="absolute inset-0 flex items-center justify-center z-10 px-8">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                  {image.text}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slider controls - Previous */}
      {/* <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-5 h-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button> */}

      {/* Slider controls - Next */}
      {/* <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-5 h-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  )
}
