import React from 'react';
import Layout from '../components/Layout';
import PortfolioPageComp from '../components/website/portfolioPage';
import connectDB from '../lib/connectDB';
import { Portfolio } from '../models';
import { PortfolioType } from '../types';

interface Props {
  portfolioData: PortfolioType[];
}

const PortfolioPage = ({ portfolioData }: Props) => {
  return (
    <Layout>
      <PortfolioPageComp portfolio={portfolioData} />
    </Layout>
  );
};

export default PortfolioPage;

export async function getStaticProps() {
  await connectDB();

  const portfolioRes = await Portfolio.find({}).sort({ createdAt: -1 });

  const portfolioData = JSON.parse(JSON.stringify(portfolioRes));

  return { props: { portfolioData }, revalidate: 1 };
}
