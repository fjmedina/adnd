import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            Advertising Not Dead
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-blue-600 transition-colors">
              {language === 'es' ? 'Servicios' : 'Services'}
            </a>
            <a href="#cases" className="hover:text-blue-600 transition-colors">
              {language === 'es' ? 'Casos' : 'Cases'}
            </a>
            <a href="#team" className="hover:text-blue-600 transition-colors">
              {language === 'es' ? 'Equipo' : 'Team'}
            </a>
            <a href="#blog" className="hover:text-blue-600 transition-colors">
              Blog
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
            >
              <Globe size={20} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#services" className="hover:text-blue-600 transition-colors">
                {language === 'es' ? 'Servicios' : 'Services'}
              </a>
              <a href="#cases" className="hover:text-blue-600 transition-colors">
                {language === 'es' ? 'Casos' : 'Cases'}
              </a>
              <a href="#team" className="hover:text-blue-600 transition-colors">
                {language === 'es' ? 'Equipo' : 'Team'}
              </a>
              <a href="#blog" className="hover:text-blue-600 transition-colors">
                Blog
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </a>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
              >
                <Globe size={20} />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}