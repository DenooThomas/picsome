import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"

import "./styling.css"
import { ContextProvider } from "./context/Context"

import App from "./App"

const root = createRoot(document.getElementById("root"))
root.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
)
