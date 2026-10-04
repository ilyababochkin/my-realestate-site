import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const socialLinks = {
    max: 'https://max.ru/u/ваш_аккаунт',
    telegram: 'https://t.me/ваш_аккаунт',
    whatsapp: 'https://wa.me/74956424186',
  };

  return (
    <footer className="bg-[#0a1e3f] text-white py-10 md:py-12 px-4 border-t-8 border-[#0ea5e9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Автономные технологии" className="h-12 md:h-14 w-auto object-contain" />
        </div>

        <div className="text-center">
          <h4 className="font-black text-base md:text-lg uppercase tracking-wider text-white">Автономные технологии</h4>
        </div>

        <div className="flex justify-center md:justify-end gap-3 md:gap-4">
          <a href={socialLinks.max} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-[#0ea5e9] hover:bg-white transition text-white hover:text-[#0a1e3f]" title="MAX"><span className="text-xs font-black">MAX</span></a>
          <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-[#0ea5e9] hover:bg-white transition text-white hover:text-[#0a1e3f]" title="Telegram"><FaTelegramPlane size={24} /></a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-[#0ea5e9] hover:bg-white transition text-white hover:text-[#0a1e3f]" title="WhatsApp"><FaWhatsapp size={24} /></a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/20 text-center text-xs font-medium text-white/70">
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;