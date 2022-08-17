import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Gallery from "./pages/Gallery/Gallery"
import Cart from "./pages/Cart/Cart"


function App() {
    
    return (
        <React.Fragment>
            <Header />
            <div className="main-cont">
                <Routes>
                    <Route 
                        path="/" 
                        element={<Gallery />}
                        />
                    <Route 
                        path="cart" 
                        element={<Cart />}
                        />
                </Routes>
            </div>
        </React.Fragment>
    )
}

export default App