import { FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-white sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="Лилия Сервис" className="h-12 w-auto object-contain" />
        </Link>
        <span className="font-bold text-sm hidden md:block">Автономные<br/>Технологии</span>
      </div>
      
      {/* Меню навигации: все ссылки черные, без выделения жирным */}
      <nav className="hidden md:flex gap-8 text-sm text-black uppercase tracking-wide">
        <Link to="/" className="hover:text-[#b19c7d] transition">Газификация дома</Link>
        <Link to="/service" className="hover:text-[#b19c7d] transition">Сервис и ремонт</Link>
        <Link to="/about" className="hover:text-[#b19c7d] transition">О нас</Link>
      </nav>

      <div className="flex items-center gap-2 font-bold">
        <FiPhone />
        <span>+7 (495) 642-41-86</span>
      </div>
    </header>
  );
};

export default Header;