import React from 'react';
import './nav_style.css';
import {
  Link
  
} from "react-router-dom";
class Navbar extends React.Component{
    render(){
      
        return(
         
          <nav className="navbar navbar-expand-lg navbar-light " id='nav-top' >
  <div className="container-fluid">
        <Link  className="navbar-brand" to='/'>Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link  className="nav-link nav-item" to='/Global'>Global</Link>
      <Link className="nav-link" to='/Server'>Server</Link>
      <Link className="nav-link" to='/Player'>Player</Link>
      </div>
    </div>
  </div>
</nav>
        )
    }
}

export default Navbar;