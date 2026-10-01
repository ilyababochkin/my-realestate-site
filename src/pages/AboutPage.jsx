import bgMesh from '../assets/bg-mesh.png';
// Импортируем фотографии (пути могут отличаться, если вы положили их в другую папку)
import about1 from '../assets/about-1.jpeg';
import about2 from '../assets/about-2.jpeg';
import about3 from '../assets/about-3.jpeg';

const AboutPage = () => {
  return (
    <div className="bg-white">
      
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative pt-32 pb-16 px-4 text-center">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgMesh})` }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-6 text-black">
            О компании «Автономные Технологии»
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Мы занимаемся автономной газификацией частных домов в Москве и области с 2015 года. 
            Наша цель — сделать жизнь за городом комфортной и доступной.
          </p>
        </div>
      </section>

      {/* --- БЛОК С ПРЕИМУЩЕСТВАМИ --- */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="border border-gray-200 p-8 rounded-lg text-center hover:shadow-md transition">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-bold text-lg mb-2">10 лет опыта</h3>
            <p className="text-gray-600 text-sm">
              За это время мы установили более 1500 газгольдеров и знаем все тонкости монтажа.
            </p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg text-center hover:shadow-md transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-bold text-lg mb-2">Честные цены</h3>
            <p className="text-gray-600 text-sm">
              Мы работаем напрямую с производителями, поэтому предлагаем оборудование без наценок.
            </p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg text-center hover:shadow-md transition">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-lg mb-2">Гарантия 10 лет</h3>
            <p className="text-gray-600 text-sm">
              Мы уверены в качестве своей работы и предоставляем длительную гарантию на все услуги.
            </p>
          </div>

        </div>
      </section>

      {/* --- ГАЛЕРЕЯ С ФОТОГРАФИЯМИ --- */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Наша работа в лицах</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img src={about1} alt="Офис компании" className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <p className="text-center text-gray-600 text-sm">Монтаж газгольдера</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img src={about2} alt="Процесс монтажа" className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <p className="text-center text-gray-600 text-sm">Доставка газгольдера</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img src={about3} alt="Готовый объект" className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <p className="text-center text-gray-600 text-sm">Дом с автономным газом</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- БЛОК С МИССИЕЙ --- */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-black">Наша миссия</h2>
        <p className="text-gray-600 leading-relaxed">
          Мы стремимся к тому, чтобы каждый владелец частного дома мог пользоваться всеми благами 
          цивилизации, не завися от центральных сетей. Автономная газификация — это не просто 
          оборудование, это ваш комфорт и независимость на долгие годы.
        </p>
      </section>

    </div>
  );
};

export default AboutPage;