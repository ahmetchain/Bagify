import logo from "../assets/logo.png";
import { Menu, Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b relative">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+905542812871" className="hover:text-blue-300 transition-colors">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-blue-300" />
                  <span>+90 554 281 28 71</span>
                </div>
              </a>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-blue-300" />
                <span>Pzt-Pazr: 09:00-21:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-300" />
                <span>İzmir, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex justify-center">
            <a href="tel:+905542812871" className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
              <Phone size={16} className="text-blue-300" />
              <span className="text-sm">+90 554 281 28 71</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-[120px] md:h-[150px] lg:h-[200px] flex items-center">
              <img
                src={logo}
                alt="Bagify Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation & Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-lg font-medium text-blue-900 italic">
              "Çantanız Bizimle Güvende"
            </div>
            <a 
              href="https://wa.me/+905542812871" 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Bizimle İletişime Geçin</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex items-center justify-center text-sm space-x-4">
              <Clock size={16} className="text-blue-600" />
              <span className="text-gray-600">Pzt-Pazr: 09:00-21:00</span>
            </div>
            <div className="flex items-center justify-center text-sm space-x-4">
              <MapPin size={16} className="text-blue-600" />
              <span className="text-gray-600">İzmir, Türkiye</span>
            </div>
            <div className="text-center text-blue-900 italic font-medium">
              "Çantanız Bizimle Güvende"
            </div>
            <a 
              href="https://wa.me/+905542812871" 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Bizimle İletişime Geçin</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
