
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import quickSort from './quickSort';
import './server_status.css';
const ServerStatus = ()=>{
    const [type,setType] = useState(['online',1])
    const [loading,setLoading] = useState(true);
    const [content_table,setContent_table] = useState([]);
    const [header_table, setHeader_table] = useState([]);
    
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
                const styleButton={
                    width:'100%'
                }
                const styleTh={
                    width:100
                }

                const response = await fetch('https://api.tibiadata.com/v2/worlds.json');
                const data = await response.json();
                const dados = data.worlds.allworlds;
                
                const pip = quickSort(dados,0,dados.length-1,type[0],type[1]);
                const headers = Object.keys(dados[0]);
                headers.pop();
                let content_tr = []
                pip.forEach(element=>{
                    let array = [];
                    let key2 = '';
                    headers.forEach((element2,i)=>{
                        if(i===0){
                            key2=element[element2]
                            array.push(<td key={key2}><Link to ={location=>`Server?value=${element[element2]}`}>{element[element2]}</Link></td>)
                        }
                        else if(i===4 && element[element2].length<=2){                            
                            array.push(<td key={key2+element2}>None</td>)
                        }
                        else{
                            array.push(<td key={key2+element2}>{ element[element2]}</td>)

                        }
                        
                    })
                    content_tr.push(<tr key={key2}>{array}</tr>)
                });
                setContent_table(content_tr);
                let header_tr=[];
                headers.forEach((element2,i)=>{
                    header_tr.push(<th key={element2+'header'} style={styleTh}><button style={styleButton} onClick={()=>sorting(element2,1)}>{element2[0].toUpperCase()+element2.slice(1)}</button></th>)
                });
                setHeader_table(header_tr)


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
            width:'90%',
        }
        const styleH={
            padding:'20px'
        }
        
        if(loading){
            
        
        return(		
            
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            
            )}
        else{
            return(

                <div className='server_status' className=''>
           
                  <div className='all_servers' >
                    <h4 style={styleH}>Lista de todos os servers</h4>
                    <div>                    
                        <table style={tablesyle}>
                            <tbody>
                                <tr>
                                    {header_table}
                                </tr>
                                    {content_table}
                            </tbody>
                        </table>
                    </div>
                  </div>
                
              </div>			
            )
        }
}

export default ServerStatus;