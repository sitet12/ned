import React, { useState } from 'react';
import { ChevronDown, Check, Zap, Shield, Sun, Maximize2, ArrowRight, Box } from 'lucide-react';

interface ModelSpec {
  name: string;
  power: string;
  dimensions: string;
  weight: string;
}

interface Range {
  id: string;
  name: string;
  tagline: string;
  efficiency: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  models: ModelSpec[];
}

const ranges: Range[] = [
  {
    id: 'silk',
    name: 'SILK®',
    tagline: 'L\'Élégance de la Performance',
    efficiency: '21.5%',
    description: 'La gamme premium SILK® offre des performances exceptionnelles grâce à la technologie de cellules à haut rendement. Idéale pour les installations résidentielles et commerciales exigeantes qui ne veulent pas sacrifier l\'esthétique.',
    features: [
      'Technologie PERC avancée',
      'Cellules Half-cut multi-busbar',
      'Anti-PID garanti',
      'Résistance aux conditions extrêmes'
    ],
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop',
    color: 'from-blue-600 to-indigo-700',
    models: [
      { name: 'SILK® 370W All Black', power: '370 Wp', dimensions: '1755 x 1038 x 35 mm', weight: '20.0 kg' },
      { name: 'SILK® 400W Plus', power: '400 Wp', dimensions: '1755 x 1038 x 35 mm', weight: '21.0 kg' },
      { name: 'SILK® 500W Pro', power: '500 Wp', dimensions: '2094 x 1038 x 35 mm', weight: '25.5 kg' },
    ]
  },
  {
    id: 'velvet',
    name: 'VELVET®',
    tagline: 'Technologie N-Type Bifaciale',
    efficiency: '22.8%',
    description: 'La gamme VELVET® repousse les limites avec la technologie N-Type TOPCon. Elle capture la lumière sur les deux faces pour un rendement maximal, même par faible luminosité.',
    features: [
      'Technologie N-Type TOPCon',
      'Bifacialité jusqu\'à 85%',
      'Dégradation ultra-faible (LID)',
      'Garantie de performance 30 ans'
    ],
    image: 'https://images.unsplash.com/photo-1592833159057-65a269f5eb25?q=80&w=1000&auto=format&fit=crop',
    color: 'from-emerald-600 to-teal-700',
    models: [
      { name: 'VELVET® 430W Bifacial', power: '430 Wp', dimensions: '1722 x 1134 x 30 mm', weight: '22.0 kg' },
      { name: 'VELVET® 580W XL', power: '580 Wp', dimensions: '2278 x 1134 x 35 mm', weight: '28.0 kg' },
    ]
  },
  {
    id: 'diamond',
    name: 'DIAMOND®',
    tagline: 'Robustesse Inégalée',
    efficiency: '21.0%',
    description: 'Conçu pour durer, DIAMOND® utilise une structure bi-verre (Glass-Glass) qui offre une protection mécanique supérieure. Le choix parfait pour les environnements difficiles.',
    features: [
      'Structure Bi-Verre (Double Glass)',
      'Résistance charge neige 5400Pa',
      'Classement Feu A',
      'Durée de vie 35+ ans'
    ],
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop',
    color: 'from-slate-700 to-gray-800',
    models: [
      { name: 'DIAMOND® 410W', power: '410 Wp', dimensions: '1724 x 1134 x 30 mm', weight: '24.5 kg' },
      { name: 'DIAMOND® 450W Clear', power: '450 Wp', dimensions: '1903 x 1134 x 30 mm', weight: '26.0 kg' },
    ]
  },
  {
    id: 'flex',
    name: 'FLEX®',
    tagline: 'Légèreté et Adaptabilité',
    efficiency: '19.8%',
    description: 'FLEX® s\'adapte là où les autres ne peuvent pas aller. Ultra-légers et flexibles, ces panneaux sont parfaits pour les toitures à faible charge, les véhicules ou les surfaces courbes.',
    features: [
      'Poids plume (<3kg/m²)',
      'Flexibilité jusqu\'à 30 degrés',
      'Installation sans perçage',
      'Surface polymère durable'
    ],
    image: 'https://plus.unsplash.com/premium_photo-1679917152960-b9e43b214150?q=80&w=1000&auto=format&fit=crop',
    color: 'from-orange-500 to-red-600',
    models: [
      { name: 'FLEX® 110W Slim', power: '110 Wp', dimensions: '1200 x 540 x 2 mm', weight: '1.9 kg' },
      { name: 'FLEX® 200W Pro', power: '200 Wp', dimensions: '1500 x 680 x 2 mm', weight: '3.2 kg' },
    ]
  }
];

