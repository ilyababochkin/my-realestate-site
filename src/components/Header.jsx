import { useState } from 'react';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-[#0a1e3f] border-b-4 border-[#0a1e3f]">
      <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
        
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={logo} alt="Автономные технологии" className="h-10 md:h-12 w-auto object-contain" />
          <span className="font-black text-xs md:text-sm hidden sm:block uppercase tracking-wider text-[#0a1e3f] leading-tight">
            Автономные<br/>Технологии
          </span>
        </Link>

        <nav className="hidden md:flex gap-10 text-sm font-black uppercase tracking-widest">
          <Link to="/" className="hover:text-[#0ea5e9] transition text-[#0a1e3f]">Газификация дома</Link>
          <Link to="/service" className="hover:text-[#0ea5e9] transition text-[#0a1e3f]">Сервис и ремонт</Link>
          <Link to="/about" className="hover:text-[#0ea5e9] transition text-[#0a1e3f]">О нас</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2 font-black text-[#0a1e3f]">
          <FiPhone className="text-[#0ea5e9]" />
          <span>+7 (495) 642-41-86</span>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#0a1e3f] p-2"
          aria-label="Меню"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0a1e3f] text-white ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col py-4">
          <Link to="/" onClick={closeMenu} className="px-6 py-4 font-black uppercase tracking-wider hover:bg-[#0ea5e9] transition">Газификация дома</Link>
          <Link to="/service" onClick={closeMenu} className="px-6 py-4 font-black uppercase tracking-wider hover:bg-[#0ea5e9] transition">Сервис и ремонт</Link>
          <Link to="/about" onClick={closeMenu} className="px-6 py-4 font-black uppercase tracking-wider hover:bg-[#0ea5e9] transition">О нас</Link>
          
          <a href="tel:+74956424186" className="px-6 py-4 font-black flex items-center gap-2 border-t border-white/20 mt-2">
            <FiPhone className="text-[#0ea5e9]" />
            <span>+7 (495) 642-41-86</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;