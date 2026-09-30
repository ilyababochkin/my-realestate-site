import gasHolderImg from '../assets/gas-holder.png';
import bgMesh from '../assets/bg-mesh.png';

const Hero = () => {
  // Функция для плавного скролла к калькулятору
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-4 text-black">
            Автономная газификация частного дома
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ГАЗ ПОД КЛЮЧ ОТ 120 000 р — ВСЁ ВКЛЮЧЕНО!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3"><span className="text-xl">💰</span><span>без предоплаты</span></div>
            <div className="flex items-center gap-3"><span className="text-xl">⏱</span><span>установка за 1 день</span></div>
            <div className="flex items-center gap-3"><span className="text-xl">📄</span><span>полный пакет документов</span></div>
            <div className="flex items-center gap-3"><span className="text-xl">✅</span><span>гарантия 10 лет</span></div>
          </div>

          {/* ДОБАВЛЯЕМ ONCLICK ДЛЯ ПРОКРУТКИ */}
          <button 
            onClick={scrollToCalculator}
            className="bg-[#b19c7d] text-white px-8 py-4 rounded hover:bg-[#9a8669] transition font-bold uppercase tracking-wide"
          >
            Рассчитать стоимость за 1 минуту
          </button>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px] lg:h-[500px]">
          <div 
            className="absolute inset-0 z-0 opacity-40 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgMesh})` }}
          ></div>
          <img 
            src={gasHolderImg} 
            alt="Газгольдер" 
            className="relative z-10 w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;