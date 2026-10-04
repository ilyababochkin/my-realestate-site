import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { question: "Почему готовое решение выгодно?", answer: "Готовое решение позволяет сэкономить до 30% бюджета за счёт прямых поставок оборудования и стандартизированного монтажа." },
    { question: "Какой нужен газгольдер для моего дома?", answer: "Готовая система включает газгольдер, котёл, автоматику и монтаж. Установка занимает 8 часов, гарантия 10 лет." },
    { question: "Что такое автономная газификация?", answer: "Это установка независимой газовой системы на вашем участке. Работает без центральной магистрали." },
    { question: "Безопасна ли установка автономной газификации?", answer: "Да. Газгольдеры сертифицированы и оснащены многоуровневой системой защиты." },
    { question: "Нужно ли разрешение на установку газгольдера?", answer: "Для частного участка разрешение на строительство не требуется. Достаточно соблюдать технические нормы." },
  ];

  return (
    <section className="py-16 md:py-20 px-4 max-w-4xl mx-auto bg-[#e0f2fe]">
      <h2 className="text-2xl md:text-4xl font-black mb-8 md:mb-10 text-[#0a1e3f] uppercase text-center">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className={`bg-white border-2 transition-colors ${openIndex === i ? 'border-[#0ea5e9]' : 'border-[#0a1e3f]'}`}>
            <button className="flex justify-between items-center w-full text-left font-black text-base md:text-lg p-4 md:p-5" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <span className={`pr-4 ${openIndex === i ? 'text-[#0ea5e9]' : 'text-[#0a1e3f]'}`}>{faq.question}</span>
              <span className={`flex-shrink-0 ${openIndex === i ? 'text-[#0ea5e9]' : 'text-[#0a1e3f]'}`}>{openIndex === i ? <FiMinus size={22} /> : <FiPlus size={22} />}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-[#0a1e3f] font-medium leading-relaxed px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;