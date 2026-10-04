import { FaTelegramPlane, FaWhatsapp, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const socialLinks = {
    max: 'https://max.ru/u/f9LHodD0cOJ-ewdYIE47m68m_vlDAy73L27bfxUarFzyNiuwGm0cnrMlaIU',
    telegram: 'https://t.me/Aleksandr86Khaerov',
    whatsapp: 'https://wa.me/79053212221',
  };

return (
    <footer className="bg-[#e0f2fe] text-[#0a1e3f] py-10 md:py-12 px-4 border-t-8 border-[#0ea5e9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* ЛЕВАЯ КОЛОНКА: ЛОГОТИП */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Автономные технологии" className="h-12 md:h-14 w-auto object-contain" />
        </div>

        {/* ЦЕНТРАЛЬНАЯ КОЛОНКА: ТЕКСТ */}
        <div className="text-center">
          <h4 className="font-black text-base md:text-lg uppercase tracking-wider text-[#0a1e3f]">
            Автономные технологии
          </h4>
        </div>

        {/* ПРАВАЯ КОЛОНКА: СОЦИАЛЬНЫЕ СЕТИ */}
        <div className="flex justify-center md:justify-end gap-3 md:gap-4">
          <a href={socialLinks.max} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-[#0ea5e9] hover:bg-[#0a1e3f] transition text-white" title="MAX">
            <span className="text-xs font-black">MAX</span>
          </a>
          <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-[#0ea5e9] hover:bg-[#0a1e3f] transition text-white" title="Telegram">
            <FaTelegramPlane size={24} />
          </a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-[#0ea5e9] hover:bg-[#0a1e3f] transition text-white" title="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ: РЕКВИЗИТЫ И ТЕЛЕФОН */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#0a1e3f]/20 text-center text-xs font-medium text-[#0a1e3f]/70">
        <p className="mb-2">Не является публичной офертой</p>
        <p className="flex items-center justify-center gap-2">
          <FaPhone className="text-[#0ea5e9]" />
          <a 
            href="tel:+79053212221" 
            className="hover:text-[#0ea5e9] transition-colors font-bold"
          >
            +7 (905) 321-22-21
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;