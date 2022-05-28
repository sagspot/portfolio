import Layout from '../components/Layout';
import About from '../components/website/About';
import Contact from '../components/website/Contact';
import Hero from '../components/website/Hero';
import Testimonials from '../components/website/Testimonials';

export default function Homepage() {
  return (
    <Layout>
      <Hero />
      <About />
      {/* <Testimonials /> */}
      <Contact />
    </Layout>
  );
}
