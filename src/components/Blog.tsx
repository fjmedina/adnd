import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Tendencias de Marketing Digital 2024',
    excerpt: 'Descubre las estrategias y tecnologías que definirán el marketing digital este año.',
    date: '2024-03-15',
    category: 'Tendencias',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Carolina Mendoza',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  },
  {
    title: 'Guía Completa de SEO Local',
    excerpt: 'Aprende a optimizar tu presencia local y aumenta tu visibilidad en búsquedas geográficas.',
    date: '2024-03-10',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Andrés Silva',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  },
  {
    title: 'El Poder del Marketing de Contenidos',
    excerpt: 'Estrategias efectivas para crear contenido que conecte con tu audiencia y genere conversiones.',
    date: '2024-03-05',
    category: 'Contenido',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Valentina Torres',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tendencias y estrategias para potenciar tu presencia digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('es-CL', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>

                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Leer más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Ver todos los artículos
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}