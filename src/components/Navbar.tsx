import React from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import NavLinks from './nav/NavLinks';
import MobileMenu from './nav/MobileMenu';
import Logo from './nav/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Logo />
          <NavLinks className="hidden md:flex items-center space-x-8" />
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;