import bgMesh from '../assets/bg-mesh.png';
// Вам понадобятся две новые картинки для этой страницы:
import serviceHeroImg from '../assets/service-hero.jpg'; // Дом с грузовиком и газгольдером
import serviceImg from '../assets/service-img.jpg'; // Трубы и вентили

const ServicePage = () => {
  return (
    <div className="bg-white">
      
      {/* --- ГЛАВНЫЙ ЭКРАН (HERO) --- */}
      <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center">
        {/* Фоновая сетка (если есть) */}
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgMesh})` }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Картинка с домом и газгольдером */}
          <img 
            src={serviceHeroImg} 
            alt="Сервис газовых систем" 
            className="mx-auto mb-10 w-full max-w-lg object-contain" 
          />
          
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-6 text-black">
            Бесперебойная работа и безопасность вашей газовой системы
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            наша компания предлагают комплексный сервис, который избавит вас от лишних забот и обеспечит стабильную работу оборудования.
          </p>
        </div>
      </section>

      {/* --- БЛОК С УСЛУГАМИ --- */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Левая колонка: Текст и список */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
              Полный комплекс услуг по обслуживанию автономных газовых систем:
            </h2>
            
            <ul className="space-y-6 text-gray-600 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-[#b19c7d] mt-1 text-xl">●</span> 
                <span>Обсуждаем ваш проект, выезжаем на объект для замеров</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#b19c7d] mt-1 text-xl">●</span> 
                <span>Доставка оборудования, монтаж и пусконаладочные работы</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#b19c7d] mt-1 text-xl">●</span> 
                <span>Заправка газгольдера и регулярное техническое обслуживание</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#b19c7d] mt-1 text-xl">●</span> 
                <span>Ремонт, замена комплектующих и аварийный выезд</span>
              </li>
            </ul>
          </div>

          {/* Правая колонка: Картинка с трубами */}
          <div className="flex justify-center">
            <img 
              src={serviceImg} 
              alt="Обслуживание газового оборудования" 
              className="w-full max-w-md rounded-2xl shadow-xl object-cover" 
            />
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default ServicePage;