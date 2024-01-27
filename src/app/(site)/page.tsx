import React from 'react';
import About from './about';
import Contact from './contact';
import Hero from './hero';
import Portfolio from './portfolio';

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}
