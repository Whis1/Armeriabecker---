
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Armi', path: '/weapons' },
    { name: 'Componenti', path: '/components' },
    { name: 'Materiali', path: '/materials' },
  ];

  return (
    <nav className="border-b border-armeria-brass/30 bg-armeria-wood/90 text-armeria-paper py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-armeria-brass">
              Armeria Becker
            </span>
          </Link>
          
          <div className="flex items-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-1 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-armeria-brass/20 text-armeria-brass"
                    : "hover:bg-armeria-brass/10 hover:text-armeria-brass"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <form onSubmit={handleSearchSubmit} className="flex items-center w-full md:w-auto">
            <div className="relative w-full md:w-auto flex">
              <Input
                type="text"
                placeholder="Cerca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-armeria-paper/80 text-armeria-dark w-full md:w-64"
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4 text-armeria-dark" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
