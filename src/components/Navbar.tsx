
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Navbar() {
  const location = useLocation();
  
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
            <Link
              to="/search"
              className={cn(
                "px-3 py-1 rounded-md text-sm font-medium transition-colors",
                location.pathname === "/search"
                  ? "bg-armeria-brass/20 text-armeria-brass"
                  : "hover:bg-armeria-brass/10 hover:text-armeria-brass"
              )}
            >
              Ricerca
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
