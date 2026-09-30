const Features = () => {
  const items = [
    { title: "ПЛАТИТЕ ТОЛЬКО ЗА РЕЗУЛЬТАТ", desc: "Вы оплачиваете только выполненные работы", icon: "💰" },
    { title: "ГАЗГОЛЬДЕРЫ БЕЗ НАЦЕНКИ", desc: "Мы являемся дилерами крупнейших производителей", icon: "🏭" },
    { title: "Подключаем систему за 1 день", desc: "Уже в день монтажа ваш дом будет с газом", icon: "📅" },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <div key={i} className="border p-8 rounded-lg text-center shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;