const Pricing = () => {
  const plans = [
    { title: "ДЛЯ ДОМА ДО 120 М²", price: "325 000 ₽", features: ["Идеально для небольшого дома", "Запаса газа хватает на 12 месяцев"] },
    { title: "ДЛЯ ДОМА ДО 250 М²", price: "425 000 ₽", features: ["Оптимальный выбор для семьи", "Экономия до 90 000 ₽ в год"] },
    { title: "ДЛЯ ДОМА ДО 350 М²", price: "475 000 ₽", features: ["Для больших домов и коттеджей", "Большой запас газа"] },
  ];

  return (
    <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto bg-white">
      <h2 className="text-2xl md:text-4xl font-black mb-8 md:mb-12 uppercase text-[#0a1e3f] text-center">
        ВЫБЕРИТЕ ГОТОВУЮ СИСТЕМУ
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="group p-6 md:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer bg-white text-[#0a1e3f] border-2 border-[#0a1e3f] hover:bg-[#0a1e3f] hover:text-white hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#0ea5e9]"
          >
            <div>
              <h3 className="text-lg md:text-xl font-black mb-4 uppercase text-[#0ea5e9]">
                {plan.title}
              </h3>
              
              <ul className="mb-6 space-y-2 text-sm font-medium text-[#0a1e3f] group-hover:text-white transition-colors">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] font-black">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="text-2xl md:text-3xl font-black mb-6 text-[#0a1e3f] group-hover:text-white transition-colors">
                {plan.price}
              </div>
              
              <button className="w-full py-3 md:py-4 font-black uppercase transition-colors bg-[#0a1e3f] text-white group-hover:bg-[#0ea5e9]">
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;