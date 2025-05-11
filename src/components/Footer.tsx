
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto py-6 border-t border-armeria-brass/30 bg-armeria-wood/90 text-armeria-paper">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-serif text-armeria-brass text-xl mb-2">Armeria dei fratelli Becker</p>
          <div className="my-2">
            <a 
              href="https://westernlegends.it/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block"
            >
              <span 
                className="font-bold text-xl tracking-wider transition-transform hover:scale-105"
                style={{ 
                  fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
                  color: '#ea384c',
                  textShadow: '2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
                  letterSpacing: '0.5px',
                  transform: 'skew(-5deg)'
                }}
              >
                WESTERN LEGENDS
              </span>
            </a>
          </div>
          <p className="text-sm text-armeria-paper/70 mt-4">&copy; {new Date().getFullYear()} Armeria Becker. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
