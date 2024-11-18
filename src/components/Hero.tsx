import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Impulsamos tus metas al siguiente nivel
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transformamos ideas en resultados medibles. Somos tu socio estratégico en marketing digital y publicidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
            >
              Comienza ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Ver casos de éxito
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" />
    </div>
  );
}