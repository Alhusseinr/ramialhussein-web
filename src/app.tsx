import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
// import Footer from './components/Footer';

const App = () => {
  return (
    <Box>
      <Header />
      <About />
      <Experience />
      <Resume />
    </Box>
  );
};

export default App;