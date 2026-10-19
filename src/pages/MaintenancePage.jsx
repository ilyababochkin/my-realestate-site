import { useState } from 'react';
import RequestModal from '../components/RequestModal';
// Вы можете добавить сюда картинки, например:
// import maintenanceHeroImg from '../assets/maintenance-hero.jpg'; 

const MaintenancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Плановая проверка",
      desc: "Диагностика оборудования, проверка герметичности соединений, контроль давления и уровня газа.",
      icon: "🔍"
    },
    {
      title: "Заправка газгольдера",
      desc: "Оперативная доставка и заправка качественным сжиженным газом с соблюдением всех норм безопасности.",
      icon: "🚛"
    },
    {
      title: "Ремонт и замена",
      desc: "Устранение утечек, замена редукторов, шлангов, датчиков загазованности и другого оборудования.",
      icon: "🛠️"
    },
    {
      title: "Подготовка к зиме",
      desc: "Комплексная проверка системы перед отопительным сезоном для бесперебойной работы.",
      icon: "❄️"
    }
  ];

  return (
    <div className="bg-white">

      {/* --- ГЛАВНЫЙ ЭКРАН (HERO) --- */}
      <section className="relative pt-16 md:pt-32 pb-16 md:pb-20 px-4 bg-[#e0f2fe] overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-1/4 h-full bg-[#0ea5e9] opacity-90 skew-x-12 transform origin-top-right"></div>
        <div className="hidden md:block absolute top-0 right-0 w-1/4 h-full bg-[#0a1e3f] opacity-90 skew-x-12 transform origin-top-right translate-x-16"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Если добавите картинку, раскомментируйте */}
          {/* <img src={maintenanceHeroImg} alt="Обслуживание газгольдера" className="mx-auto mb-6 md:mb-10 w-full max-w-xs md:max-w-lg object-contain drop-shadow-[0_20px_40px_rgba(10,30,63,0.3)]" /> */}

          <h1 className="text-3xl md:text-5xl font-black uppercase leading-[1.05] mb-6 text-[#0a1e3f]">
            Профессиональное <span className="text-[#0ea5e9]">обслуживание</span> газгольдера
          </h1>

          <p className="text-[#0a1e3f] text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            Обеспечим бесперебойную и безопасную работу вашей газовой системы. Плановое ТО, аварийный выезд, заправка и ремонт.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-[#0a1e3f] text-white px-8 md:px-10 py-4 font-black uppercase tracking-wider text-sm md:text-lg hover:bg-[#0ea5e9] transition-colors shadow-[6px_6px_0_0_#0ea5e9] md:shadow-[8px_8px_0_0_#0ea5e9]"
          >
            Вызвать специалиста
          </button>
        </div>
      </section>

      {/* --- УСЛУГИ --- */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto bg-white">
        <h2 className="text-2xl md:text-4xl font-black mb-10 text-[#0a1e3f] uppercase text-center">
          Что входит в обслуживание
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border-l-8 border-[#0ea5e9] p-6 md:p-8 bg-[#f8fafc] hover:bg-white hover:shadow-2xl transition-all duration-300 flex items-start gap-4">
              <div className="text-4xl md:text-5xl flex-shrink-0">{service.icon}</div>
              <div>
                <h3 className="font-black text-lg md:text-xl mb-2 text-[#0a1e3f] uppercase leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#0a1e3f] leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ПРИЗЫВ К ДЕЙСТВИЮ (CTA) --- */}
      <section className="py-16 md:py-20 px-4 bg-[#0a1e3f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase">
            Нужна помощь с газгольдером?
          </h2>
          <p className="text-base md:text-lg font-medium mb-8 text-gray-300">
            Оставьте заявку, и наш инженер свяжется с вами в течение 20 минут для консультации.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0ea5e9] text-white px-8 md:px-12 py-4 font-black uppercase tracking-wider text-sm md:text-lg hover:bg-white hover:text-[#0a1e3f] transition-colors"
          >
            Оставить заявку
          </button>
        </div>
      </section>

      {/* МОДАЛЬНОЕ ОКНО */}
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planTitle="Обслуживание газгольдера"
      />

    </div>
  );
};

export default MaintenancePage;