
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { components, getMaterialById, getComponentById } from '@/data/armoryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hammer } from 'lucide-react';

const Components = () => {
  const formatMaterialName = (id: string) => {
    const material = getMaterialById(id);
    return material ? material.name : id;
  };

  // Funzione helper per gestire componente o materiale
  const formatResourceName = (item: { materialId?: string; componentId?: string }) => {
    if (item.materialId) {
      return formatMaterialName(item.materialId);
    }
    if (item.componentId) {
      const component = getComponentById(item.componentId);
      return component ? component.name : item.componentId;
    }
    return "Risorsa Sconosciuta";
  };

  const groupedComponents = components.reduce((acc: Record<string, typeof components>, component) => {
    const nameKey = component.name;
    if (!acc[nameKey]) {
      acc[nameKey] = [];
    }
    acc[nameKey].push(component);
    return acc;
  }, {});

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="vintage-card mb-8 animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-6 text-center text-armeria-wood">
            <span className="header-decoration">Catalogo Componenti</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(groupedComponents).map(([name, variants], groupIndex) => (
              <div key={name} className="animate-fade-in" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
                <h2 className="text-2xl font-serif font-bold mb-4 text-armeria-wood">{name}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {variants.map((component, index) => (
                    <Card key={`${component.id}-${index}`} className="vintage-card">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <div className="bg-armeria-wood/80 text-white p-2 rounded-md mr-3">
                            <Hammer className="h-5 w-5" />
                          </div>
                          <h3 className="font-serif font-medium text-lg">
                            {component.variant ? `${component.name} (${component.variant})` : component.name}
                          </h3>
                        </div>
                        
                        <div className="mt-3">
                          <p className="font-medium text-armeria-dark mb-2">Materiali necessari:</p>
                          <ul className="list-disc list-inside text-sm text-armeria-dark/80">
                            {component.materials.map((material, matIndex) => (
                              <li key={matIndex}>
                                {material.quantity}x {formatResourceName(material)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Components;
