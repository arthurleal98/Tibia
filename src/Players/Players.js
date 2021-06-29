import { useEffect, useState } from "react";
import { Route, Switch,useRouteMatch, useLocation  } from "react-router-dom";
import Death from './tabs/Death';

import TabBar from './tabs/tabbar';
const Player = ()=>{
    const [player, setPlayer] = useState('')
    const [trava, setTrava] = useState(true);
    const [loading,setLoading] = useState(true)
    const location = useLocation();
    const testando =(location.pathname.match(/(p=).+/g)[0].slice(2));
    useEffect(()=>{
        
        const API = async()=>{
            try{
                setPlayer(testando)
                const response = await fetch(`https://api.tibiadata.com/v2/characters/${testando}.json`)
                const data = await response.json();
                console.log(data.characters)
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
    console.log(a)
    console.log(location.search)
    if(loading){
        return(		
            
            <div className="lds-ring" style={styleLoading}><div></div><div></div><div></div><div></div></div>
            
            )
    }
    else{
        if(trava){
            return(
                <div>
                    <h1>{player}</h1>
                        <TabBar location={a}/>

                        <Switch>
                            <Route  path={`${a}/Death`}>
                                <Death location = {a} />
                            </Route>                            
                        </Switch>
                </div>)
            }
        else{
            return(
                <div style={styleError}>
                    <h1>Jogador não encontrado</h1>
                </div>
            )
        }
    }
    
};
export default Player;