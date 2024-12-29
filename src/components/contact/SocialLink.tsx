import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

const SocialLink = ({ icon: Icon, title, content }: SocialLinkProps) => (
  <div className="flex items-start">
    <Icon className="h-6 w-6 text-blue-600 mt-1" />
    <div className="ml-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {content}
    </div>
  </div>
);

export default SocialLink;