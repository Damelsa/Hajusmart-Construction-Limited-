import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import SocialLink from './SocialLink';

const ContactInfo = () => (
  <div className="space-y-8">
    <SocialLink
      icon={MapPin}
      title="Our Location"
      content={<p className="text-gray-600">123 Engineering Way<br />Construction City, ST 12345</p>}
    />
    
    <SocialLink
      icon={Phone}
      title="Phone"
      content={
        <a 
          href="tel:+2348140769333" 
          className="text-gray-600 hover:text-blue-600"
        >
          +234 814 076 9333
        </a>
      }
    />

    <SocialLink
      icon={MessageCircle}
      title="WhatsApp"
      content={
        <a 
          href="https://wa.me/2349033645851" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          +234 903 364 5851
        </a>
      }
    />
    
    <SocialLink
      icon={Instagram}
      title="Instagram"
      content={
        <a 
          href="https:/www.instagram.com/engrjulius_/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          engrjulius_
        </a>
      }
    />

    <SocialLink
      icon={Facebook}
      title="Facebook"
      content={
        <a 
          href="https://www.facebook.com/share/FfAGF7KWLPk4tCLZ/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          Haju Smart Construction Limited
        </a>
      }
    />
    
    <SocialLink
      icon={Mail}
      title="Email"
      content={
        <a 
          href="mailto:hajusmart.const.ltd@gmail.com"
          className="text-gray-600 hover:text-blue-600"
        >
          hajusmart.const.ltd@gmail.com
        </a>
      }
    />
  </div>
);

export default ContactInfo;