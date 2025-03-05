import { useState } from "react";
import Canta from "../assets/canta.png";
import Okul from "../assets/okul.png";
import Valiz from "../assets/Valiz.png";

const AboutSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: "canta",
      title: "ÇANTA",
      description: "Çeşitli marka ve modellerde bayan çantaları.",
      image: Canta,
    },
    {
      id: "valiz",
      title: "VALİZ",
      description: "Güvenilir markaların en son model valizleri.",
      image: Valiz,
    },
    {
      id: "okul",
      title: "OKUL ÇANTASI",
      description: "Her yaşa uygun farklı marka ve modellerde okul çantaları.",
      image: Okul,
    },
    {
      id: "tadilat",
      title: "TADİLAT",
      description: "Her türlü çanta ve valiz tamirat ve tadilatı.",
      image: "/tadilat.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Company Introduction */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <span className="text-blue-600 font-medium mb-4 block">
            Tecrübe ve Güvenilirlik
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            1989'dan beri
            <span className="text-blue-600">...</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Öykü Deri Ürünleri olarak siz değerli müşterilerimize 1989'dan
              beri en kaliteli ürünleri sunmaya gayret ediyoruz. Sizlerin
              görüşlerine değer vererek, en kaliteli kumaşlardan üretilmiş çanta
              ve valiz ürünlerimizi sizlere sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Öykü Deri olarak kalite ve müşteri memnuniyetini her şeyden önde
              tutuyoruz. 38 yılı aşkın tecrübenin vermiş olduğu güç ile geleceğe
              yön verecek tasarım ve ürünlerle siz değerli müşterilerimize en
              iyi şekilde hizmet vermek için çalışıyoruz.
            </p>
          </div>
        </div>

        {/* Products Showcase */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Ürünlerimiz</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En kaliteli malzemeler ve uzman işçilikle üretilen ürünlerimizi
              keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="absolute inset-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-blue-900/50 via-blue-800/40 to-transparent transition-opacity duration-300
                  ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div
                    className={`transform transition-transform duration-300
                    ${
                      hoveredProduct === product.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {product.title}
                    </h4>
                    <p className="text-blue-100 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
