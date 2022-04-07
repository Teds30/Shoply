import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CartProvider from './context/CartProvider';
import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <CartProvider>
      <Router>

      <Header />
          <Routes>

          <Route exact path="/" element={<main><Items /></main>} />
            <Route exact path="/shop" element={<main><Items /></main>} />
            <Route path='/cart' element={ <main><Cart /></main>} />
          </Routes>

      </Router>
    </CartProvider>


  );
}

export default App;
