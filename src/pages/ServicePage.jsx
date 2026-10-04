import { useState } from 'react';
import serviceHeroImg from '../assets/service-hero.jpg';
import serviceImg from '../assets/service-img.jpg';
import RequestModal from '../components/RequestModal';

const ServicePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    "Обсуждаем ваш проект, делаем предварительный расчет",
    "Проводим точные замеры, детальный план и финальная смета.",
    "Доставка оборудования, установка и подключение «под ключ» в удобное для вас время.",
    "Подписываем документы, планируем заправку и обслуживание."
  ];

  return (
    <div className="bg-white">

      {/* --- ГЛАВНЫЙ ЭКРАН (HERO) --- */}
      <section className="relative pt-16 md:pt-32 pb-16 md:pb-20 px-4 bg-[#e0f2fe] overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-1/4 h-full bg-[#0ea5e9] opacity-90 skew-x-12 transform origin-top-right"></div>
        <div className="hidden md:block absolute top-0 right-0 w-1/4 h-full bg-[#0a1e3f] opacity-90 skew-x-12 transform origin-top-right translate-x-16"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <img
            src={serviceHeroImg}
            alt="Сервис газовых систем"
            className="mx-auto mb-6 md:mb-10 w-full max-w-xs md:max-w-lg object-contain drop-shadow-[0_20px_40px_rgba(10,30,63,0.3)]"
          />

          <h1 className="text-3xl md:text-5xl font-black uppercase leading-[1.05] mb-6 text-[#0a1e3f]">
            Бесперебойная работа и <span className="text-[#0ea5e9]">безопасность</span> вашей газовой системы
          </h1>

          <p className="text-[#0a1e3f] text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Наша компания предлагает комплексный сервис, который избавит вас от лишних забот и обеспечит стабильную работу оборудования.
          </p>
        </div>
      </section>

      {/* --- БЛОК С УСЛУГАМИ И ФОРМОЙ --- */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto bg-white">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          <div>
            <h2 className="text-2xl md:text-4xl font-black mb-8 md:mb-10 text-[#0a1e3f] leading-tight uppercase">
              Полный комплекс услуг по обслуживанию автономных газовых систем:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1.5 w-3 h-3 bg-[#0ea5e9] flex-shrink-0"></div>
                  <p className="text-[#0a1e3f] leading-relaxed font-medium">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative border-2 border-[#0a1e3f] shadow-[8px_8px_0_0_#0ea5e9] md:shadow-[12px_12px_0_0_#0ea5e9]">
            <img
              src={serviceImg}
              alt="Обслуживание газового оборудования"
              className="w-full h-auto object-cover min-h-[300px] md:min-h-[500px]"
            />

            <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-white p-4 md:p-6 border-2 border-[#0a1e3f] flex flex-col gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-black text-[#0a1e3f] mb-1">Обсудим вашу задачу?</h3>
                <p className="text-[#0a1e3f] text-xs md:text-sm font-medium">Оставьте заявку, мы свяжемся с вами</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#0a1e3f] text-white px-6 py-3 font-black uppercase hover:bg-[#0ea5e9] transition-colors text-sm md:text-base"
              >
                ОБСУДИТЬ ЗАДАЧУ
              </button>
            </div>
          </div>

        </div>
      </section>

      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planTitle="Сервис и ремонт"
      />

    </div>
  );
};

export default ServicePage;