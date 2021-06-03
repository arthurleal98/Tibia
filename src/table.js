import React, { useEffect, useState } from 'react';
import quickSort from './quickSort';
import './table_style.css';

const Table = (props)=>{
    const [pagination, setPagination] = useState(50);
    const [type,setType] = useState(['rank',0]);
    const [labelstable, setLabelstable] = useState([]);
    const [contentTable,setContentTable] = useState([]);
    const [nameServer, setNameServer] = useState('');
    const [options,setOptions] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const sorting=(element)=>{
                if(element===type[0]){
                    let num=1;
                    if(type[1]===1){
                        num=0;
                    }
                    setType([element,num]);
                }
                else{
                    setType([element,0]);
                }
            }
       
        const fetchApi=async()=>{
            try{
                const response = await fetch('https://api.tibiadata.com/v2/worlds.json');
                const data2 = await response.json();
                const colorTr = {
                    backgroundColor:' #e1e7f0'

                }
                const styleThead={
                    backgroundColor:'#03256c',
                    padding:'20px 40px 20px 40px',
                    color:'white',
                    fontSize:'20px',
                    paddingLeft:100,
                    paddingRight:100

                }
                const colorTr2 = {
                    backgroundColor:' #c1cfe3',
                }
                const styleTd = {
                    padding:12
                }
                const dados = data2.worlds.allworlds;
                let arr = [];
                dados.forEach(element=>{
                    arr.push(element['name'])
                })
                let option_c = [];
                option_c.push(<option key={"null_option_page2_"} value=" ">Escolha o server</option>)
                arr.forEach(element=>{
                    option_c.push(<option key={`null_option_page2_${element}`} value={element}>{element}</option>)
                })
                setOptions(option_c);
                    const  teste = props.data; 
                    const data = teste.slice(pagination-50,pagination);
                    const label = Object.keys(data[0]);
                    
                    setNameServer(data[0][label[2]]);
                    delete label[2];
                    const pip = quickSort(data,0,49,type[0],type[1]);
                    let r = pip['rank'];
                    console.log(pip[0])
                    const arrayLabels = [];
                    label.forEach(element => {
                        arrayLabels.push(<th key={`table_button_${element}_page2`} style={styleThead}  onClick={()=>{sorting(element)}}>{element}</th>)
                    });
                    setLabelstable(<tr key={'table_button_header_page2'}>{arrayLabels}</tr>);
                    const arrayContent = [];
                    pip.forEach((element,index)=>{
                        let arr = [];
                        label.forEach(element2=>{
                            arr.push(<td key={`${element}_${index}_${element2}`} style={styleTd}>{element[element2]}</td>)
                        })
                        if( index ===0){
                            arrayContent.push(<tr style={colorTr} key={`${element}_${index}`}>{arr}</tr>);
                        }
                        else if (index%2!==0){
                            arrayContent.push(<tr style={colorTr2} key={`${element}_${index}`}>{arr}</tr>);
                        }
                        else{
                            arrayContent.push(<tr style ={colorTr} key={`${element}_${index}`}>{arr}</tr>);
                        }
                    });
                    setContentTable(arrayContent);   
            }
            catch(e){
                console.log(e)
            }
            finally{
                setLoading(false)
            }
                   
            }
             
            fetchApi();
        },[pagination,type,props.data]); 
            
            
     
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
        textAlign:'center'
    }
    const styleTable = {
        marginLeft:'auto',
        marginRight:'auto',
        
        
        
        
    }
    const styleForm = {
        marginTop:1,
        marginBottom:30
    }
    const styleH = {
        marginTop:30

    }
    const stylePag ={
       justifyContent:'center',
       marginTop:20
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
            <div style={styleMain}>
                    
                    <h1 style={styleH}>{nameServer}</h1>
                    <form action='/Server' method='get' style={styleForm}>
                        <label>Escolha o server: </label>
                        <select name='value' id='value'>
                            {options}
                            
                        </select>
                        
                        <button id='submit' className='btn btn-primary'>Ir</button>
                    </form>
                    
                <div id='div_table_players'>
                    <table style={styleTable}>
                        <thead >
                            {labelstable}
                        </thead>
                        <tbody>
                            
                            {contentTable}
                        </tbody>
                    </table>
                </div>
                <div style={stylePag} >
                    <ul className="pagination"style={stylePag} >
                    <li className="page-item"><button className='page-link'onClick={()=>{setPagination(50)}} >Initial</button></li>

                        <li className="page-item"><button className='page-link'onClick={()=>{indexLess()}} >Previous</button></li>
                        
                        <li className="page-item"><button className='page-link'onClick={()=>{indexPlus()}} >Next</button></li>
                        <li className="page-item"><button className='page-link'onClick={()=>{setPagination(props.index+1)}} >End</button></li>

                    </ul>
                </div>
                


            </div>
        )
        }
    
}
export default Table;