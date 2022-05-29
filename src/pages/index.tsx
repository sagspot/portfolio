import Layout from '../components/Layout';
import About from '../components/website/About';
import Contact from '../components/website/Contact';
import Hero from '../components/website/Hero';
import PortfolioComp from '../components/website/Portfolio';
import Testimonials from '../components/website/Testimonials';
import connectDB from '../lib/connectDB';
import { Portfolio, Testimonial } from '../models';
import { PortfolioType, TestimonialType } from '../types';

interface Props {
  portfolioData: PortfolioType[];
  testimonialData: TestimonialType[];
}

export default function Homepage(props: Props) {
  return (
    <Layout>
      <Hero />
      <About />
      <PortfolioComp data={props.portfolioData} />
      <Testimonials data={props.testimonialData} />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  await connectDB();

  const options = {
    title: 1,
    img: 1,
    desc: 1,
    source: 1,
    url: 1,
    createdAt: 1,
  };

  const portfolioRes = await Portfolio.find({}, options)
    .sort({ createdAt: -1 })
    .limit(3);

  const testimonialRes = await Testimonial.find({}).sort({ createdAt: -1 });

  const portfolioData = JSON.parse(JSON.stringify(portfolioRes));
  const testimonialData = JSON.parse(JSON.stringify(testimonialRes));
  return { props: { portfolioData, testimonialData } };
}
