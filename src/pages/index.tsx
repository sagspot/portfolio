import Layout from '../components/Layout';
import About from '../components/website/About';
import Contact from '../components/website/Contact';
import Hero from '../components/website/Hero';
import PortfolioComp from '../components/website/Portfolio';
import Testimonials from '../components/website/Testimonials';
import { client } from '../lib/client';
import { Portfolio, Testimonial } from '../types';

interface Props {
  projects: Portfolio[];
  testimonials: Testimonial[];
}

export default function Homepage(props: Props) {
  return (
    <Layout>
      <Hero />
      <About />
      <PortfolioComp data={props.projects} />
      <Testimonials data={props.testimonials} />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const projectQuery = `*[_type == 'project']{
    _id,
    title,
    description,
    github,
    previewUrl,
    "mainImage": mainImage.asset->url
  }`;
  const testimonialQuery = `*[_type == 'testimonial']{
    _id,
    name,
    text,
    "avatar":avatar.asset->url
}`;

  const projects = await client.fetch(projectQuery);
  const testimonials = await client.fetch(testimonialQuery);

  return {
    props: { projects, testimonials },
    revalidate: 1,
  };
}
