
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto py-6 border-t border-armeria-brass/30 bg-armeria-wood/90 text-armeria-paper">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-serif text-armeria-brass text-xl mb-2">Armeria dei fratelli Becker</p>
          <div className="flex space-x-4 my-2">
            <Link to="/" className="hover:text-armeria-brass transition-colors">Home</Link>
            <Link to="/weapons" className="hover:text-armeria-brass transition-colors">Armi</Link>
            <Link to="/components" className="hover:text-armeria-brass transition-colors">Componenti</Link>
            <Link to="/materials" className="hover:text-armeria-brass transition-colors">Materiali</Link>
          </div>
          <p className="text-sm text-armeria-paper/70 mt-4">&copy; {new Date().getFullYear()} Armeria Becker. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
