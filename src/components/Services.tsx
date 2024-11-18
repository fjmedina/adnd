import { Target, Lightbulb, TrendingUp, Users, Megaphone, BarChart } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Estrategia Digital',
    description: 'Desarrollamos estrategias personalizadas para alcanzar tus objetivos de negocio.'
  },
  {
    icon: Lightbulb,
    title: 'Creatividad & Diseño',
    description: 'Creamos contenido visual impactante que conecta con tu audiencia.'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Optimizamos tu presencia online para maximizar el retorno de inversión.'
  },
  {
    icon: Users,
    title: 'Social Media',
    description: 'Gestionamos tus redes sociales para construir una comunidad engaged.'
  },
  {
    icon: Megaphone,
    title: 'Publicidad Digital',
    description: 'Campañas publicitarias efectivas en Google, Meta y LinkedIn.'
  },
  {
    icon: BarChart,
    title: 'Análisis & Reportes',
    description: 'Medimos y optimizamos constantemente para mejorar resultados.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales de marketing y publicidad diseñadas para impulsar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}