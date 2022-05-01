import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'
import './App.css'

import Items from './components/Items/Items'
import Header from './components/Layout/Header'
import Cart from './components/Cart/Cart'
import ItemViewer from './components/ItemViewer/ItemViewer'
import Checkout from './components/Checkout/Checkout'

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    exact
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
                />

                <Route path="*" element={<Navigate replace to="/items" />} />
            </Routes>

            <Header />
        </Router>
    )
}

export default App
