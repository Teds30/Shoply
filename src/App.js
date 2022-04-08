import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css';

import CartProvider from './context/CartProvider';
import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import ItemViewer from './components/ItemViewer/ItemViewer';

function App() {

  return (
    <CartProvider>
      <Router>

      <Header />
          <Routes>

          <Route exact path="/Shoply" element={<main><Items /></main>} />
            <Route path="/shop" element={<main><Items /></main>} />
            <Route path='/cart' element={ <main><Cart /></main>} />
            
            <Route path='/items/:id' element={ <main><ItemViewer /></main>} />
          </Routes>

      </Router>
    </CartProvider>


  );
}

export default App;
