


import TechnologyandInnovation from './Pages/Techinnovation/TechnologyandInnovation';
import AccountandFinance from './Pages/Account_Finance/AccountandFinance';
import DigitalMarketing from './Pages/DigitalMarketing_Branding/DigitalMarketing';
import Aboutus from './Pages/AboutUs/Aboutus';
import Contactus from './Pages/Contactus/Contactus'
import Home from './Pages/Home/Home';
import FinTech from './Pages/FinTech/FinTech';
import IYConnect from './Pages/Home/IYConnect';
import Privacy from './Pages/Home/Privacy';
import BusinessSupport from './Pages/BusinessSupport/BusinessSupportConsultation';
import BusinessPersonalFinance from './Pages/BusinessPersonal/BusinessFinace';
import ScrollToTop from './Pages/ScrollToTop'

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/TechnologyandInnovation" element={<TechnologyandInnovation />} />
        <Route path="/AccountandFinance" element={<AccountandFinance />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/Fintech" element={<FinTech />} />
        <Route path="/IYConnect" element={<IYConnect />} />
        <Route path="/BusinessSupport" element={<BusinessSupport />} />
        <Route path="/BusinessPersonalFinance" element={<BusinessPersonalFinance />} />
        <Route path="/Privacy" element={<Privacy />} />

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
