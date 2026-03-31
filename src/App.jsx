import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Achievements from './component/Achievements/Achievements';

const App = () => {
  return (
   
   <div>
    <Navbar />
    <Hero></Hero>
    <Achievements />
   </div>
   
  );
};

export default App;