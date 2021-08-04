import React, { useEffect, useState } from 'react';
import './table_style.css';
import TableUtility from '../utility/table';

const TablePlayers = (props)=>{
    const [pagination, setPagination] = useState(50);
    const [loading,setLoading] = useState(true);
    const [dados,setDados] = useState('');
    const [labels, setLabels] = useState('');
    const [nameServer,setNameServer] = useState('');

    useEffect(()=>{      
        const fetchApi=async()=>{
            try{
                
                    const  teste = props.data; 
                    const data = teste.slice(pagination-50,pagination);
                    const label = Object.keys(data[0]);
                    setDados(data);
                    setLabels(label);
                    setNameServer(data[0][label[2]]);
                    delete label[2];
                    
            }
            catch(e){
                console.log(e);
            }
            finally{
                setLoading(false);
            }
                   
            }
             
            fetchApi();
        },[pagination,props.data]);    
    const indexPlus = ()=>{
        let value = pagination;
        if(value<props.index){
            setPagination(value+50);
        }        
    }    
    const indexLess = ()=>{
        let value = pagination;
        if(value>50){
            setPagination(value-50);
        }        
    }
    const styleMain={
        textAlign:'center',
    }      
    const styleH = {
        paddingTop:30,
        fontSize:'3rem',
        paddingBottom:30,
    }
    const stylePag ={
       justifyContent:'center',
       marginTop:20,
       paddingBottom:10
    }
    const styleLoading = {
        display:'flex',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'100px'
    } 
    const styleButtons={
        marginBottom:'20px'
    }
    const buttons = [
        <div style={stylePag} key='div-buttons' >
            <ul className="pagination"style={stylePag} key={'button_ul'}>
                <li className="page-item" key={'button_ul1'}><button className='page-link'onClick={()=>{setPagination(50)}}>First</button></li>            

                <li className="page-item" key={'button_ul2'}><button className='page-link'onClick={()=>{indexLess()}}>Previous</button></li>            
                <li className="page-item" key={'button_ul3'}><button className='page-link'onClick={()=>{indexPlus()}}>Next</button></li>
                <li className="page-item" key={'button_ul4'}><button className='page-link'onClick={()=>{setPagination(props.data.length)}}>Last</button></li>            

            </ul>
        </div>]
    const styleBackGround = {
    }
    if(loading){       
        return(           
            <div className="lds-ring" style={styleLoading}><div></div><div></div><div></div><div></div></div>            
        )}
    else{    
        return(
            <div style={styleMain} id='asdassd'>
                <div style={styleBackGround}>
                    <h3 style={styleH}>Jogadores do servidor {nameServer}</h3>
                    <div id='div_table_players'>
                        <TableUtility dados={dados} label={labels} ordem={'rank'} columnLink={['name']} destination={{'name':'Player'}}/>
                    </div>
                </div>
                {dados.length>0?buttons:<div></div>}
            </div>
        )
    }
    
}
export default TablePlayers;