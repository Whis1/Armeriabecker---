
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ammo, getMaterialById } from '@/data/armoryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Package } from 'lucide-react';

const Ammo = () => {
  const formatMaterialName = (id: string) => {
    const material = getMaterialById(id);
    if (id === "scrap") return "Rottami";
    return material ? material.name : id;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="vintage-card mb-8 animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-6 text-center text-armeria-wood">
            <span className="header-decoration">Catalogo Munizioni</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ammo.map((ammoItem, index) => (
              <Card key={ammoItem.id} className="vintage-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="bg-armeria-wood/80 text-white p-2 rounded-md mr-3">
                      <Package className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-bold text-lg">
                      {ammoItem.name} x{ammoItem.count}
                    </h3>
                  </div>
                  
                  <div>
                    <p className="font-medium text-armeria-dark mb-2">Materiali necessari:</p>
                    <ul className="list-disc list-inside text-sm text-armeria-dark/80">
                      {ammoItem.materials.map((material, matIndex) => (
                        <li key={matIndex}>
                          {material.quantity}x {formatMaterialName(material.materialId)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
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

export default Ammo;
