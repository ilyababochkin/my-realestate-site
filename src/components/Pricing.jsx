import { useState } from 'react';
import RequestModal from './RequestModal';

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleRequestClick = (planTitle) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };

  const plans = [
    { 
      title: "ДЛЯ ДОМА ДО 120 М²", 
      price: "325 000 ₽", 
      features: ["Идеально для небольшого дома", "Запаса газа хватает на 12 месяцев"] 
    },
    { 
      title: "ДЛЯ ДОМА ДО 250 М²", 
      price: "425 000 ₽", 
      features: ["Оптимальный выбор для семьи", "Экономия до 90 000 ₽ в год"] 
    },
    { 
      title: "ДЛЯ ДОМА ДО 350 М²", 
      price: "475 000 ₽", 
      features: ["Для больших домов и коттеджей", "Большой запас газа"] 
    },
  ];

  return (
    <>
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 uppercase text-black">ВЫБЕРИТЕ ГОТОВУЮ СИСТЕМУ ГАЗИФИКАЦИИ</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className="bg-black text-white p-8 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <ul className="mb-6 space-y-2 text-gray-300 text-sm">
                  {plan.features.map((f, j) => <li key={j}>• {f}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <button 
                  onClick={() => handleRequestClick(plan.title)}
                  className="w-full bg-[#b19c7d] py-3 rounded font-bold hover:bg-[#9a8669] transition"
                >
                  ОСТАВИТЬ ЗАЯВКУ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Модальное окно */}
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planTitle={selectedPlan}
      />
    </>
  );
};

export default Pricing; 