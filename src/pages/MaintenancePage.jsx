import { useState } from 'react';
import { FaCheck, FaWrench, FaTruck, FaSnowflake, FaShieldAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const MaintenancePage = () => {
  // Состояния для калькулятора
  const [volume, setVolume] = useState('1500');
  const [serviceType, setServiceType] = useState('to'); // 'to' | 'refuel' | 'emergency'
  
  // Состояния для формы
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 (');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Расчёт цены (примерные значения)
  const calculatePrice = () => {
    const v = parseInt(volume);
    if (serviceType === 'to') return v * 1.5; // ТО — 1.5 руб/литр объёма
    if (serviceType === 'refuel') return v * 25; // Заправка — 25 руб/литр
    if (serviceType === 'emergency') return 5000; // Аварийный выезд — фикс
    return 0;
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.startsWith('7')) input = input.substring(1);
    let formatted = '+7 (';
    if (input.length > 0) formatted += input.substring(0, 3);
    if (input.length >= 4) formatted += ') ' + input.substring(3, 6);
    if (input.length >= 7) formatted += '-' + input.substring(6, 8);
    if (input.length >= 9) formatted += '-' + input.substring(8, 10);
    setPhone(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || phone.length < 18 || !isAgreed) return;
    setIsSending(true);

    const templateParams = {
      name,
      phone,
      area: `Обслуживание газгольдера (${volume} л), тип: ${serviceType === 'to' ? 'ТО' : serviceType === 'refuel' ? 'Заправка' : 'Аварийный выезд'})`,
      manufacturer: 'Не указан',
      distance: 'Не указана',
      installTime: 'Не указано',
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert('Ошибка отправки. Попробуйте еще раз.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white">

      {/* --- ГЛАВНЫЙ ЭКРАН --- */}
      <section className="relative pt-16 md:pt-32 pb-16 md:pb-24 px-4 bg-[#0a1e3f] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0ea5e9] opacity-20 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-[#0ea5e9] text-white font-black uppercase tracking-wider text-xs md:text-sm px-3 py-1 mb-4">
              Сервисный центр
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase leading-[1.05] mb-6">
              Обслуживание <span className="text-[#0ea5e9]">газгольдера</span> под ключ
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 font-medium max-w-lg">
              Плановое ТО, заправка, ремонт и аварийный выезд. Работаем по Москве и области. Гарантия на все работы — 1 год.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-bold">
              <span className="flex items-center gap-2"><FaCheck className="text-[#0ea5e9]" /> Выезд за 24 часа</span>
              <span className="flex items-center gap-2"><FaCheck className="text-[#0ea5e9]" /> Официальный договор</span>
              <span className="flex items-center gap-2"><FaCheck className="text-[#0ea5e9]" /> Свои специалисты</span>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            {/* Здесь можно добавить картинку, например, сервисной машины или мастера */}
            <div className="w-64 h-64 bg-[#0ea5e9]/20 rounded-full flex items-center justify-center border-4 border-[#0ea5e9]">
              <FaWrench size={100} className="text-[#0ea5e9]" />
            </div>
          </div>
        </div>
      </section>

      {/* --- КАЛЬКУЛЯТОР СТОИМОСТИ --- */}
      <section className="py-16 md:py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-8 text-[#0a1e3f] uppercase text-center">
          Рассчитайте стоимость обслуживания
        </h2>
        
        <div className="bg-white border-2 border-[#0a1e3f] shadow-[8px_8px_0_0_#0ea5e9] p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Выбор объёма */}
            <div>
              <label className="block font-black text-lg mb-2 uppercase text-[#0a1e3f]">
                Объём газгольдера (л)
              </label>
              <select 
                value={volume} 
                onChange={(e) => setVolume(e.target.value)}
                className="w-full border-2 border-[#0a1e3f] p-3 font-bold text-lg focus:outline-none focus:border-[#0ea5e9]"
              >
                <option value="1000">1 000 л</option>
                <option value="1500">1 500 л</option>
                <option value="2000">2 000 л</option>
                <option value="2700">2 700 л</option>
                <option value="4000">4 000 л</option>
                <option value="5000">5 000 л</option>
              </select>
            </div>

            {/* Выбор услуги */}
            <div>
              <label className="block font-black text-lg mb-2 uppercase text-[#0a1e3f]">
                Тип услуги
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="service" value="to" checked={serviceType === 'to'} onChange={() => setServiceType('to')} className="w-5 h-5 accent-[#0ea5e9]" />
                  <span className="font-medium">Плановое ТО</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="service" value="refuel" checked={serviceType === 'refuel'} onChange={() => setServiceType('refuel')} className="w-5 h-5 accent-[#0ea5e9]" />
                  <span className="font-medium">Заправка газом</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="service" value="emergency" checked={serviceType === 'emergency'} onChange={() => setServiceType('emergency')} className="w-5 h-5 accent-[#0ea5e9]" />
                  <span className="font-medium">Аварийный выезд</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm text-gray-600 uppercase font-bold mb-1">Примерная стоимость:</p>
              <p className="text-4xl font-black text-[#0a1e3f]">{calculatePrice().toLocaleString('ru-RU')} ₽</p>
            </div>
            <button 
              onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto bg-[#0ea5e9] text-white px-8 py-4 font-black uppercase tracking-wider hover:bg-[#0a1e3f] transition-colors"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* --- НАШИ УСЛУГИ --- */}
      <section className="py-16 md:py-20 px-4 bg-[#e0f2fe]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-10 text-[#0a1e3f] uppercase text-center">
            Что мы делаем
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-b-4 border-[#0ea5e9] shadow-sm hover:shadow-xl transition">
              <FaWrench className="text-4xl text-[#0ea5e9] mb-4" />
              <h3 className="font-black text-lg mb-2 text-[#0a1e3f] uppercase">Плановое ТО</h3>
              <p className="text-gray-600 text-sm">Проверка герметичности, редукторов, датчиков. Подготовка к отопительному сезону.</p>
            </div>
            <div className="bg-white p-6 border-b-4 border-[#0ea5e9] shadow-sm hover:shadow-xl transition">
              <FaTruck className="text-4xl text-[#0ea5e9] mb-4" />
              <h3 className="font-black text-lg mb-2 text-[#0a1e3f] uppercase">Заправка</h3>
              <p className="text-gray-600 text-sm">Доставка качественного газа. Строгий контроль объёма и безопасности.</p>
            </div>
            <div className="bg-white p-6 border-b-4 border-[#0ea5e9] shadow-sm hover:shadow-xl transition">
              <FaShieldAlt className="text-4xl text-[#0ea5e9] mb-4" />
              <h3 className="font-black text-lg mb-2 text-[#0a1e3f] uppercase">Аварийный выезд</h3>
              <p className="text-gray-600 text-sm">Оперативное устранение утечек и неисправностей в любое время суток.</p>
            </div>
            <div className="bg-white p-6 border-b-4 border-[#0ea5e9] shadow-sm hover:shadow-xl transition">
              <FaSnowflake className="text-4xl text-[#0ea5e9] mb-4" />
              <h3 className="font-black text-lg mb-2 text-[#0a1e3f] uppercase">Подготовка к зиме</h3>
              <p className="text-gray-600 text-sm">Комплексная диагностика системы перед холодами.</p>
            </div>
            <div className="bg-white p-6 border-b-4 border-[#0ea5e9] shadow-sm hover:shadow-xl transition">
              <FaWrench className="text-4xl text-[#0ea5e9] mb-4" />
              <h3 className="font-black text-lg mb-2 text-[#0a1e3f] uppercase">Ремонт</h3>
              <p className="text-gray-600 text-sm">Замена редукторов, шлангов, арматуры. Работаем с любыми брендами.</p>
            </div>
            <div className="bg-white p-6 border-b-4 border-[#0ea5e9] shadow-sm hover:shadow-xl transition">
              <FaShieldAlt className="text-4xl text-[#0ea5e9] mb-4" />
              <h3 className="font-black text-lg mb-2 text-[#0a1e3f] uppercase">Документы</h3>
              <p className="text-gray-600 text-sm">Оформление актов, договоров на обслуживание и гарантийных талонов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ФОРМА ЗАЯВКИ --- */}
      <section id="form-section" className="py-16 md:py-20 px-4 max-w-3xl mx-auto">
        <div className="bg-white border-2 border-[#0a1e3f] shadow-[12px_12px_0_0_#0ea5e9] p-6 md:p-10">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="text-5xl text-[#0ea5e9] mb-4">✓</div>
              <h3 className="text-2xl font-black mb-2 text-[#0a1e3f]">Заявка принята!</h3>
              <p className="text-gray-600">Мы свяжемся с вами в течение 15 минут.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-black mb-2 text-[#0a1e3f] uppercase text-center">
                Вызвать специалиста
              </h2>
              <p className="text-center text-gray-500 mb-8 font-medium">Оставьте заявку, и мы перезвоним для уточнения деталей</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-black text-sm mb-2 uppercase text-[#0a1e3f]">Ваше имя</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full border-b-4 border-[#0a1e3f]/20 py-2 text-lg font-bold focus:outline-none focus:border-[#0ea5e9] bg-transparent text-[#0a1e3f]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block font-black text-sm mb-2 uppercase text-[#0a1e3f]">Ваш телефон</label>
                  <div className="flex items-center gap-2 border-b-4 border-[#0a1e3f]/20 py-2 focus-within:border-[#0ea5e9]">
                    <span className="text-xl">🇷🇺</span>
                    <input 
                      type="tel" 
                      value={phone} 
                      onChange={handlePhoneChange} 
                      className="w-full text-lg font-bold focus:outline-none bg-transparent text-[#0a1e3f]" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div onClick={() => setIsAgreed(!isAgreed)} className={`mt-1 w-5 h-5 border-2 flex-shrink-0 cursor-pointer flex items-center justify-center transition-colors ${isAgreed ? 'bg-[#0ea5e9] border-[#0ea5e9]' : 'border-[#0a1e3f]'}`}>
                    {isAgreed && <FaCheck size={10} className="text-white" />}
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-tight">НАЖИМАЯ НА КНОПКУ ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ</p>
                </div>

                <button 
                  type="submit" 
                  disabled={!name || phone.length < 18 || !isAgreed || isSending}
                  className={`w-full py-4 font-black uppercase transition ${(!name || phone.length < 18 || !isAgreed || isSending) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#0ea5e9] text-white hover:bg-[#0a1e3f]'}`}
                >
                  {isSending ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* --- ПРЕИМУЩЕСТВА --- */}
      <section className="py-16 md:py-20 px-4 bg-[#e0f2fe]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <FaCheck className="text-4xl text-[#0ea5e9] mx-auto mb-4" />
            <h3 className="font-black text-lg text-[#0a1e3f] uppercase mb-2">Свои мастера</h3>
            <p className="text-gray-600 text-sm">Не подрядчики. Штатные специалисты с опытом от 5 лет.</p>
          </div>
          <div>
            <FaCheck className="text-4xl text-[#0ea5e9] mx-auto mb-4" />
            <h3 className="font-black text-lg text-[#0a1e3f] uppercase mb-2">Гарантия</h3>
            <p className="text-gray-600 text-sm">На все работы и запчасти — 12 месяцев.</p>
          </div>
          <div>
            <FaCheck className="text-4xl text-[#0ea5e9] mx-auto mb-4" />
            <h3 className="font-black text-lg text-[#0a1e3f] uppercase mb-2">Безопасность</h3>
            <p className="text-gray-600 text-sm">Соблюдаем все нормы и регламенты при работе с газом.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MaintenancePage;