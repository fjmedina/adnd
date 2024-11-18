import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Advertising Not Dead</h3>
            <p className="text-gray-400 mb-6">
              Transformamos ideas en resultados medibles para impulsar el crecimiento de tu negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-blue-400 transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-blue-400 transition-colors">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>Las Condes, Santiago, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>+56 2 2123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>contacto@advertisingnotdead.cl</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir las últimas noticias y actualizaciones.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} Advertising Not Dead. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}