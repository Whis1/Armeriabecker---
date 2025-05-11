
import React from 'react';
import { materials } from '@/data/armoryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
                        <Box className="h-4 w-4 mr-2 text-armeria-wood/70" />
                        <span>{material.name}</span>
                      </td>
                      <td className="px-4 py-3 text-right">${material.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild className="bg-armeria-wood hover:bg-armeria-wood/80">
              <Link to="/">Torna in Home</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Materials;
