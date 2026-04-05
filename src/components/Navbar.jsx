import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu-1' },
    { name: 'About', path: '/about' },
    { name: 'Chef', path: '/chef' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reservation', path: '/reservation' },
  ];

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/eleve2.png" alt="ÉLEVÉ Logo" className="w-auto h-24 object-contain drop-shadow-lg" />
              <span className="text-4xl font-heading text-white tracking-widest leading-none">ÉLEVÉ</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                    isActive ? 'text-gold font-bold' : 'text-light'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* Reservation combined in main links now, but keeping original CTA structure if user prefers, though they requested Reservation be in sequence. Removed separate Book CTA in desktop since it's in nav sequence */}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card absolute w-full left-0 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-light hover:text-gold uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
              {/* Kept out Book a table block as it is inside links */}
          </div>
        </div>
      )}
    </nav>
  );
}
