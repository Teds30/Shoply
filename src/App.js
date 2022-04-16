import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import ItemViewer from './components/ItemViewer/ItemViewer';

// import IMPORT_DATA from './data_import';

function App() {

  // useEffect(()=> {

  //   const toImport = {...IMPORT_DATA}
  //   console.log(toImport)

  //   const importData = async () => {

  //     await fetch('https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/ShopItems.json',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify(toImport)
  //     })
  
  //   }

  //   importData()
    
  // }, [])

  return (
      <Router>

        <Routes>

          <Route exact path="/Shoply" element={<main><Items /></main>} />
          <Route path="/Shoply/shop" element={<main><Items /></main>} />
          <Route path='/Shoply/cart' element={<main><Cart /></main>} />

          <Route path='/Shoply/items/:id' element={<main><ItemViewer /></main>} />
        </Routes>

        <Header />

      </Router>
  );
}

export default App;
