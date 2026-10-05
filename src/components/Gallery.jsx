import { useState, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// ⬇️ ИМПОРТИРУЙТЕ ЗДЕСЬ ВСЕ ВАШИ ФОТОГРАФИИ ⬇️
import work1 from '../assets/gallery/work-1.jpeg';
import work2 from '../assets/gallery/work-2.jpeg';
import work3 from '../assets/gallery/work-3.jpeg';
import work4 from '../assets/gallery/work-4.jpeg';
import work5 from '../assets/gallery/work-5.jpeg';
import work6 from '../assets/gallery/work-6.jpeg';
import work7 from '../assets/gallery/work-7.jpeg';
import work8 from '../assets/gallery/work-8.jpeg';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Собираем все фото в массив. Дублируем, чтобы визуально сетка была плотнее.
  const photos = [work1, work2, work3, work4, work5, work6, work7, work8];

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const nextPhoto = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Обработка клавиш ←/→/Esc
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex]);

  return (
    <>
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto bg-white">
        <h2 className="text-2xl md:text-4xl font-black mb-4 text-[#0a1e3f] uppercase text-center">
          Наши работы
        </h2>
        <p className="text-center text-[#0a1e3f]/70 font-medium mb-10 max-w-2xl mx-auto">
          Более 1500 установленных газгольдеров в Москве и области. Смотрите сами — мы гордимся каждой работой.
        </p>

        {/* Сетка превью */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="relative aspect-square overflow-hidden border-2 border-[#0a1e3f] cursor-pointer group shadow-[4px_4px_0_0_#0ea5e9] hover:shadow-[6px_6px_0_0_#0a1e3f] transition-all"
            >
              <img
                src={photo}
                alt={`Работа ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0a1e3f]/0 group-hover:bg-[#0a1e3f]/40 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-black text-sm uppercase tracking-wider">
                  Открыть
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ЛАЙТБОКС */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Кнопка закрытия */}
          <button
            className="absolute top-4 right-4 text-white hover:text-[#0ea5e9] transition z-20"
            onClick={closeLightbox}
            aria-label="Закрыть"
          >
            <FiX size={36} />
          </button>

          {/* Стрелка влево */}
          <button
            className="absolute left-2 md:left-6 text-white hover:text-[#0ea5e9] transition z-20 bg-black/40 p-2 md:p-3"
            onClick={prevPhoto}
            aria-label="Предыдущее фото"
          >
            <FiChevronLeft size={36} />
          </button>

          {/* Фото */}
          <img
            src={photos[selectedIndex]}
            alt={`Работа ${selectedIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain border-4 border-[#0ea5e9]"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Стрелка вправо */}
          <button
            className="absolute right-2 md:right-6 text-white hover:text-[#0ea5e9] transition z-20 bg-black/40 p-2 md:p-3"
            onClick={nextPhoto}
            aria-label="Следующее фото"
          >
            <FiChevronRight size={36} />
          </button>

          {/* Счётчик */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-black text-sm bg-[#0a1e3f] px-4 py-2 border-2 border-[#0ea5e9]">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;