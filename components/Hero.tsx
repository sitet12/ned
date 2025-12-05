import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",
    title: "oussama,
    subtitle: "Panneaux solaires haute efficacité pour un avenir durable.",
    cta: "Découvrir nos solutions"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1545209463-ce23d1d1eb96?q=80&w=2000&auto=format&fit=crop",
    title: "imade",
    subtitle: "Des solutions autonomes pour irriguer vos cultures efficacement.",
    cta: "Voir les pompes"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1620646233562-f2a31adcc17f?q=80&w=2000&auto=format&fit=crop",
    title: "Indépendance Énergétique",
    subtitle: "Onduleurs et batteries pour une autonomie totale.",
    cta: "Nos onduleurs"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image with overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover animate-[kenburns_20s_ease-out_infinite]"
            style={{ animationPlayState: index === currentSlide ? 'running' : 'paused' }}
          />
          
          {/* Text Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center max-w-4xl mt-16">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg transform transition-all duration-700 translate-y-0 opacity-100">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" className="text-lg">
                  {slide.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="secondary" className="text-lg">
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};