export const Gammes: React.FC = () => {
  // Store selected model index for each range
  const [selections, setSelections] = useState<Record<string, number>>({
    silk: 0,
    velvet: 0,
    diamond: 0,
    flex: 0
  });

  const handleSelectionChange = (rangeId: string, modelIndex: number) => {
    setSelections(prev => ({ ...prev, [rangeId]: modelIndex }));
  };

  const scrollToRange = (id: string) => {
    const element = document.getElementById(`range-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gammes" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold text-lg uppercase tracking-wider mb-2">Innovation Solaire</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nos Gammes de Panneaux</h3>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Découvrez nos quatre lignes de produits distinctes, conçues pour répondre à chaque besoin spécifique, du résidentiel premium aux projets industriels complexes.
          </p>
        </div>

        {/* 1. Overview Cards (The "Before" Description) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {ranges.map((range) => (
            <div 
              key={range.id}
              onClick={() => scrollToRange(range.id)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:-translate-y-2"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${range.color}`}></div>
              <div className="p-6 relative">
                {/* Background Number */}
                <span className="absolute -right-4 -top-4 text-9xl font-bold text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none -z-10">
                  {range.efficiency.split('.')[0]}
                </span>

                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-slate-900">{range.name}</h4>
                  <span className="px-2 py-1 bg-slate-100 rounded-md text-xs font-bold text-slate-600">
                    {range.efficiency}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary mb-4">{range.tagline}</p>
                <div className="h-24 overflow-hidden relative rounded-lg mb-6">
                   <img src={range.image} alt={range.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <button className="w-full py-3 rounded-xl bg-slate-50 text-slate-700 font-semibold group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center gap-2">
                  Découvrir <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Full Range Details */}
        <div className="space-y-32">
          {ranges.map((range, idx) => {
            const isEven = idx % 2 === 0;
            const currentModel = range.models[selections[range.id]];

            return (
              <div 
                id={`range-${range.id}`} 
                key={range.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${range.color} opacity-20 blur-3xl rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-700`}></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-[4/3] lg:aspect-square">
                    <img 
                      src={range.image} 
                      alt={range.name} 
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50">
                       <span className="block text-sm text-slate-500 uppercase tracking-wide font-semibold">Rendement</span>
                       <span className={`text-4xl font-bold bg-gradient-to-r ${range.color} bg-clip-text text-transparent`}>
                         {range.efficiency}
                       </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-1 bg-gradient-to-r ${range.color} rounded-full`}></div>
                    <span className={`font-bold uppercase tracking-widest bg-gradient-to-r ${range.color} bg-clip-text text-transparent`}>
                      Gamme {range.name}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{range.tagline}</h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {range.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {range.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-r ${range.color} flex items-center justify-center shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Model Selector */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-slate-800 font-bold">
                        <Box className="w-5 h-5 text-primary" />
                        <span>Modèle</span>
                      </div>
                      
                      {/* Dropdown */}
                      <div className="relative">
                        <select 
                          value={selections[range.id]}
                          onChange={(e) => handleSelectionChange(range.id, Number(e.target.value))}
                          className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer font-medium"
                        >
                          {range.models.map((model, i) => (
                            <option key={i} value={i}>{model.name}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Dynamic Specs Display */}
                    <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                      <div className="text-center">
                        <div className="text-slate-400 text-xs uppercase font-semibold mb-1">Puissance</div>
                        <div className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1">
                          <Zap className="w-4 h-4 text-yellow-500" />
                          {currentModel.power}
                        </div>
                      </div>
                      <div className="text-center border-l border-slate-100">
                        <div className="text-slate-400 text-xs uppercase font-semibold mb-1">Dimensions</div>
                        <div className="text-lg font-bold text-slate-900 flex items-center justify-center gap-1">
                          <Maximize2 className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">{currentModel.dimensions}</span>
                        </div>
                      </div>
                      <div className="text-center border-l border-slate-100">
                        <div className="text-slate-400 text-xs uppercase font-semibold mb-1">Poids</div>
                        <div className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1">
                          <Shield className="w-4 h-4 text-green-500" />
                          {currentModel.weight}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};