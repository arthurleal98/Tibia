import React, {  useState, } from 'react';

import './nav_style.css';
import {
  Link, useHistory,
  
} from "react-router-dom";
const Navbar = ()=>{
    const [value,setValue]=useState(''); 
    const history = useHistory();
    const onEnter = (e)=>{
      const destination = `/Player/${value}`
      if (e.key=== 'Enter') {            
          history.push(destination);
          setValue('');
          document.getElementById('input_nav').value = '';
        }

    
    } 
    const sbmit =()=> {
        document.getElementById('input_nav').value = '';
        setValue('');

    }
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
                <div className="d-flex " >
                  <input className="form-control me-2" id='input_nav' type="text" onKeyDown={(event)=>{onEnter(event)}} placeholder="Nome do Jogador" aria-label="Search" onChange={e=>{setValue(e.target.value)}} ></input>
                  <Link to={`/Player/${value}`} className="btn btn-outline-success" onClick={()=>{sbmit()}}>Search</Link>
                </div>
              </div>
          
            </div>
          </nav>
        )
    
}

export default Navbar;