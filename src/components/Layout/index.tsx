import React from 'react';
import Footer from './footer';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
