import { useState, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// ⬇️ ВАЖНО: Убедитесь, что все эти файлы физически лежат в папке src/assets ⬇️
import optimaImg from '../assets/optima.jpg';
import medvedImg from '../assets/medved.png';
import model3Img from '../assets/model3.jpg';
import model4Img from '../assets/model4.png';

const Calculator = () => {
  // --- СОСТОЯНИЯ ---
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [distance, setDistance] = useState(30);
  const [installTime, setInstallTime] = useState(null);

  // Состояния для формы
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 (');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef();

  // --- ДАННЫЕ ДЛЯ ШАГОВ ---
  const areaOptions = ['до 90 м²', 'от 90 до 150 м²', 'от 150 до 300 м²', 'от 300 до 500 м²'];

  const manufacturers = [
    { id: 'optima', name: 'Оптима', image: optimaImg },
    { id: 'medved', name: 'Медведь', image: medvedImg },
    { id: 'model3', name: 'Реал-Инвет', image: model3Img },
    { id: 'model4', name: 'ФХМ', image: model4Img },
  ];

  const timeOptions = [
    { id: 'soon', label: 'В самое ближайшее время' },
    { id: 'month', label: 'В течение месяца' },
    { id: '3-4months', label: 'В течение 3-4 месяцев' },
    { id: 'browsing', label: 'Пока просто интересуюсь' },
  ];

  // --- ФУНКЦИИ ---
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
      name: name,
      phone: phone,
      area: selectedArea,
      manufacturer: manufacturers.find(m => m.id === selectedManufacturer)?.name || selectedManufacturer,
      distance: `${distance} км`,
      installTime: timeOptions.find(t => t.id === installTime)?.label || installTime,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      console.log('Заявка успешно отправлена!');
      setIsSuccess(true);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="calculator" className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Рассчитайте стоимость работ</h2>
        <p className="text-gray-400">Ответьте на 4 вопроса, чтобы мы могли рассчитать стоимость</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white text-black p-8 rounded-lg shadow-xl relative">
        
        {/* --- ПРОГРЕСС-БАР --- */}
        {!isSuccess && step <= 4 && (
          <>
            <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
              <span>Расчет стоимости в течении 20 минут</span>
              <span className="font-bold text-black text-lg">{step}/4</span>
            </div>
            <div className="w-full bg-gray-200 h-1 mb-10">
              <div className="bg-[#b19c7d] h-1 transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>
          </>
        )}

        {isSuccess ? (
          /* --- ЭКРАН УСПЕХА --- */
          <div className="text-center py-20">
            <div className="text-5xl text-[#b19c7d] mb-6">✓</div>
            <h3 className="text-2xl font-bold mb-4">Спасибо, {name}!</h3>
            <p className="text-gray-600">Ваша заявка принята. Мы свяжемся с вами в течение 20 минут.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit}>

            {/* --- ШАГ 1: ПЛОЩАДЬ --- */}
            {step === 1 && (
              <div className="mb-12">
                <h3 className="font-bold text-xl mb-2 uppercase">КАКАЯ У ВАС ПЛОЩАДЬ?</h3>
                <p className="text-gray-500 text-sm mb-6">Нам это необходимо знать, чтобы правильно подобрать объем газгольдера.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {areaOptions.map((area, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedArea(area)}
                      className={`border p-4 rounded cursor-pointer text-center transition-all ${
                        selectedArea === area ? 'border-[#b19c7d] bg-[#b19c7d]/5' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="h-20 bg-gray-100 mb-2 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">Дом</span>
                      </div>
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- ШАГ 2: ПРОИЗВОДИТЕЛЬ --- */}
            {step === 2 && (
              <div className="mb-12">
                <h3 className="font-bold text-xl mb-2 uppercase">ВЫБЕРИТЕ ПРОИЗВОДИТЕЛЯ ГАЗГОЛЬДЕРА</h3>
                <p className="text-gray-500 text-sm mb-6">Стоимость зависит от производителя газгольдера.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {manufacturers.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setSelectedManufacturer(m.id)}
                      className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all flex flex-col items-center ${
                        selectedManufacturer === m.id ? 'border-[#b19c7d] bg-[#b19c7d]/5' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {selectedManufacturer === m.id && (
                        <div className="absolute top-3 right-3 bg-[#b19c7d] text-white rounded-full w-6 h-6 flex items-center justify-center">
                          <FaCheck size={12} />
                        </div>
                      )}
                      <img src={m.image} alt={m.name} className="h-32 object-contain mb-4" />
                      <span className="text-lg font-medium">{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- ШАГ 3: УДАЛЕННОСТЬ --- */}
            {step === 3 && (
              <div className="mb-12">
                <h3 className="font-bold text-xl mb-2 uppercase">УДАЛЕННОСТЬ ОБЪЕКТА ОТ МКАД</h3>
                <p className="text-gray-500 text-sm mb-16">Нам это необходимо знать, чтобы рассчитать доставку.</p>
                <div className="relative px-2">
                  <div className="absolute -top-12 bg-white shadow-md border rounded px-3 py-1 text-sm font-medium transition-all" style={{ left: `calc(${((distance - 30) / (200 - 30)) * 100}% - 20px)` }}>{distance}</div>
                  <input type="range" min="30" max="200" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full cursor-pointer" />
                  <div className="flex justify-between text-sm text-gray-500 mt-2"><span>30</span><span>200</span></div>
                </div>
              </div>
            )}

            {/* --- ШАГ 4: ВРЕМЯ МОНТАЖА --- */}
            {step === 4 && (
              <div className="mb-12">
                <h3 className="font-bold text-xl mb-2 uppercase">КОГДА ПЛАНИРУЕТЕ МОНТАЖ?</h3>
                <p className="text-gray-500 text-sm mb-8">Мы сможем оптимально подготовиться и дать дополнительную скидку.</p>
                <div className="space-y-5">
                  {timeOptions.map((option) => (
                    <div key={option.id} onClick={() => setInstallTime(option.id)} className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${installTime === option.id ? 'border-[#b19c7d]' : 'border-gray-300'}`}>
                        {installTime === option.id && <div className="w-3 h-3 rounded-full bg-[#b19c7d]"></div>}
                      </div>
                      <span className={`text-lg ${installTime === option.id ? 'text-black font-medium' : 'text-gray-600'}`}>{option.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- ШАГ 5: КОНТАКТЫ --- */}
            {step === 5 && (
              <div className="mb-8">
                <div className="space-y-12">
                  <div>
                    <label className="block font-bold text-lg mb-2 uppercase">Ваше имя</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-b border-gray-300 py-2 text-xl focus:outline-none focus:border-[#b19c7d] bg-transparent" required />
                  </div>
                  <div>
                    <label className="block font-bold text-lg mb-2 uppercase">Ваш телефон</label>
                    <div className="flex items-center gap-2 border-b border-gray-300 py-2 focus-within:border-[#b19c7d]">
                      <span className="text-2xl">🇷🇺</span><span className="text-gray-400">▼</span>
                      <input type="tel" value={phone} onChange={handlePhoneChange} className="w-full text-xl focus:outline-none bg-transparent" required />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div onClick={() => setIsAgreed(!isAgreed)} className={`mt-1 w-5 h-5 border-2 rounded flex-shrink-0 cursor-pointer flex items-center justify-center transition-colors ${isAgreed ? 'bg-[#b19c7d] border-[#b19c7d]' : 'border-gray-400'}`}>
                      {isAgreed && <FaCheck size={10} className="text-white" />}
                    </div>
                    <p className="text-xs text-gray-500 leading-tight">НАЖИМАЯ НА КНОПКУ ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ СОГЛАСНО <a href="#" className="underline">ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ</a></p>
                  </div>
                </div>
              </div>
            )}

            {/* --- КНОПКИ НАВИГАЦИИ --- */}
            <div className="flex justify-between mt-12">
              <button
                type="button"
                onClick={() => setStep(step > 1 ? step - 1 : 1)}
                disabled={step === 1 || isSending}
                className={`px-8 py-3 rounded font-bold uppercase transition ${
                  step === 1 || isSending ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#b19c7d] text-white hover:bg-[#9a8669]'
                }`}
              >
                ← НАЗАД
              </button>

              {step < 5 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && !selectedArea) ||
                    (step === 2 && !selectedManufacturer) ||
                    (step === 4 && !installTime)
                  }
                  className={`px-8 py-3 rounded font-bold uppercase transition ${
                    ((step === 1 && !selectedArea) || (step === 2 && !selectedManufacturer) || (step === 4 && !installTime))
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#b19c7d] text-white hover:bg-[#9a8669]'
                  }`}
                >
                  {step === 4 ? 'ПОСЛЕДНИЙ ВОПРОС' : 'ДАЛЕЕ →'}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!name || phone.length < 18 || !isAgreed || isSending}
                  className={`px-8 py-3 rounded font-bold uppercase transition ${
                    (!name || phone.length < 18 || !isAgreed || isSending) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#b19c7d] text-white hover:bg-[#9a8669]'
                  }`}
                >
                  {isSending ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ'}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Calculator;