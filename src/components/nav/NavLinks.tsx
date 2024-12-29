import React from 'react';

interface NavLinksProps {
  className?: string;
}

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const NavLinks = ({ className }: NavLinksProps) => (
  <div className={className}>
    {links.map((link) => (
      <a 
        key={link.href} 
        href={link.href} 
        className="text-gray-600 hover:text-blue-600"
      >
        {link.label}
      </a>
    ))}
  </div>
);

export default NavLinks;