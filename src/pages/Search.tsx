
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { searchItems } from '@/services/searchService';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchTerm(query);
      const searchResults = searchItems(query);
      setResults(searchResults);
    }
  }, [location.search]);
  
  // Ricerca istantanea mentre l'utente digita
  useEffect(() => {
    if (searchTerm.length > 0) {
      const searchResults = searchItems(searchTerm);
      setResults(searchResults);
      
      // Aggiorna l'URL con il termine di ricerca
      const params = new URLSearchParams();
      params.set('q', searchTerm);
      window.history.replaceState({}, '', `${location.pathname}?${params}`);
    } else {
      setResults([]);
    }
  }, [searchTerm, location.pathname]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // La ricerca è già stata eseguita attraverso l'useEffect
  };
  
  const getCategoryName = (category: string) => {
    switch(category) {
      case 'weapons': return 'Armi';
      case 'components': return 'Componenti';
      case 'materials': return 'Materiali';
      case 'ammo': return 'Munizioni';
      default: return 'Altro';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="vintage-card mb-8 animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-6 text-center text-armeria-wood">
            <span className="header-decoration">Database dell'Armeria</span>
          </h1>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Cerca armi, componenti, materiali..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-white/80"
                autoFocus
              />
              <Button type="submit" className="bg-armeria-wood hover:bg-armeria-wood/80">
                <SearchIcon className="h-4 w-4 mr-2" />
                Cerca
              </Button>
            </div>
          </form>
          
          <div className="mt-8">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((item, index) => (
                  <Card key={index} className="overflow-hidden vintage-card animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif font-bold text-lg text-armeria-wood">
                          {item.variant ? `${item.name} (${item.variant})` : item.name}
                          {item.count ? ` x${item.count}` : ''}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-armeria-brass/20 rounded-full text-armeria-dark">
                          {getCategoryName(item.category)}
                        </span>
                      </div>
                      
                      {item.price !== undefined && (
                        <p className="text-sm font-medium text-armeria-dark">
                          Prezzo: ${item.price.toFixed(2)}
                        </p>
                      )}
                      
                      {item.materials && (
                        <div className="mt-2">
                          <p className="text-sm font-medium text-armeria-dark">Materiali:</p>
                          <ul className="text-sm list-disc list-inside text-armeria-dark/80">
                            {item.materials.map((mat: any, matIndex: number) => (
                              <li key={matIndex}>
                                {mat.quantity}x {mat.materialId ? formatMaterialName(mat.materialId) : ''}
                                {mat.componentId ? getComponentById(mat.componentId)?.name || mat.componentId : ''}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {item.components && (
                        <div className="mt-2">
                          <p className="text-sm font-medium text-armeria-dark">Componenti:</p>
                          <ul className="text-sm list-disc list-inside text-armeria-dark/80">
                            {item.components.map((comp: any, compIndex: number) => (
                              <li key={compIndex}>
                                {comp.quantity}x {getComponentById(comp.componentId)?.name || comp.componentId}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                {searchTerm ? (
                  <p className="text-armeria-dark/80">Nessun risultato trovato per "{searchTerm}"</p>
                ) : (
                  <p className="text-armeria-dark/80">Inizia la ricerca digitando un termine nella barra sopra</p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
