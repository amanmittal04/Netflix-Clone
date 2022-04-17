import React from 'react';
import { BrowserRouter,Routes, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import NetFlixShow from './pages/NetFlixShow';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <ScrollToTop />
      <Routes>
        <Route  path='/' exact element={<Home/>} />
        <Route path='/netflix-show' exact element={<NetFlixShow/>} />
      </Routes>
      <Footer />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
