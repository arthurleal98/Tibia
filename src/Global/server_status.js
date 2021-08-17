
import React, { useEffect, useState } from 'react';
import './server_status.css';
import TableUtility from '../utility/table';
const ServerStatus = ()=>{
    const [loading,setLoading] = useState(true);
    const [dados,setDados] = useState([]);
    const [labels, setLabels] = useState([]);
    useEffect(()=>{        

        const fetchApi = async()=>{
            try{            
                const response = await fetch('https://api.tibiadata.com/v2/worlds.json');
                const data = await response.json();
                const dado = data.worlds.allworlds;
                const dados_filtrados = dado.filter((x)=>{return parseInt(x['online'])>0})
                setDados(dados_filtrados)
                const headers = Object.keys(dados_filtrados[0]);

                headers.pop();
                setLabels(headers)

               
            }
            catch(e){
                console.log(e)
            }
            finally{
                setLoading(false);     
                
                }
            };
        
        fetchApi();
    },[]);	
        const styleH={
            padding:'20px'
        }
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
            return(

                <div  >
                  <div className='all_servers' >
                    <h4 style={styleH}>Lista de todos os servers</h4>
                    <div>                    
                        <TableUtility dados={dados} label={labels} tamanho={dados.length-1}  columnLink={['name']} destination={{'name':'Server'}}/>
                    </div>
                  </div>                
              </div>			
            )
        }
}

export default ServerStatus;