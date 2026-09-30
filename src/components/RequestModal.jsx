import { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const RequestModal = ({ isOpen, onClose, planTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 (');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Сбрасываем состояние при закрытии/открытии окна
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    } else {
      document.body.style.overflow = 'auto';
      // Сбрасываем форму через небольшую задержку, чтобы не было "мигания"
      setTimeout(() => {
        setName('');
        setPhone('+7 (');
        setIsAgreed(false);
        setIsSuccess(false);
        setIsSending(false);
      }, 300);
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // Маска для телефона
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
      area: `Заявка из тарифа: ${planTitle}`, // Передаем название тарифа
      manufacturer: 'Уточняется',
      distance: 'Уточняется',
      installTime: 'Уточняется',
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
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке. Попробуйте еще раз.');
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // Не закрывать при клике внутри
      >
        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
          aria-label="Закрыть"
        >
          <FaTimes size={20} />
        </button>

        {isSuccess ? (
          <div className="text-center py-10">
            <div className="text-5xl text-[#b19c7d] mb-6 flex justify-center">✓</div>
            <h3 className="text-2xl font-bold mb-4">Спасибо, {name}!</h3>
            <p className="text-gray-600">Ваша заявка принята. Мы свяжемся с вами в течение 20 минут.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-2 text-black">Оставить заявку</h3>
            <p className="text-gray-500 text-sm mb-6">Тариф: <span className="font-medium text-gray-700">{planTitle}</span></p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-bold text-sm mb-2 uppercase text-black">Ваше имя</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#b19c7d] bg-transparent"
                  placeholder="Введите имя"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-sm mb-2 uppercase text-black">Ваш телефон</label>
                <div className="flex items-center gap-2 border-b border-gray-300 py-2 focus-within:border-[#b19c7d]">
                  <span className="text-xl">🇷🇺</span>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full text-lg focus:outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div 
                  onClick={() => setIsAgreed(!isAgreed)}
                  className={`mt-1 w-5 h-5 border-2 rounded flex-shrink-0 cursor-pointer flex items-center justify-center transition-colors ${
                    isAgreed ? 'bg-[#b19c7d] border-[#b19c7d]' : 'border-gray-400'
                  }`}
                >
                  {isAgreed && <FaCheck size={10} className="text-white" />}
                </div>
                <p className="text-xs text-gray-500 leading-tight">
                  НАЖИМАЯ НА КНОПКУ ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ СОГЛАСНО <a href="#" className="underline">ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ</a>
                </p>
              </div>

              <button 
                type="submit"
                disabled={!name || phone.length < 18 || !isAgreed || isSending}
                className={`w-full py-3 rounded font-bold uppercase transition ${
                  (!name || phone.length < 18 || !isAgreed || isSending)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#b19c7d] text-white hover:bg-[#9a8669]'
                }`}
              >
                {isSending ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestModal;