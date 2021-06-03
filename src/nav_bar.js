import React from 'react';
import './nav_style.css';
import {
  Link
  
} from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
            <nav id='nav-top' className="navbar navbar-expand-lg navbar-dark ">
  <div className="">
    <Link className="navbar-brand" to='/'>Tibia</Link>
    
    <div className="" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/Global'>Home</Link>
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Server222'>Servers</Link>
        </li>
        <li className='nav-item'>
          <Link to='/Players'>Player</Link>
        </li>
        
      </ul>
    </div>
    
  </div>
</nav>
        )
    }
}

export default Navbar;