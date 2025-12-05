import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold text-lg uppercase tracking-wider mb-2">Notre Mission</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Éclairer l'Avenir</h3>
          <p className="text-xl text-slate-200 leading-relaxed">
            Chez Nedisun, nous croyons que l'accès à une énergie propre est un droit fondamental. Notre mission est de démocratiser le solaire avec des technologies de pointe accessibles à tous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Target, 
              title: "Innovation", 
              desc: "Nous recherchons constamment les dernières technologies pour maximiser votre rendement énergétique." 
            },
            { 
              icon: Globe, 
              title: "Durabilité", 
              desc: "Chaque panneau installé est un pas de plus vers une planète plus verte et respirable." 
            },
            { 
              icon: Heart, 
              title: "Engagement", 
              desc: "Nous accompagnons nos clients à chaque étape, de la conception à la maintenance." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-center group">
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};