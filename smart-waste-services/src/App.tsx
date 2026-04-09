import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceAreas from './components/ServiceAreas';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
