import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana García',
    role: 'Marketing Director',
    company: 'Tech Solutions Chile',
    content: 'El equipo de Advertising Not Dead transformó completamente nuestra presencia digital. Su creatividad y enfoque estratégico nos ayudó a aumentar nuestras conversiones en un 150%.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Carlos Mendoza',
    role: 'CEO',
    company: 'Startup Innovadora',
    content: 'La personalización de su servicio es incomparable. Entienden perfectamente las necesidades específicas de cada cliente y entregan resultados excepcionales.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'María José Torres',
    role: 'Founder',
    company: 'Boutique Digital',
    content: 'Su enfoque en la generación de leads ha sido clave para nuestro crecimiento. En solo 6 meses, duplicamos nuestra base de clientes.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Historias de éxito de empresas que han transformado su presencia digital con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.content}"</p>

              <div className="absolute -z-10 top-4 left-4 text-9xl text-gray-100 pointer-events-none font-serif">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}