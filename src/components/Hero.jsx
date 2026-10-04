import gasHolderImg from '../assets/gas-holder.png';

const Hero = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-[#e0f2fe] text-[#0a1e3f] overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-[#0ea5e9] opacity-90 skew-x-12 transform origin-top-right"></div>
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-[#0a1e3f] opacity-90 skew-x-12 transform origin-top-right translate-x-16"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[1.05] mb-6 text-[#0a1e3f]">
            Автономная<br/>
            <span className="text-[#0ea5e9]">газификация</span><br/>
            частного дома
          </h1>
          <p className="text-lg md:text-xl text-[#0a1e3f] mb-8 font-bold">
            ГАЗ ПОД КЛЮЧ ОТ 120 000 ₽ — ВСЁ ВКЛЮЧЕНО!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-[#0a1e3f] font-semibold text-left">
            <div className="flex items-center gap-3"><span className="text-[#0ea5e9] text-2xl font-black">✓</span><span>без предоплаты</span></div>
            <div className="flex items-center gap-3"><span className="text-[#0ea5e9] text-2xl font-black">✓</span><span>установка за 1 день</span></div>
            <div className="flex items-center gap-3"><span className="text-[#0ea5e9] text-2xl font-black">✓</span><span>полный пакет документов</span></div>
            <div className="flex items-center gap-3"><span className="text-[#0ea5e9] text-2xl font-black">✓</span><span>гарантия 10 лет</span></div>
          </div>

          <button
            onClick={scrollToCalculator}
            className="w-full sm:w-auto bg-[#0ea5e9] text-white px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-wider text-base md:text-lg hover:bg-[#0a1e3f] transition-colors shadow-[8px_8px_0_0_#0a1e3f]"
          >
            Рассчитать стоимость
          </button>
        </div>

        <div className="relative flex justify-center items-center h-[300px] sm:h-[400px] lg:h-[500px]">
          <img
            src={gasHolderImg}
            alt="Газгольдер"
            className="relative z-10 w-full max-w-md lg:max-w-lg object-contain drop-shadow-[0_20px_40px_rgba(10,30,63,0.4)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;