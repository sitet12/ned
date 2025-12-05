import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gammes } from './components/Gammes';
import { Products } from './components/Products';
import { Advantages } from './components/Advantages';
import { Mission } from './components/Mission';
import { Footer } from './components/Footer';
import { SolarAssistant } from './components/SolarAssistant';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Gammes />
        <Products />
        <Advantages />
        <Mission />
      </main>
      <Footer />
      <SolarAssistant />
    </div>
  );
}

export default App;