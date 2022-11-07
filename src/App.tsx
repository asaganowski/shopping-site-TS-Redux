import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
  HashRouter,
  Navigate 
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from './components/PageNotFound/PageNotFound';
import Cart from './components/Cart/Cart';


function App() {

  
  
  return (
    <div className="app">
      <HashRouter>
        
        <Navbar/>
        
        <div className="page">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shopping-cart' element={<Cart />}/>
            <Route path='/page-not-found' element={<PageNotFound />}/>
            <Route
              path="/*"
              element={<Navigate to="/page-not-found" replace />}
            />
          </Routes>
        </div>

      </HashRouter>
    </div>
  );
}

export default App;
