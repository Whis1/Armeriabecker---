
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Axe, Hammer, Package, Search, Crosshair } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const categories = [
    {
      title: "Armi",
      description: "Catalogo completo delle armi disponibili",
      icon: Axe,
      link: "/weapons",
      color: "bg-gradient-to-br from-armeria-wood to-armeria-dark"
    },
    {
      title: "Munizioni",
      description: "Munizioni per tutte le armi",
      icon: Crosshair,
      link: "/ammo",
      color: "bg-gradient-to-br from-armeria-dark to-armeria-brass/80"
    },
    {
      title: "Componenti",
      description: "Tutti i componenti per la fabbricazione",
      icon: Hammer,
      link: "/components",
      color: "bg-gradient-to-br from-armeria-brass/80 to-armeria-wood/90"
    },
    {
      title: "Materiali",
      description: "Listino dei materiali necessari",
      icon: Package,
      link: "/materials",
      color: "bg-gradient-to-br from-armeria-dark to-armeria-wood"
    }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12 text-center vintage-card animate-fade-in">
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Cerca armi, componenti, materiali..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-white/80 border-armeria-brass/30"
                autoFocus
              />
              <Button type="submit" className="bg-armeria-wood hover:bg-armeria-wood/80">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-armeria-wood">
              <span className="header-decoration">Armeria dei fratelli Becker</span>
            </h1>
            <p className="text-lg text-armeria-dark/80 max-w-2xl mx-auto">
              Il catalogo completo di armi, componenti e materiali per i tuoi progetti
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto p-4 md:p-6 rounded-lg border-2 border-armeria-brass/30 bg-armeria-paper/50 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <Link key={index} to={category.link} className="block h-full transform hover:scale-105 transition-transform">
                  <Card className={`h-full overflow-hidden border-0 shadow-md ${category.color} text-white`}>
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <category.icon className="h-10 w-10 mb-4" />
                      <h3 className="font-serif font-bold text-xl mb-2">{category.title}</h3>
                      <p className="text-sm text-white/80">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
