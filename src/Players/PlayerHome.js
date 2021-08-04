import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const HomePlayer = ()=>{
    const [value,setValue] = useState('');
    const styleForm = {
        padding:0,
        marginTop:50
    };
    const styleInput = {
        display:'flex',
        justifyContent:'center'

    };
    const styleH1={
        textAlign:'center'
    };
    const history = useHistory();
    const teste2 = (e)=>{
        const destination = `/Player/${value}`
        if (e.key=== 'Enter') {            
            history.push(destination);
          }
    };
    

    return(
        <div style={styleForm}>
            <h1 style={styleH1}>Player</h1>
            <div style={styleInput}>            
                <div className="d-flex " >
                    <input className="form-control me-1"  id='input_Player' type="text" onKeyDown={(event)=>{teste2(event)}} placeholder="Nome do Jogador" aria-label="Search" onChange={e=>{setValue(e.target.value)}}></input>
                    <Link to={`/Player/${value}`} className="btn btn-outline-success" >Search</Link>
                </div>
            </div>
        </div>
    )
}
export default HomePlayer;