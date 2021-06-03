import React, { useState, useEffect} from 'react';

import Table from './table';
const ServerLocal = (props)=>{
	
	
	const [loading,setLoading] = useState(true);
    
	const [dados,setDados] = useState();
	const [index,setIndex] = useState();
    
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
				console.log(e)
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
	
	

		if(loading){
            
        
			return(		
				
				<div className="lds-ring" style={styleLoading}><div></div><div></div><div></div><div></div></div>
				
				)}
		else{
			return (<div>
				<Table data={dados} index={index} />
			</div>
				
			);}
	}

	


export default ServerLocal;