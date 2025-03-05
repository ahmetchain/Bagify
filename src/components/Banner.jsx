import { useState, useEffect } from "react";

import slider1 from "../assets/1.png";
import slider2 from "../assets/2.png";
import slider3 from "../assets/3.png";
import slider4 from "../assets/4.png";
import slider5 from "../assets/5.png";
import slider6 from "../assets/6.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slider1,
    },
    {
      image: slider2,
      alt: "Luxury bag restoration",
      title: "Kaliteli Malzeme",
      description: "En kaliteli malzemeler ile orijinal görünüm",
    },
    {
      image: slider3,
      alt: "Professional bag care",
      title: "Garantili Hizmet",
      description: "Tüm tamir ve bakım işlemlerinde garanti",
    },
    {
      image: slider4,
      alt: "Professional bag care",
      title: "Garantili Hizmet",
      description: "Tüm tamir ve bakım işlemlerinde garanti",
    },
    {
      image: slider5,
      alt: "Professional bag care",
      title: "Garantili Hizmet",
      description: "Tüm tamir ve bakım işlemlerinde garanti",
    },
    {
      image: slider6,
      alt: "Professional bag care",
      title: "Garantili Hizmet",
      description: "Tüm tamir ve bakım işlemlerinde garanti",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[75vh] md:h-[80vh] lg:h-[88vh] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/80 z-10" />

      {/* Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform
              ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center md:object-[center_20%]"
            />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto h-full px-4">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform
                  ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
              >
                {index === currentSlide && (
                  <>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-5 md:mb-8">
                      {slide.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 md:bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 
                  ${
                    index === currentSlide
                      ? "w-6 md:w-8 bg-blue-600"
                      : "w-3 md:w-4 bg-white/50 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 z-20 hidden sm:block">
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-10 md:h-16 bg-white/30 rounded-full relative overflow-hidden">
            <div className="w-full h-1/2 bg-blue-600 absolute top-0 animate-scroll-down" />
          </div>
          <span className="text-white text-xs md:text-sm mt-2">Aşağı Kaydır</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
