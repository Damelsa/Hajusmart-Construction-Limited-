import React from 'react';
import { Building2, Ruler, Users, Wrench } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Structural Engineering',
    description: 'Expert structural design and analysis for buildings of all sizes, ensuring safety and efficiency.',
  },
  {
    icon: Ruler,
    title: 'Project Management',
    description: 'Comprehensive project management services to deliver your projects on time and within budget.',
  },
  {
    icon: Users,
    title: 'Consultation',
    description: 'Professional consultation services to help you make informed decisions about your construction projects.',
  },
  {
    icon: Wrench,
    title: 'Design & Build',
    description: 'Integrated design and build services that streamline the construction process.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for all your engineering needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;