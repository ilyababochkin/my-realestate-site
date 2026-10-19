import Hero from '../components/Hero';
import Features from '../components/Features';
import Calculator from '../components/Calculator';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Calculator />
      <Pricing />
      
      {/* БАННЕР С ПЕРЕХОДОМ НА САЙТ ОБСЛУЖИВАНИЯ */}
      <section className="py-12 px-4 bg-[#0a1e3f] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase">
            Уже установили газгольдер?
          </h2>
          <p className="text-gray-300 font-medium mb-8">
            Переходите в наш сервисный центр для планового ТО, заправки или ремонта оборудования.
          </p>
          <a 
            href="https://gas-maintenance.vercel.app/" // Замените на ваш URL
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#0ea5e9] text-white px-8 py-4 font-black uppercase tracking-wider hover:bg-white hover:text-[#0a1e3f] transition-colors shadow-[6px_6px_0_0_#fff]"
          >
            Перейти в сервисный центр ↗
          </a>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default HomePage;