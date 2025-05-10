
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="vintage-card max-w-lg text-center animate-fade-in">
          <div className="wood-panel py-8 mb-6">
            <h1 className="text-5xl font-serif font-bold">404</h1>
            <p className="text-xl mt-2">Pagina Non Trovata</p>
          </div>
          
          <p className="text-armeria-dark/80 mb-8">
            Sembra che tu stia cercando un'arma o un componente che non è nel nostro catalogo. 
            Torna alla pagina principale per esplorare il nostro inventario.
          </p>
          
          <Button asChild className="bg-armeria-wood hover:bg-armeria-wood/80">
            <Link to="/">Torna all'Armeria</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
