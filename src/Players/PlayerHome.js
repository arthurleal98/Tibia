import { useState } from "react";
import { Link } from "react-router-dom";
const HomePlayer = ()=>{
    const [value,setValue] = useState('');
    const styleForm = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:0
    };
    const teste =(e)=>{
        e.preventDefaults();
    }
    
    return(
        <div style={styleForm}>
            <form className="d-flex " onSubmit={teste}>
                  <input className="form-control me-1" type="search" placeholder="Nome do Jogador" aria-label="Search" onChange={e=>setValue(e.target.value)} onSubmit={teste}></input>
                  <button className="btn btn-outline-success" type="submit" ><Link to={`/Player/${value}`}>Search</Link></button>
                </form>
        </div>
    )
}
export default HomePlayer;