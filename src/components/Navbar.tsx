
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Navbar() {
  const location = useLocation();
  
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
            <a
              href="https://discord.gg/nhDCbzVd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-md text-sm font-medium transition-colors bg-[#5865F2] hover:bg-[#4752c4] text-white"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
