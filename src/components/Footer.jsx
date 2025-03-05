import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Whatsapp
} from "lucide-react";

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p>
                Donanmacı, Ulvi Başman Sk. 35 E, 35510 Donanmacı
                Mah./Karşıyaka/İzmir
              </p>
            </div>
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
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  İletişim
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
