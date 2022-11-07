import React from 'react'
import {
  NavLink,
  Link
} from "react-router-dom";
import "./Navbar.scss";
import { CartIcon } from '../../icons/CartIcon';

function Navbar() {


  return (
    <div className="navbar">
      <div className="navbar-content">

        <Link to="/"> 
            <h3 className="appName">Store</h3>
        </Link>

        <ul className={`header `} >
          
          <li><NavLink end to ="/" >Home</NavLink></li>

          <li>
            <NavLink to="/shopping-cart" >
              <CartIcon quantityVisibility={true} viewBox="0 0 20 20"/>
            </NavLink>
          </li>
        
        </ul>

      </div>

    </div>
  )
}

export default Navbar