import { useState, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import optimaImg from '../assets/optima.jpg';
import medvedImg from '../assets/medved.png';
import model3Img from '../assets/model3.jpg';
import model4Img from '../assets/model4.png';
import house1Img from '../assets/house1.jpg';
import house2Img from '../assets/house2.jpg';
import house3Img from '../assets/house3.jpg';
import house4Img from '../assets/house4.jpg';

const Calculator = () => {
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [distance, setDistance] = useState(30);
  const [installTime, setInstallTime] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 (');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const areaOptions = [
    { label: 'до 90 м²', image: house1Img },
    { label: 'от 90 до 150 м²', image: house2Img },
    { label: 'от 150 до 300 м²', image: house3Img },
    { label: 'от 300 до 500 м²', image: house4Img },
  ];

  const manufacturers = [
    { id: 'optima', name: 'Оптима', image: optimaImg },
    { id: 'medved', name: 'Медведь', image: medvedImg },
    { id: 'model3', name: 'Название 3', image: model3Img },
    { id: 'model4', name: 'Название 4', image: model4Img },
  ];

  const timeOptions = [
    { id: 'soon', label: 'В самое ближайшее время' },
    { id: 'month', label: 'В течение месяца' },
    { id: '3-4months', label: 'В течение 3-4 месяцев' },
    { id: 'browsing', label: 'Пока просто интересуюсь' },
  ];

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
      name, phone,
      area: selectedArea,
      manufacturer: manufacturers.find(m => m.id === selectedManufacturer)?.name || selectedManufacturer,
      distance: `${distance} км`,
      installTime: timeOptions.find(t => t.id === installTime)?.label || installTime,
    };
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
      setIsSuccess(true);
    } catch (error) { console.error(error); alert('Ошибка отправки'); } finally { setIsSending(false); }
  };

  return (
    <section id="calculator" className="bg-[#e0f2fe] py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase text-[#0a1e3f]">Рассчитайте стоимость работ</h2>
        <p className="text-[#0a1e3f] font-medium">Ответьте на 4 вопроса, чтобы мы могли рассчитать стоимость</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white text-[#0a1e3f] p-5 md:p-8 shadow-[8px_8px_0_0_#0a1e3f] md:shadow-[12px_12px_0_0_#0a1e3f] border-2 border-[#0a1e3f]">
        {!isSuccess && step <= 4 && (
          <>
            <div className="flex justify-between items-center mb-4 text-xs md:text-sm text-[#0a1e3f]">
              <span className="font-semibold">Расчет стоимости в течении 20 минут</span>
              <span className="font-black text-[#0a1e3f] text-base md:text-lg">{step}/4</span>
            </div>
            <div className="w-full bg-[#e0f2fe] h-2 mb-8 md:mb-10">
              <div className="bg-[#0ea5e9] h-2 transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>
          </>
        )}

        {isSuccess ? (
          <div className="text-center py-16 md:py-20">
            <div className="text-4xl md:text-5xl text-[#0ea5e9] mb-6">✓</div>
            <h3 className="text-xl md:text-2xl font-black mb-4 text-[#0a1e3f]">Спасибо, {name}!</h3>
            <p className="text-[#0a1e3f]">Ваша заявка принята. Мы свяжемся с вами в течение 20 минут.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="mb-8 md:mb-12">
                <h3 className="font-black text-lg md:text-xl mb-2 uppercase text-[#0a1e3f]">КАКАЯ У ВАС ПЛОЩАДЬ?</h3>
                <p className="text-[#0a1e3f] text-xs md:text-sm mb-6 font-medium">Нам это необходимо знать, чтобы правильно подобрать объем газгольдера.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {areaOptions.map((area, i) => (
                    <div key={i} onClick={() => setSelectedArea(area.label)} className={`border-2 p-2 md:p-4 cursor-pointer text-center transition-all ${selectedArea === area.label ? 'border-[#0ea5e9] bg-[#e0f2fe] shadow-[4px_4px_0_0_#0ea5e9]' : 'border-[#0a1e3f]/20 hover:border-[#0a1e3f]'}`}>
                      <div className="h-16 md:h-24 mb-2 md:mb-4 overflow-hidden">
                        <img src={area.image} alt={area.label} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs md:text-sm font-black text-[#0a1e3f]">{area.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="mb-8 md:mb-12">
                <h3 className="font-black text-lg md:text-xl mb-2 uppercase text-[#0a1e3f]">ВЫБЕРИТЕ ПРОИЗВОДИТЕЛЯ</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {manufacturers.map((m) => (
                    <div key={m.id} onClick={() => setSelectedManufacturer(m.id)} className={`relative border-2 p-4 md:p-6 cursor-pointer transition-all flex flex-col items-center ${selectedManufacturer === m.id ? 'border-[#0ea5e9] bg-[#e0f2fe] shadow-[4px_4px_0_0_#0ea5e9]' : 'border-[#0a1e3f]/20 hover:border-[#0a1e3f]'}`}>
                      {selectedManufacturer === m.id && <div className="absolute top-2 right-2 bg-[#0ea5e9] text-white rounded-full w-6 h-6 flex items-center justify-center"><FaCheck size={12} /></div>}
                      <img src={m.image} alt={m.name} className="h-24 md:h-32 object-contain mb-3 md:mb-4" />
                      <span className="text-base md:text-lg font-black text-[#0a1e3f]">{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="mb-8 md:mb-12">
                <h3 className="font-black text-lg md:text-xl mb-2 uppercase text-[#0a1e3f]">УДАЛЕННОСТЬ ОТ МКАД</h3>
                <div className="relative px-2 mt-16">
                  <div className="absolute -top-12 bg-[#0a1e3f] text-white px-3 py-1 text-sm font-black transition-all" style={{ left: `calc(${((distance - 30) / (200 - 30)) * 100}% - 20px)` }}>{distance}</div>
                  <input type="range" min="30" max="200" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full cursor-pointer" />
                  <div className="flex justify-between text-sm text-[#0a1e3f] font-bold mt-2"><span>30</span><span>200</span></div>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="mb-8 md:mb-12">
                <h3 className="font-black text-lg md:text-xl mb-2 uppercase text-[#0a1e3f]">КОГДА ПЛАНИРУЕТЕ МОНТАЖ?</h3>
                <div className="space-y-4 md:space-y-5">
                  {timeOptions.map((option) => (
                    <div key={option.id} onClick={() => setInstallTime(option.id)} className="flex items-center gap-3 md:gap-4 cursor-pointer group">
                      <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${installTime === option.id ? 'border-[#0ea5e9]' : 'border-[#0a1e3f]/30'}`}>
                        {installTime === option.id && <div className="w-3 h-3 rounded-full bg-[#0ea5e9]"></div>}
                      </div>
                      <span className={`text-base md:text-lg ${installTime === option.id ? 'text-[#0a1e3f] font-black' : 'text-[#0a1e3f] font-medium'}`}>{option.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="mb-8">
                <div className="space-y-8 md:space-y-12">
                  <div>
                    <label className="block font-black text-base md:text-lg mb-2 uppercase text-[#0a1e3f]">Ваше имя</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-b-4 border-[#0a1e3f]/20 py-2 text-lg md:text-xl font-bold focus:outline-none focus:border-[#0ea5e9] bg-transparent text-[#0a1e3f]" required />
                  </div>
                  <div>
                    <label className="block font-black text-base md:text-lg mb-2 uppercase text-[#0a1e3f]">Ваш телефон</label>
                    <div className="flex items-center gap-2 border-b-4 border-[#0a1e3f]/20 py-2 focus-within:border-[#0ea5e9]">
                      <span className="text-xl md:text-2xl">🇷🇺</span>
                      <input type="tel" value={phone} onChange={handlePhoneChange} className="w-full text-lg md:text-xl font-bold focus:outline-none bg-transparent text-[#0a1e3f]" required />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div onClick={() => setIsAgreed(!isAgreed)} className={`mt-1 w-5 h-5 border-2 flex-shrink-0 cursor-pointer flex items-center justify-center transition-colors ${isAgreed ? 'bg-[#0ea5e9] border-[#0ea5e9]' : 'border-[#0a1e3f]'}`}>
                      {isAgreed && <FaCheck size={10} className="text-white" />}
                    </div>
                    <p className="text-xs text-[#0a1e3f] font-medium leading-tight">НАЖИМАЯ НА КНОПКУ ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ</p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-0 mt-8 md:mt-12">
              <button type="button" onClick={() => setStep(step > 1 ? step - 1 : 1)} disabled={step === 1 || isSending} className={`w-full sm:w-auto px-6 md:px-8 py-3 font-black uppercase transition ${step === 1 || isSending ? 'bg-[#0a1e3f]/10 text-[#0a1e3f]/40' : 'bg-[#0a1e3f] text-white hover:bg-[#0ea5e9]'}`}>← НАЗАД</button>
              {step < 5 ? (
                <button type="button" onClick={() => setStep(step + 1)} disabled={(step === 1 && !selectedArea) || (step === 2 && !selectedManufacturer) || (step === 4 && !installTime)} className={`w-full sm:w-auto px-6 md:px-8 py-3 font-black uppercase transition ${((step === 1 && !selectedArea) || (step === 2 && !selectedManufacturer) || (step === 4 && !installTime)) ? 'bg-[#0a1e3f]/10 text-[#0a1e3f]/40' : 'bg-[#0ea5e9] text-white hover:bg-[#0a1e3f]'}`}>{step === 4 ? 'ПОСЛЕДНИЙ ВОПРОС' : 'ДАЛЕЕ →'}</button>
              ) : (
                <button type="submit" disabled={!name || phone.length < 18 || !isAgreed || isSending} className={`w-full sm:w-auto px-6 md:px-8 py-3 font-black uppercase transition ${(!name || phone.length < 18 || !isAgreed || isSending) ? 'bg-[#0a1e3f]/10 text-[#0a1e3f]/40' : 'bg-[#0ea5e9] text-white hover:bg-[#0a1e3f]'}`}>{isSending ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ'}</button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
export default Calculator;