import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroButton = () => (
  <a 
    href="#contact"
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
  >
    Get Started
    <ArrowRight className="ml-2 h-5 w-5" />
  </a>
);

export default HeroButton;