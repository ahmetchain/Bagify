import { Award, Clock, Wallet, Heart } from 'lucide-react';

const CompanyStats = () => {
  const stats = [
    {
      id: 'kalite',
      icon: <Award className="w-6 h-6" />,
      title: 'Kalite',
      value: '100%',
      description: 'Siz değerli müşterilerimiz için kaliteyi önplanda tutuyoruz.'
    },
    {
      id: 'tecrube',
      icon: <Clock className="w-6 h-6" />,
      title: 'Tecrübe',
      value: '38 Yıl',
      description: '38 yıl aşkın tecrübe ile hizmet vermekteyiz.'
    },
    {
      id: 'fiyat',
      icon: <Wallet className="w-6 h-6" />,
      title: 'Uygun Fiyat',
      value: '100%',
      description: 'Piyasadaki en uygun fiyatı sizler için sağlıyoruz.'
    },
    {
      id: 'memnuniyet',
      icon: <Heart className="w-6 h-6" />,
      title: 'Müşteri Memnuniyeti',
      value: '100%',
      description: 'Müşterilerimizin yüzlerinde bir gülümseme bırakmak her şeyden önemlidir.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Kalite ve Tecrübe
            <span className="text-blue-600 block mt-1">1989'dan Beri Sizlerle</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Firmamız Öykü Deri Ürünleri Ltd. Şti. olarak kurulduğumuz günden beri kalite ve 
            müşteri memnuniyetini her şeyden önde tutarak hizmet vermekteyiz.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="space-y-2">
                <div className="flex items-end gap-2">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <span className="text-lg font-medium text-gray-600 mb-1">
                    {stat.title}
                  </span>
                </div>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Öykü Deri Ürünleri
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Firmamızın merkezi İzmir Karşıyaka'da bulunmakta olup, kadın/erkek çantaları, 
                  gençler ve çocuklar için okul çantaları, çeşitli marka, model ve ebatlarda 
                  valizler ile hizmet vermekteyiz.
                </p>
                <p>
                  Değerli müşterilerimize daha iyi hizmet verebilmek ve müşteri memnuniyetini 
                  sağlayabilmek için ürün yelpazemizi yıllar içerisinde genişlettik.
                </p>
              </div>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
              <img
                src="/company-image.jpg"
                alt="Öykü Deri Mağaza"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats; 