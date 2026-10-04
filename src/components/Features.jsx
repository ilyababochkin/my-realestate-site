const Features = () => {
  const items = [
    { title: "ПЛАТИТЕ ТОЛЬКО ЗА РЕЗУЛЬТАТ", desc: "Вы оплачиваете только выполненные работы", icon: "💰" },
    { title: "ГАЗГОЛЬДЕРЫ БЕЗ НАЦЕНКИ", desc: "Мы являемся дилерами крупнейших производителей", icon: "🏭" },
    { title: "Подключаем систему за 1 день", desc: "Уже в день монтажа ваш дом будет с газом", icon: "📅" },
  ];

  return (
    <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, i) => (
          <div key={i} className="border-l-8 border-[#0ea5e9] p-6 md:p-8 bg-[#f8fafc] hover:bg-white hover:shadow-2xl transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">{item.icon}</div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#0a1e3f] uppercase leading-tight">{item.title}</h3>
            <p className="text-[#0a1e3f] leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;