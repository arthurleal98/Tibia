
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import quickSort from '../Utility/quickSort';
import './server_status.css';
import TableUtility from '../Utility/table';
const ServerStatus = ()=>{
    const [type,setType] = useState(['online',1])
    const [loading,setLoading] = useState(true);
    const [content_table,setContent_table] = useState([]);
    const [header_table, setHeader_table] = useState([]);
    const location = useLocation();
    const [dados,setDados] = useState([]);
    const [labels, setLabels] = useState([]);
    useEffect(()=>{
        const sorting= (element)=>{
            if(element===type[0]){
                let num = 1;
                if(type[1]===1){
                    num=0
                }
                setType([element,num])
            }
            else{
                setType([element,0])
            }
        }

        const fetchApi = async()=>{
            try{
                
                
                const colorTr = {
                    backgroundColor:' #e1e7f0'

                }
                const colorTr2 = {
                    backgroundColor:' #c1cfe3',
                }
                const styleThead={
                    backgroundColor:'#03256c',
                    padding:'20px 1s0px 20px 10px',
                    color:'white',
                    fontSize:'20px',
                    paddingLeft:100,
                    paddingRight:100

                }
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
    },[type]);
	
		const tablesyle={
			marginLeft:'auto',
			marginRight:'auto',
            fontSize:'14px',
            width:'100%',
        }
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

                <div className='server_status' >
                       {console.log(location.pathname)}

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