import { useEffect, useState } from "react";
import { Route, Switch,useHistory,useRouteMatch} from "react-router-dom";
import Death from './tabs/death';
import Achievement from "./tabs/achievement";
import { Link } from "react-router-dom";
import Data from "./tabs/data";
const Player = ()=>{
    const [player, setPlayer] = useState('')
    const [trava, setTrava] = useState(true);
    const [loading,setLoading] = useState(true);
    const [dados, setDados] =useState('');

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
    },[testando]);
    const a = useRouteMatch().url;

    const styleLoading = {
        display:'flex',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'100px',

    }
    const styleError={
        textAlign:'center',
        marginTop:'100px'
    }
    const styleMain={
        width:'90%',
        height:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        textAlign:'center',
        marginTop:'50px',
        marginBottom:'100px',
    }
    const styleUl = {
        display:'flex',
        padding:'0px',
        justifyContent:'center',
        width:'100%',
        height:60
    }
    
    const styleLi={
        backgroundColor:'#548CA8', 
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        

        
    }
    const styleLink={
        color:'white',
        fontSize:'20px',
        backgroundColor:'#A2DBFA',
        display:'block',
        textDecoration:'none',
        width:'100%',

    }
    const styleInfo ={
        marginTop:'40px',
        paddingBottom:20,
        marginLeft:40,
        marginRight:40

    }
    const styleContents={
        margin:'5em',
        display:'block',
        paddingTop:50,
        paddingBottom:50,
        height:'100%',
        backgroundColor:'#334257',


    }
    const styleDivModal = {
        backgroundColor:'#476072',
        margin:'20px 100px 20px 100px',

    }
    const history = useHistory();
    if(loading){
        return(		
            
            <div className="lds-ring" style={styleLoading}><div></div><div></div><div></div><div></div></div>
            
            )
    }
    else{
        if(trava){
            return(
                <div style={styleMain} >
                    <div style={styleContents}>
                            <h1 className='mb-4'>{player}</h1>
                    <div style={styleDivModal}>
                            <ul style={styleUl}>
                                <Link style={styleLink} to={`${a}`}><li style={styleLi} className='teste'>Data</li></Link>
                                <Link style={styleLink} to={`${a}/Death`}><li style={styleLi} className='teste'>Death</li></Link>
                                <Link style={styleLink} to={`${a}/Achievement`}><li style={styleLi} className='teste'>Achievement</li></Link>
                            </ul>
                            <div style={styleInfo}>
                                <Switch >  
                                    <Route  exact path={`${a}/`}>
                                        <Data dados={dados}/>
                                    </Route>                          
                                    <Route  path={`${a}/Death`}>
                                        <Death dados={dados} />
                                    </Route>
                                    <Route path={`${a}/Achievement`}>
                                        <Achievement dados={dados}/>
                                    </Route>                            
                                </Switch>
                            </div>
                    </div>
                    </div>
                </div>)
            }
        else{
            
            setTimeout(()=>{
                history.push('/Player');
                setTrava(true);   

            },4000);
            clearTimeout();
            return(
                <div style={styleError}>
                    <h1>Jogador não encontrado</h1>
                    <h3>Verifique se o nome está correto, ou se o usuário existe!</h3>
                    <div className="lds-ring" style={styleLoading}><div></div><div></div><div></div><div></div></div>
                    <h6>Você está sendo redirecionado para pesquisar novamente</h6>
                </div>
            )

        }
    }
    
};
export default Player;