import React from 'react';
import { ShieldCheck, Leaf, Wrench, Wallet } from 'lucide-react';

export const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-energyYellow/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold text-lg uppercase tracking-wider mb-2">Pourquoi Nedisun ?</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              L'excellence solaire au service de votre confort
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Nous combinons expertise technique et produits de haute qualité pour vous offrir des installations performantes, durables et rentables.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Garantie Longue Durée", desc: "Produits certifiés avec garanties étendues." },
                { icon: Leaf, title: "100% Écologique", desc: "Réduisez votre empreinte carbone immédiatement." },
                { icon: Wrench, title: "Support Expert", desc: "Installation et maintenance par des pros." },
                { icon: Wallet, title: "Rentabilité Maximale", desc: "Retour sur investissement rapide et sûr." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1000&auto=format&fit=crop" 
                alt="Solar Installation" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm opacity-80">Années d'expérience</div>
                  </div>
                  <div className="h-10 w-px bg-white/30"></div>
                  <div className="text-white">
                    <div className="text-3xl font-bold">5k+</div>
                    <div className="text-sm opacity-80">Projets réalisés</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-energyYellow text-slate-900 p-4 rounded-full shadow-lg font-bold text-center w-32 h-32 flex flex-col items-center justify-center border-4 border-white animate-bounce-slow">
              <span className="text-2xl">#1</span>
              <span className="text-xs uppercase tracking-wide">Qualité Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};