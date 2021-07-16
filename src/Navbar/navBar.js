import React, { useState, } from 'react';

import './nav_style.css';
import {
  Link,
  
} from "react-router-dom";
const Navbar = ()=>{
    const [value,setValue]=useState('');   
        return(
         
          <nav className="navbar navbar-expand-lg navbar-light " id='nav-top' >
            <div className="container-fluid">
              <Link  className="navbar-brand" to='/'>Home</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link  className="nav-link nav-item" to='/Global'>Global</Link>
                  <Link className="nav-link" to='/Server'>Server</Link>
                  <Link className="nav-link" to='/Player'>Player</Link>
                </div>
                <form className="d-flex " >
                  <input className="form-control me-2" type="search" placeholder="Nome do Jogador" aria-label="Search" onChange={e=>{setValue(e.target.value)}}></input>
                  <button className="btn btn-outline-success" type="submit"><Link to={`/Player/${value}`}>Search</Link></button>
                </form>
              </div>
          
            </div>
          </nav>
        )
    
}

export default Navbar;