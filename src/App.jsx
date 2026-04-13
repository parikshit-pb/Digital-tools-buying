import React, { Suspense } from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Achievements from './component/Achievements/Achievements';

import Step from './component/Step/Step';
import Transparent from './component/Transparent/Transparent';

import Workflow from './component/workflow/Workflow';
import Tools from './component/tools/Tools';
import Footer from './component/Footer/Footer';

const fetchTools = async() => {
  const res = await fetch("/Data.json");
  return res.json();
}


const App = () => {
const toolsPromise = fetchTools();

  return (
   
   <div>
    <Navbar />
    <Hero />
    <Achievements />
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <Tools toolsPromise={toolsPromise} />
    </Suspense>
    
    <Step />
    <Transparent />
    <Workflow />
    <Footer />
   </div>
   
  );
};

export default App;