import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
import './App.css';

import CartProvider from './context/CartProvider';
import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import ItemViewer from './components/ItemViewer/ItemViewer';

// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import Paper from '@mui/material/Paper';
// import HomeIcon from '@mui/icons-material/Home';


function App() {
  // const [value, setValue] = useState(0);


  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <CartProvider>
      <Router>

        <Routes>

          <Route exact path="/Shoply" element={<main><Items /></main>} />
          <Route path="/Shoply/shop" element={<main><Items /></main>} />
          <Route path='/Shoply/cart' element={<main><Cart /></main>} />

          <Route path='/Shoply/items/:id' element={<main><ItemViewer /></main>} />
        </Routes>

        <Header />
        {/* {!isMobile ? (<Header />) :
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Home" icon={<HomeIcon />} />
              <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
            </BottomNavigation>
          </Paper>
        } */}

      </Router>
    </CartProvider>


  );
}

export default App;
