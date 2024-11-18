import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Team />
      <Testimonials />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;