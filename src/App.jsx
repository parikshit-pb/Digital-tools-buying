import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Achievements from './component/Achievements/Achievements';
import Step from './component/Step/Step';


const App = () => {
  return (
   
   <div>
    <Navbar />
    <Hero></Hero>
    <Achievements />
    <Step />
   </div>
   
  );
};

export default App;