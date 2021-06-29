import React, { useState, useEffect} from 'react';
import { useLocation, useParams} from 'react-router-dom';

import Table from './table';
const ServerLocal = (props)=>{
	
	
	const [loading,setLoading] = useState(true);
    
	const [dados,setDados] = useState();
	const [index,setIndex] = useState();
    const location = useLocation();
	useEffect(()=>{
		
		const fetchApi = async()=>{

			try{					
					const url = `https://api.tibiadata.com/v2/highscores/${window.location.href.match(/([=])\w+/g)[0].slice(1)}.json`;
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
	},[loading]);
	const styleLoading = {
        display:'flex',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'100px'
    }
	const rt = useParams()
	
	

		if(loading){
            
        
			return(		
								

				<div className="lds-ring" style={styleLoading}>{console.log(rt)}
					<div></div><div></div><div></div><div></div></div>
				
				)}
		else{
			return (<div>
				{console.log(location.search)}
				<Table data={dados} index={index} />
			</div>
				
			);}
	}

	


export default ServerLocal;