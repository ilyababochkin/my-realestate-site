import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          {/* Добавляем логотип */}
          <img src={logo} alt="Лилия Сервис" className="h-12 w-auto mb-4" />
        </div>
        <div>
          <h4 className="font-bold mb-4">ГАЗИФИКАЦИЯ ДОМА</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Услуги</li>
            <li>Цены</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">СЕРВИС И РЕМОНТ</h4>
        </div>
        <div className="text-sm text-gray-400">
          <p>ИП ХАЕРОВ АЛЕКСАНДР ВИКТОРОВИЧ</p>
          <p>ОГРНИП 320774600041557</p>
          <p>ИНН 643906633987</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;