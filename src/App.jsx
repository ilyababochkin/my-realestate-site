import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage'; // <-- импорт новой страницы

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-gray-800 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/about" element={<AboutPage />} /> {/* <-- новый маршрут */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;