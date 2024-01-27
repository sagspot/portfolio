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

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <About resume="/resume" about={about} />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}
