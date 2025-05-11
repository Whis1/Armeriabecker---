
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ammo, getMaterialById } from '@/data/armoryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Ammo = () => {
  const formatMaterialName = (id: string) => {
    const material = getMaterialById(id);
    if (id === "scrap") return "Rottami";
    return material ? material.name : id;
  };

  // Mappa degli ID delle munizioni alle rispettive immagini
  const ammoImages: Record<string, string> = {
    "revolver_ammo": "/lovable-uploads/19ae788e-f70c-40e7-8638-31bd74f29e3e.png",
    "repeater_ammo": "/lovable-uploads/1e21ee64-b1e3-4347-aed3-4a86cd93aafa.png"
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
                    <div className="mr-4 w-12 h-12 flex items-center justify-center">
                      <AspectRatio ratio={1/1} className="bg-transparent">
                        <img 
                          src={ammoImages[ammoItem.id]} 
                          alt={ammoItem.name}
                          className="object-contain"
                        />
                      </AspectRatio>
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
