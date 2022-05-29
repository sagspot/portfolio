import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import About from '../components/website/About';
import Contact from '../components/website/Contact';
import Hero from '../components/website/Hero';
import PortfolioComp from '../components/website/Portfolio';
import Testimonials from '../components/website/Testimonials';
import connectDB from '../lib/connectDB';
import { Portfolio } from '../models';
import { PortfolioType } from '../types/portfolio';

interface Props {
  portfolioData: PortfolioType[];
}

export default function Homepage(props: Props) {
  return (
    <Layout>
      <Hero />
      <About />
      <PortfolioComp data={props.portfolioData} />
      <Testimonials />
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

  const portfolioData = JSON.parse(JSON.stringify(portfolioRes));
  return { props: { portfolioData } };
}
