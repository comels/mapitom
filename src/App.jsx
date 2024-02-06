import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Test from './pages/Test';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/test" element={<Test />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;