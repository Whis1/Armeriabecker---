
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { components, getMaterialById, getComponentById } from '@/data/armoryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hammer, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Components = () => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

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

  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(g => g !== groupName) 
        : [...prev, groupName]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="vintage-card mb-8 animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-8 text-center text-armeria-wood">
            <span className="header-decoration">Catalogo Componenti</span>
          </h1>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            <Accordion type="multiple" className="w-full">
              {Object.entries(groupedComponents).map(([name, variants], groupIndex) => (
                <AccordionItem key={name} value={name} className="vintage-card mb-4 border-none overflow-hidden">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline">
                    <div className="flex items-center">
                      <div className="bg-armeria-wood/90 text-white p-2 rounded-md mr-3">
                        <Hammer className="h-5 w-5" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-armeria-wood">{name}</h2>
                      <Badge variant="outline" className="ml-3 bg-armeria-brass/20 text-armeria-dark">
                        {variants.length}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-4 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {variants.map((component, index) => (
                        <Card key={`${component.id}-${index}`} className="bg-armeria-paper/90 border border-armeria-brass/20 shadow-sm hover:shadow-md transition-all duration-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-serif text-armeria-dark flex items-center">
                              {component.variant ? `${component.name} (${component.variant})` : component.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p className="font-medium text-armeria-dark/90">Materiali necessari:</p>
                              <ul className="list-disc list-inside text-sm text-armeria-dark/80 space-y-1">
                                {component.materials.map((material, matIndex) => (
                                  <li key={matIndex} className="pl-1">
                                    <span className="font-medium">{material.quantity}x</span> {formatResourceName(material)}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

export default Components;
