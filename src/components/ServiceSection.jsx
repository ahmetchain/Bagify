import { useState, useRef } from "react";
import { Briefcase, Scissors, Box, CircleDot } from "lucide-react";

import Before from "../assets/1.jpg";
import After from "../assets/2.jpg";

const ServiceSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e);

    const handleMouseMove = (event) => {
      updateSliderPosition(event);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    updateSliderPosition(touch);

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      updateSliderPosition(touch);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    // Eğer sürükleme yapılmıyorsa, fare üzerine geldiğinde slider'ı hareket ettir
    if (!isDragging) {
      updateSliderPosition(e);
    }
  };

  const updateSliderPosition = (event) => {
    const container = sliderRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clientX = event.clientX || event.pageX;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  const services = [
    {
      id: "deri",
      icon: <Briefcase className="w-6 h-6" />,
      title: "Deri Tamir",
      description: "Profesyonel deri bakım ve onarım hizmetleri",
    },
    {
      id: "fermuar",
      icon: <Scissors className="w-6 h-6" />,
      title: "Fermuar Değişimi",
      description: "Orijinal fermuar değişimi ve tamiri",
    },
    {
      id: "valiz",
      icon: <Box className="w-6 h-6" />,
      title: "Valiz Tamiri",
      description: "Her marka valiz için profesyonel tamir",
    },
    {
      id: "tekerlek",
      icon: <CircleDot className="w-6 h-6" />,
      title: "Tekerlek Değişimi",
      description: "Valiz ve çanta tekerleklerinin değişimi",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Side - Service Showcase */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Profesyonel Çanta ve Valiz
              <span className="text-blue-600 block mt-1">
                Tamir Hizmetlerimiz
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/+905542812871"
              target="_blank"
              rel="noreferrer"
            >
              <button className="w-full mt-8 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Hemen Başlayalım
              </button>
            </a>
          </div>

          {/* Right Side - Before/After Slider */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-[80%] aspect-square">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600 rounded-full" />
              <div
                ref={sliderRef}
                className="absolute inset-0 cursor-ew-resize overflow-visible select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
              >
                <div className="absolute inset-0 select-none pointer-events-none">
                  <img
                    src={After}
                    alt="Tamir Sonrası"
                    className="w-full h-full object-cover select-none"
                    draggable="false"
                  />
                </div>
                <div
                  className="absolute inset-0 select-none pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <img
                    src={Before}
                    alt="Tamir Öncesi"
                    className="w-full h-full object-cover select-none"
                    draggable="false"
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-yellow-400 cursor-ew-resize"
                  style={{
                    left: `${sliderPosition}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
