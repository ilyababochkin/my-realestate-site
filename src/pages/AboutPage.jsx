import about1 from '../assets/about-1.jpeg';
import about2 from '../assets/about-2.jpeg';
import about3 from '../assets/about-3.jpeg';
import Gallery from '../components/Gallery';

const AboutPage = () => {
  return (
    <div className="bg-white">

      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative pt-16 md:pt-32 pb-16 md:pb-20 px-4 bg-[#e0f2fe] overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-1/4 h-full bg-[#0ea5e9] opacity-90 skew-x-12 transform origin-top-right"></div>
        <div className="hidden md:block absolute top-0 right-0 w-1/4 h-full bg-[#0a1e3f] opacity-90 skew-x-12 transform origin-top-right translate-x-16"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black uppercase leading-[1.05] mb-6 text-[#0a1e3f]">
            О компании <span className="text-[#0ea5e9]">«Автономные Технологии»</span>
          </h1>
          <p className="text-[#0a1e3f] text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Мы занимаемся автономной газификацией частных домов в Москве и области с 2015 года.
            Наша цель — сделать жизнь за городом комфортной и доступной.
          </p>
        </div>
      </section>

      {/* --- БЛОК С ПРЕИМУЩЕСТВАМИ --- */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          <div className="border-l-8 border-[#0ea5e9] p-6 md:p-8 bg-[#f8fafc] hover:bg-white hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🏆</div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#0a1e3f] uppercase leading-tight">10 лет опыта</h3>
            <p className="text-[#0a1e3f] leading-relaxed font-medium">
              За это время мы установили более 1500 газгольдеров и знаем все тонкости монтажа.
            </p>
          </div>

          <div className="border-l-8 border-[#0ea5e9] p-6 md:p-8 bg-[#f8fafc] hover:bg-white hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🤝</div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#0a1e3f] uppercase leading-tight">Честные цены</h3>
            <p className="text-[#0a1e3f] leading-relaxed font-medium">
              Мы работаем напрямую с производителями, поэтому предлагаем оборудование без наценок.
            </p>
          </div>

          <div className="border-l-8 border-[#0ea5e9] p-6 md:p-8 bg-[#f8fafc] hover:bg-white hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🛡️</div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#0a1e3f] uppercase leading-tight">Гарантия 10 лет</h3>
            <p className="text-[#0a1e3f] leading-relaxed font-medium">
              Мы уверены в качестве своей работы и предоставляем длительную гарантию на все услуги.
            </p>
          </div>

        </div>
      </section>

{/* --- ГАЛЕРЕЯ С ФОТОГРАФИЯМИ --- */}
<section className="py-16 md:py-20 px-4 max-w-6xl mx-auto bg-[#e0f2fe]">
  <h2 className="text-2xl md:text-4xl font-black mb-8 md:mb-12 text-[#0a1e3f] uppercase text-center">
    Наша работа в лицах
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="border-2 border-[#0a1e3f] shadow-[8px_8px_0_0_#0ea5e9] hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
      <img src={about1} alt="Офис компании" className="w-full h-64 object-cover" />
      <div className="p-4 bg-white border-t-2 border-[#0a1e3f]">
        <p className="text-center text-[#0a1e3f] text-sm font-bold uppercase">Наш дружный коллектив</p>
      </div>
    </div>
    <div className="border-2 border-[#0a1e3f] shadow-[8px_8px_0_0_#0ea5e9] hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
      <img src={about2} alt="Процесс монтажа" className="w-full h-64 object-cover" />
      <div className="p-4 bg-white border-t-2 border-[#0a1e3f]">
        <p className="text-center text-[#0a1e3f] text-sm font-bold uppercase">Монтаж газгольдера</p>
      </div>
    </div>
    <div className="border-2 border-[#0a1e3f] shadow-[8px_8px_0_0_#0ea5e9] hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
      <img src={about3} alt="Готовый объект" className="w-full h-64 object-cover" />
      <div className="p-4 bg-white border-t-2 border-[#0a1e3f]">
        <p className="text-center text-[#0a1e3f] text-sm font-bold uppercase">Дом с автономным газом</p>
      </div>
    </div>
  </div>
</section>

{/* --- ГАЛЕРЕЯ РАБОТ (АЛЬБОМ) --- */}
<Gallery />

      {/* --- БЛОК С МИССИЕЙ --- */}
      <section className="py-16 md:py-20 px-4 max-w-4xl mx-auto text-center bg-white">
        <h2 className="text-2xl md:text-4xl font-black mb-8 text-[#0a1e3f] uppercase">
          Наша миссия
        </h2>
        <p className="text-[#0a1e3f] text-base md:text-lg leading-relaxed font-medium">
          Мы стремимся к тому, чтобы каждый владелец частного дома мог пользоваться всеми благами
          цивилизации, не завися от центральных сетей. Автономная газификация — это не просто
          оборудование, это ваш комфорт и независимость на долгие годы.
        </p>
      </section>

    </div>
  );
};

export default AboutPage;