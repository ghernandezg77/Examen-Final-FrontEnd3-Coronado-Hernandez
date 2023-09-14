import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom";
import './index.css';
import { AppProvider } from './Context/AppContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
    <App />
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)