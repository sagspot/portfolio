import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './footer';
import NavBar from './NavBar';

const Layout = (props: any) => {
  return (
    <>
      <NavBar />
      <Box as="main" minH="calc(100vh - 115px)" {...props}>
        {props.children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
