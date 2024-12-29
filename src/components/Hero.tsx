import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroButton from './hero/HeroButton';
import HeroContent from './hero/HeroContent';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <HeroContent />
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;