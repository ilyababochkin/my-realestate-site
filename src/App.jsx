import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import MaintenancePage from './pages/MaintenancePage'; // <-- новый импорт

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-[#0a1e3f] flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Новый маршрут */}
            <Route path="/maintenance" element={<MaintenancePage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;