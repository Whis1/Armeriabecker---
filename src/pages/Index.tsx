
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Axe, Hammer, Package, Database } from 'lucide-react';

const Index = () => {
  const categories = [
    {
      title: "Armi",
      description: "Catalogo completo delle armi disponibili",
      icon: Axe,
      link: "/weapons",
      color: "bg-gradient-to-br from-armeria-wood to-armeria-dark"
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
    },
    {
      title: "Database Completo",
      description: "Consulta tutto il nostro catalogo",
      icon: Database,
      link: "/search",
      color: "bg-gradient-to-br from-armeria-brass/70 to-armeria-dark/90"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12 text-center vintage-card animate-fade-in">
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
        
        <section className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="vintage-card p-8">
            <h2 className="text-3xl font-serif font-bold mb-4 text-armeria-wood">Esplora il Database</h2>
            <p className="text-armeria-dark/80 mb-6 max-w-2xl mx-auto">
              Scopri tutti i dettagli delle nostre armi, componenti e materiali necessari per la fabbricazione.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-armeria-wood hover:bg-armeria-wood/80 text-white">
                <Link to="/weapons">Catalogo Armi</Link>
              </Button>
              <Button asChild variant="outline" className="border-armeria-brass hover:bg-armeria-brass/10">
                <Link to="/search">Ricerca Avanzata</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
