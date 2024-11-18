import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Diego Ramírez',
    role: 'Director Ejecutivo',
    bio: 'Ex-Director de Marketing en agencias globales. +15 años de experiencia en estrategia digital.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'diego@advertisingnotdead.cl'
    }
  },
  {
    name: 'Valentina Torres',
    role: 'Directora Creativa',
    bio: 'Premiada diseñadora con experiencia en campañas para marcas líderes en Latinoamérica.',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'valentina@advertisingnotdead.cl'
    }
  },
  {
    name: 'Andrés Silva',
    role: 'Director de Estrategia',
    bio: 'Especialista en growth marketing con enfoque en métricas y optimización de conversión.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'andres@advertisingnotdead.cl'
    }
  },
  {
    name: 'Carolina Mendoza',
    role: 'Head of Digital',
    bio: 'Experta en marketing digital y paid media. Certificada en Google Ads y Meta Ads.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'carolina@advertisingnotdead.cl'
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un equipo de expertos apasionados por crear estrategias que impulsan el crecimiento de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-300 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-white/80 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-white/80 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}