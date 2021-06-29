import React, { useState, } from 'react';

import './nav_style.css';
import {
  Link
  
} from "react-router-dom";
const Navbar = ()=>{
    const [value,setValue]=useState('');
    const styleForm = {
      display:'flex'
    }
    
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
    <form class="form-inline my-2 my-lg-0" style={styleForm}>
      <input className="form-control mr-sm-2" type="search" placeholder="Nome do Jogador" aria-label="Search" onChange={e=>setValue(e.target.value)}></input>
      <Link to={`/Player/p=${value}`}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
    </form>
  </div>
</nav>
        )
    
}

export default Navbar;