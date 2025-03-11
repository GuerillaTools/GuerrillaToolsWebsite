import React from 'react';
import { Github, Twitter, Send } from 'lucide-react';

interface HeaderProps {
  showHeader: boolean;
}

const Header: React.FC<HeaderProps> = ({ showHeader }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showHeader 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className="bg-black/80 backdrop-blur-md border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-green-400 font-bold tracking-wider text-xl">
            GUERILLA TOOLS
          </div>
          <div className="flex space-x-6">
            <a href="https://x.com/GuerrillaTool" className="text-gray-300 hover:text-green-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://t.me/GuerrillaTool" className="text-gray-300 hover:text-green-400 transition-colors">
              <Send size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;