import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'Revolución Digital Retail',
    client: 'MegaTienda Chile',
    category: 'E-commerce',
    metrics: [
      { label: 'Aumento en ventas', value: '180%' },
      { label: 'Conversión', value: '4.2%' },
      { label: 'ROI', value: '320%' }
    ],
    description: 'Transformación completa de estrategia digital para principal retailer chileno.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Campaña Inmobiliaria Digital',
    client: 'Grupo Inmobiliario Sur',
    category: 'Real Estate',
    metrics: [
      { label: 'Leads generados', value: '450+' },
      { label: 'Costo por lead', value: '-40%' },
      { label: 'Ventas cerradas', value: '85' }
    ],
    description: 'Estrategia integral de marketing digital para proyecto inmobiliario premium.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Expansión Startup Tech',
    client: 'InnovateCL',
    category: 'Technology',
    metrics: [
      { label: 'Usuarios activos', value: '+245%' },
      { label: 'Engagement', value: '+160%' },
      { label: 'Brand mentions', value: '12K+' }
    ],
    description: 'Campaña de growth hacking para startup tecnológica en expansión regional.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="cases" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((case_, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 grid md:grid-cols-2 gap-8"
                >
                  <div className="relative h-[300px] md:h-[400px]">
                    <img
                      src={case_.image}
                      alt={case_.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-lg" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="text-blue-400 text-sm font-medium mb-2 block">
                        {case_.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{case_.title}</h3>
                      <p className="text-gray-400 mb-6">{case_.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {case_.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      Ver caso completo
                      <ArrowUpRight className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}