
import React from 'react';

const Branding: React.FC = () => {
  return (
    <a
      href="https://nebeo.studio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors text-primary/90 shadow-sm border border-primary/20 outline outline-1 outline-primary/30"
      aria-label="Visit Nebeo Studio"
    >
      by Nebeo Studio
    </a>
  );
};

export default Branding;
