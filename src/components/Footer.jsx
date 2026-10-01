import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  // ⬇️ ВАЖНО: Замените ссылки на свои реальные аккаунты ⬇️
  const socialLinks = {
    max: 'https://max.ru/u/ваш_аккаунт',      // Ссылка на профиль в MAX
    telegram: 'https://t.me/ваш_аккаунт',     // Ссылка на Telegram
    whatsapp: 'https://wa.me/74956424186',    // Ссылка на WhatsApp (номер без +)
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      {/* Основная сетка: 1 колонка на мобильных, 3 колонки на десктопе */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* --- ЛЕВАЯ КОЛОНКА: ЛОГОТИП --- */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Автономные технологии" className="h-14 w-auto object-contain" />
        </div>

        {/* --- ЦЕНТРАЛЬНАЯ КОЛОНКА: ТЕКСТ --- */}
        <div className="text-center">
          <h4 className="font-bold text-lg uppercase tracking-wider text-white">
            Автономные технологии
          </h4>
        </div>

        {/* --- ПРАВАЯ КОЛОНКА: СОЦИАЛЬНЫЕ СЕТИ --- */}
        <div className="flex justify-center md:justify-end gap-4">
          {/* MAX (текстовая иконка) */}
          <a 
            href={socialLinks.max}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] transition"
            title="Написать в MAX"
          >
            <span className="text-xs font-bold">MAX</span>
          </a>

          {/* Telegram */}
          <a 
            href={socialLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#229ED9] hover:bg-[#1a7fb0] transition"
            title="Написать в Telegram"
          >
            <FaTelegramPlane size={22} />
          </a>

          {/* WhatsApp */}
          <a 
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1da851] transition"
            title="Написать в WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>

      </div>

      {/* Реквизиты (можно убрать или оставить под сеткой) */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">

      </div>
    </footer>
  );
};

export default Footer;