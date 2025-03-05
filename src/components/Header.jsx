import logo from "../assets/logo.png";
import { Menu, Phone, Clock, MapPin, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+905542812871">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-blue-300" />
                  <span className="text-xs sm:text-sm">+90 554 281 28 71</span>
                </div>
              </a>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-blue-300" />
                <span className="text-xs sm:text-sm">Pzt-Pazr: 09:00-21:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-300" />
                <span className="text-xs sm:text-sm">İzmir, Türkiye</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-2  md:px-4 h-20">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <div className="h-[120px] md:h-[200px] flex items-center">
              <img
                src={logo}
                alt="Bagify Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex items-center space-x-4">
            <div className="  md:text-lg font-medium text-blue-900 italic  md:block">
              "Çantanız Bizimle Güvende"
            </div>
            <a href="https://wa.me/+905542812871" target="_blank" rel="noreferrer">
              <button className="hidden md:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all transform ">
                <MessageCircle size={20} />
                <span>Bizimle İletişime Geçin</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
