import { useState, useEffect } from "react";

import slider1 from "../assets/1.png";
import slider2 from "../assets/2.png";
import slider3 from "../assets/3.png";
import slider5 from "../assets/5.png";
import slider6 from "../assets/6.png";

import mobileSlider from "../assets/mobile.png";
import mobileSlider2 from "../assets/mobile2.png";
import mobileSlider3 from "../assets/mobile3.png";
import mobileSlider4 from "../assets/mobile4.png";
import mobileSlider5 from "../assets/mobile5.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slider1,
      mobileImage: mobileSlider,
      alt: "Leather bag repair",
    },
    {
      image: slider2,
      mobileImage: mobileSlider2,
      alt: "Luxury bag restoration",
    },
    {
      image: slider3,
      mobileImage: mobileSlider3,
      alt: "Professional bag care",
      title: "Eskimez Şıklık, Profesyonel Tamir",
      description:
        "Uzman tamir hizmetimizle sevdiğiniz aksesuarları uzun yıllar kullanmaya devam edin.",
    },
    {
      image: slider5,
      mobileImage: mobileSlider5,
      alt: "Professional bag care",
    },
    {
      image: slider6,
      mobileImage: mobileSlider4,
      alt: "Professional bag care",
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
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center md:object-[center_20%]"
              />
            </picture>
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
                    {slide.title && slide.description && (
                      <div className="bg-black  bg-opacity-70 p-4 md:p-8 rounded-lg">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-6">
                          {slide.title}
                        </h1>
                        <p className="text-md sm:text-xl md:text-2xl text-gray-200 mb-5 md:mb-8">
                          {slide.description}
                        </p>
                      </div>
                    )}
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
          <span className="text-white text-xs md:text-sm mt-2">
            Aşağı Kaydır
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
