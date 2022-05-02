import React, { Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'
import './App.css'

import Header from './components/Layout/Header'
// import Items from './components/Items/Items'
// import Cart from './components/Cart/Cart'
// import ItemViewer from './components/ItemViewer/ItemViewer'
import Checkout from './components/Checkout/Checkout'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import PlacedOrder from './components/Checkout/sections/page_status/PlacedOrder'

const ItemViewer = React.lazy(() =>
    import('./components/ItemViewer/ItemViewer')
)
const Items = React.lazy(() => import('./components/Items/Items'))
const Cart = React.lazy(() => import('./components/Cart/Cart'))

const App = () => {
    return (
        <Router>
            <Suspense
                fallback={
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                }
            >
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/items" />}
                    />
                    <Route
                        path="/items"
                        element={
                            <main>
                                <Items />
                            </main>
                        }
                    />

                    <Route
                        path="/items/:id"
                        element={
                            <main>
                                <ItemViewer />
                            </main>
                        }
                    />

                    <Route
                        path="/cart"
                        element={
                            <main>
                                <Cart />
                            </main>
                        }
                    />

                    <Route
                        path="/checkout"
                        element={
                            <main>
                                <Checkout />
                            </main>
                        }
                    >
                        {/* <Route path="/" element={<Checkout />} /> */}
                        <Route path="placed_order" element={<PlacedOrder />} />
                    </Route>

                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
