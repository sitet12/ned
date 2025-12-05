import React from 'react';
import { Product } from '../types';
import { Sun, Droplets, Zap, Thermometer } from 'lucide-react';

const products: Product[] = [
  {
    id: '1',
    title: 'Panneaux Solaires',
    description: 'Modules photovoltaïques monocristallins haute performance.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf2f24f?q=80&w=800&auto=format&fit=crop',
    category: 'panel'
  },
  {
    id: '2',
    title: 'Pompes Solaires',
    description: 'Systèmes de pompage immergés et de surface pour l\'irrigation.',
    image: 'https://plus.unsplash.com/premium_photo-1661882143496-6e2c342f5348?q=80&w=800&auto=format&fit=crop',
    category: 'pump'
  },
  {
    id: '3',
    title: 'Variateurs & Onduleurs',
    description: 'Gestion intelligente de l\'énergie pour une efficacité maximale.',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop',
    category: 'inverter'
  },
  {
    id: '4',
    title: 'Chauffe-eau Solaire',
    description: 'Eau chaude sanitaire écologique pour particuliers et industries.',
    image: 'https://images.unsplash.com/photo-1563953538426-368297b61f97?q=80&w=800&auto=format&fit=crop',
    category: 'heater'
  }
];

const icons = {
  panel: <Sun className="w-6 h-6" />,
  pump: <Droplets className="w-6 h-6" />,
  inverter: <Zap className="w-6 h-6" />,
  heater: <Thermometer className="w-6 h-6" />,
};

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-lg uppercase tracking-wider mb-2">Nos Solutions</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Gamme Complète Nedisun</h3>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:-translate-y-2">
              <div className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full text-primary shadow-sm backdrop-blur-sm">
                {icons[product.category]}
              </div>
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors">{product.title}</h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <a href="#" className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                  En savoir plus <span className="ml-1 text-lg">→</span>
                </a>
              </div>
              
              {/* Bottom colored bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};