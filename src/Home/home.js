import React from 'react';
import './home.css';
import {
    Link
    
  } from "react-router-dom";
const Home = ()=>{
        
        const styleDiv={
            marginTop:'200px',
            justifyContent:'center',
            
            alignItems:'center',
            
            
        }
        const stylep={
            textAlign:'center',
            
        }
        const stylebutton={
            color:'white',
            textDecoration:'none'
        }
        return(
            <div style={styleDiv} id='home' className=''>
                <div style={stylep}>
                    <h1 >Seja bem-vindo às estatísticas do Tibia.</h1>
                    <div >
                        <p>Vem simbora que tu vai ver a doideira desse site</p>
                        <button className='btn btn-primary'><Link style={stylebutton}
                        to='/Global'>Estatísticas</Link></button>
                    </div>

                </div>
                
                
                
            </div>
            
            )
    
}
export default Home;