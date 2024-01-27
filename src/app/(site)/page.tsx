import type { IPortfolio } from '@/types';
import React from 'react';
import About from './about';
import Contact from './contact';
import Hero from './hero';
import Portfolio from './portfolio';

const about = `I am a professional self-taught software developer based in Nairobi,
Kenya. I create beautiful professional websites using best practice
accessibility. I enjoy turning complex problems into simple,
beautiful and intuitive interface designs. I am passionate about
transforming lives through tech. I believe tech should ultimately
make life easier`;

const projects: IPortfolio[] = [
  {
    _id: '1',
    title: 'Portfolio',
    description: 'My personal portfolio website',
    github: 'https://github.com/sagspot',
    mainImage: '/no-image.jpg',
    previewUrl: 'https://sagspot.co.ke',
  },
  {
    _id: '2',
    title: 'Project 2',
    description: 'My personal portfolio website',
    // github: 'https://github.com/sagspot',
    mainImage: '/no-image.jpg',
    previewUrl: 'https://sagspot.co.ke',
  },
  {
    _id: '3',
    title: 'Project 3',
    description: 'My personal portfolio website',
    github: 'https://github.com/sagspot',
    mainImage: '/no-image.jpg',
    // previewUrl: 'https://sagspot.co.ke',
  },
  {
    _id: '4',
    title: 'Project 4',
    description: 'My personal portfolio website',
    // github: 'https://github.com/sagspot',
    mainImage: '/no-image.jpg',
    // previewUrl: 'https://sagspot.co.ke',
  },
];

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <About resume="/resume" about={about} />
      <Portfolio projects={projects} />
      <Contact />
    </React.Fragment>
  );
}
