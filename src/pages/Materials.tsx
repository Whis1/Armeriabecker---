
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { materials } from '@/data/armoryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { box } from 'lucide-react';

const Materials = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="vintage-card mb-8 animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-6 text-center text-armeria-wood">
            <span className="header-decoration">Catalogo Materiali</span>
          </h1>
          
          <div className="overflow-hidden vintage-card animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-armeria-wood text-white">
                    <th className="px-4 py-3 text-left">Nome Materiale</th>
                    <th className="px-4 py-3 text-right">Prezzo</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material, index) => (
                    <tr key={material.id} className={index % 2 === 0 ? 'bg-transparent' : 'bg-armeria-brass/5'}>
                      <td className="px-4 py-3 text-left flex items-center">
                        <box className="h-4 w-4 mr-2 text-armeria-wood/70" />
                        <span>{material.name}</span>
                      </td>
                      <td className="px-4 py-3 text-right">${material.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="vintage-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h2 className="font-serif font-bold text-xl mb-4 text-armeria-wood">Materiali di base</h2>
                <p className="text-armeria-dark/80 mb-4">
                  I materiali di base sono gli elementi fondamentali per la creazione di componenti più complessi.
                  Questi sono facilmente reperibili e hanno un costo contenuto.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {materials.filter(m => m.price <= 0.01).slice(0, 6).map((material) => (
                    <div key={material.id} className="flex items-center p-2 bg-armeria-brass/10 rounded">
                      <box className="h-4 w-4 mr-2 text-armeria-wood" />
                      <span>{material.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="vintage-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <h2 className="font-serif font-bold text-xl mb-4 text-armeria-wood">Materiali recuperati</h2>
                <p className="text-armeria-dark/80 mb-4">
                  I materiali recuperati sono ottenuti dal riciclo di oggetti danneggiati. 
                  Hanno un valore maggiore ma possono fornire componenti importanti.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {materials.filter(m => m.price > 0.01).map((material) => (
                    <div key={material.id} className="flex items-center justify-between p-3 bg-armeria-wood/10 rounded">
                      <div className="flex items-center">
                        <box className="h-4 w-4 mr-2 text-armeria-wood" />
                        <span>{material.name}</span>
                      </div>
                      <span className="font-medium">${material.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Materials;
