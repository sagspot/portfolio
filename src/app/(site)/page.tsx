import Sanity from '@/lib/data';
import React from 'react';
import About from './about';
import Contact from './contact';
import Hero from './hero';
import Portfolio from './portfolio';

const client = new Sanity();

export default async function Page() {
  const projects = await client.getProjects();
  const resume = await client.getResume();
  const about = await client.getAbout();

  return (
    <React.Fragment>
      <Hero />
      <About resume={resume} about={about} />
      <Portfolio projects={projects} />
      <Contact />
    </React.Fragment>
  );
}
