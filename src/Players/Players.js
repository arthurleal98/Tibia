import { useEffect, useState } from "react";
import { Route, Switch,useRouteMatch, useLocation  } from "react-router-dom";
import Death from './tabs/Death';
import Achievement from "./tabs/achievement";
import { Link } from "react-router-dom";
import HomePlayer from "./PlayerHome";
import Data from "./tabs/data";
const Player = ()=>{
    const [player, setPlayer] = useState('')
    const [trava, setTrava] = useState(true);
    const [loading,setLoading] = useState(true);
    const [dados, setDados] =useState('');
    const location = useLocation();

    const route = useRouteMatch();
    const testando =route.url.split('/')[2];
    
    useEffect(()=>{
        
        const API = async()=>{
            try{
                setPlayer(testando)
                const response = await fetch(`https://api.tibiadata.com/v2/characters/${testando}.json`)
                const data = await response.json();
                setDados(data.characters)
                console.log(Object.keys(data.characters))
                
                if(Object.keys(data.characters)[0]==='error'){
                    setTrava(false)
                }
                

            }
            catch(e){
                console.log(e)
            }
            finally{
                setLoading(false)
            }
        }
        API();
    },[testando])
    const styleLoading = {
        display:'flex',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'100px'
    }
    const styleError={
        textAlign:'center',
        marginTop:'100px'
    }
    const a = useRouteMatch().url
    const styleMain = {
        width:'60%',
        marginLeft:'auto',
        marginRight:'auto',
        textAlign:'center',
        marginTop:'100px'
    }
    const styleUl = {
        display:'flex',
        padding:'0px'
    }
    const styleTeste = {
        backgroundColor:'red',
        marginTop:'30px',
        height:'300px'
    }
    const styleLi={
        backgroundColor:'red',
        
    }
    const styleLink={
        width:'100%'
    }
    if(loading){
        return(		
            
            <div className="lds-ring" style={styleLoading}><div></div><div></div><div></div><div></div></div>
            
            )
    }
    else{
        if(trava){
            return(
                <div style={styleMain}>
                    <ul style={styleUl}>
                        <li style={styleLi} className='teste col-4'><Link style={styleLink} to={`${a}`}>Data</Link></li>

                        <li style={styleLi} className='teste col-4'><Link style={styleLink} to={`${a}/Death`}>Death</Link></li>
                        <li  style={styleLi} className='teste col-4'><Link style={styleLink} to={`${a}/Achievement`}>Achievement</Link></li>
                    </ul>
                    <div style={styleTeste}>
                        <Switch >  
                            <Route  exact path={`${a}/`}>
                                <Data/>
                            </Route>                          
                            <Route  path={`${a}/Death`}>
                                <Death dados={dados} />
                            </Route>
                            <Route path={`${a}/Achievement`}>
                                <Achievement dados={dados}/>
                            </Route>                            
                        </Switch>
                    </div>
                </div>)
            }
        else{
            return(
                <div style={styleError}>
                    <h1>Jogador não encontrado</h1>
                    <Link to={`/Player`}><button className="btn btn-primary" type="submit" >Voltar</button></Link>

                </div>
            )
        }
    }
    
};
export default Player;