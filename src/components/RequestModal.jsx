import { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const RequestModal = ({ isOpen, onClose, planTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 (');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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
      area: `Заявка со страницы: ${planTitle}`,
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
        className="bg-white shadow-2xl max-w-md w-full p-6 md:p-8 relative border-2 border-[#0a1e3f] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#0a1e3f] hover:text-[#0ea5e9] transition"
        >
          <FaTimes size={20} />
        </button>

        {isSuccess ? (
          <div className="text-center py-10">
            <div className="text-4xl md:text-5xl text-[#0ea5e9] mb-6 flex justify-center">✓</div>
            <h3 className="text-xl md:text-2xl font-black mb-4 text-[#0a1e3f]">Спасибо, {name}!</h3>
            <p className="text-[#0a1e3f] font-medium">Ваша заявка принята. Мы свяжемся с вами в течение 20 минут.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl md:text-2xl font-black mb-2 text-[#0a1e3f] uppercase">Оставить заявку</h3>
            <p className="text-[#0a1e3f] text-sm mb-6 font-medium">Раздел: <span className="text-[#0ea5e9]">{planTitle}</span></p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-black text-sm mb-2 uppercase text-[#0a1e3f]">Ваше имя</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b-4 border-[#0a1e3f]/20 py-2 text-lg font-bold focus:outline-none focus:border-[#0ea5e9] bg-transparent text-[#0a1e3f]"
                  placeholder="Введите имя"
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
                <div 
                  onClick={() => setIsAgreed(!isAgreed)}
                  className={`mt-1 w-5 h-5 border-2 flex-shrink-0 cursor-pointer flex items-center justify-center transition-colors ${
                    isAgreed ? 'bg-[#0ea5e9] border-[#0ea5e9]' : 'border-[#0a1e3f]'
                  }`}
                >
                  {isAgreed && <FaCheck size={10} className="text-white" />}
                </div>
                <p className="text-xs text-[#0a1e3f] font-medium leading-tight">
                  НАЖИМАЯ НА КНОПКУ ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ
                </p>
              </div>

              <button 
                type="submit"
                disabled={!name || phone.length < 18 || !isAgreed || isSending}
                className={`w-full py-3 font-black uppercase transition ${
                  (!name || phone.length < 18 || !isAgreed || isSending)
                    ? 'bg-[#0a1e3f]/10 text-[#0a1e3f]/40 cursor-not-allowed'
                    : 'bg-[#0ea5e9] text-white hover:bg-[#0a1e3f]'
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