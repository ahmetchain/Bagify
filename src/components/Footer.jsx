import { MapPin, Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">
              İletişim Bilgileri
            </h3>
            <a href="https://maps.app.goo.gl/jFLe82DDe2bMjTbh7" target="_blank" rel="noopener noreferrer">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="hover:text-blue-400 transition-colors">
                  Donanmacı, Ulvi Başman Sk. 35 E, 35510 Donanmacı
                  Mah./Karşıyaka/İzmir
                </p>
              </div>
            </a>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <a
                href="mailto:iletisim@oykuderi.com"
                className="hover:text-blue-400 transition-colors"
              >
                iletisim@oykuderi.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <a
                href="tel:+905542812871"
                className="hover:text-blue-400 transition-colors"
              >
                +90 554 281 28 71
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#services" onClick={scrollToServices} className="hover:text-blue-400 transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#about" onClick={scrollToAbout} className="hover:text-blue-400 transition-colors">
                  Hakkımızda
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Sosyal Medya
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/bagifytr/?igsh=MWxlODVqenVyYmU0bQ%3D%3D&utm_source=qr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} Bagify. Tüm Hakları Saklıdır.
            </p>
            <div className="flex items-center space-x-2 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Gizlilik Politikası
              </a>
              <span>•</span>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
