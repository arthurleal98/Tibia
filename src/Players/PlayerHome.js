import { useState } from "react";
import { Link } from "react-router-dom";
const HomePlayer = ()=>{
    const [value,setValue] = useState('');
    const styleForm = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:400,
        padding:0
    };
    
    return(
        <div style={styleForm}>
            <form >
                <input  placeholder='Nome do Jogador' onChange={e=>setValue(e.target.value)}></input>
                <Link to={`/Player/p=${value}`}><button type='submit'>asddasd</button></Link>
            </form>
        </div>
    )
}
export default HomePlayer;