import Layout from '../components/Layout';
import About from '../components/website/About';
import Hero from '../components/website/Hero';

export default function Homepage() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
