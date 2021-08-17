import React, { useState, useEffect} from 'react';
import {  useParams, useRouteMatch} from 'react-router-dom';
import SelectServer from './selectserver';
import TablePlayers from './table_players_server';
const ServerLocal = (props)=>{
	
	
	const [loading,setLoading] = useState(true);
    
	const [dados,setDados] = useState();
	const [index,setIndex] = useState();
    
	const [route,setRoute] = useState(useRouteMatch().url.split("/")[2])
	const routeMatch = useRouteMatch().url.split("/")[2]
	useEffect(()=>{
		
		const fetchApi = async()=>{
			try{					
					const url = `https://api.tibiadata.com/v2/highscores/${routeMatch}.json`;
					const response = await fetch(url);
					const data = await response.json();
					let limit = 0;
					data['highscores']['data'].forEach((element,i) => {
						limit=i;
					});
					setIndex(limit)	
					setDados(data['highscores']['data']);				
			}
			catch(e){
				console.log('Sem acesso à API')
			}
			finally{
                setLoading(false);     
                
            }
		}
		fetchApi();
	},[loading,route,routeMatch]);
	
	const styleLoading = {
        display:'flex',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'100px'
    }
	const styleMain = {
		margin:'100px 100px 5em 5em',		
		borderRadius:'40px',
		marginBottom:'100px',
		display:'block',
		
 

	}
	const rt = useParams();
		if(loading){
            
        
			return(
				<div className="lds-ring" style={styleLoading}>{console.log(rt)}
					<div></div><div></div><div></div><div></div></div>
				)}
		else{
			return (
				<div>
					<div className='container'>
						<SelectServer setRoute={setRoute} route={route}/>
						<TablePlayers data={dados} index={index} />
					</div>
				</div>
								
			);}
	}

	


export default ServerLocal;