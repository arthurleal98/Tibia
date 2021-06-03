import React, { useEffect, useState } from 'react';
import quickSort from './quickSort';
import './table_style.css';

const Table = (props)=>{
    const [pagination, setPagination] = useState(50);
    const [type,setType] = useState(['rank',0]);
    const [labelstable, setLabelstable] = useState([]);
    const [contentTable,setContentTable] = useState([]);
    const [columns,setColumns] = useState(["name"]);
    const [nameServer, setNameServer] = useState('');
    const [options,setOptions] = useState([]);
    const [serachName, setSearchName] = useState();
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
        const styleButton = {
            width:'100%'
        }
        const fetchApi=async()=>{
            const response = await fetch('https://api.tibiadata.com/v2/worlds.json');
            const data2 = await response.json();
            const dados = data2.worlds.allworlds;
            let arr = [];
            dados.forEach(element=>{
                arr.push(element['name'])
            })
            let option_c = [];
            option_c.push(<option key={"null_option_page2"} value=" ">Escolha o server</option>)
            arr.forEach(element=>{
                option_c.push(<option key={`null_option_page2`} value={element}>{element}</option>)
            })
            setOptions(option_c);
                  const  teste = props.data; 
                   const data = teste.slice(pagination-50,pagination);
                   const label = Object.keys(data[0]);
                
                setNameServer(data[0][label[2]]);
                delete label[2];
                const pip = quickSort(data,0,49,type[0],type[1]);
                console.log(pip)
                const arrayLabels = [];
                label.forEach(element => {
                    arrayLabels.push(<th key={`table_button_${element}_page2`}><button style={styleButton} onClick={()=>{sorting(element)}}>{element}</button></th>)
                });
                setLabelstable(<tr key={'table_button_header_page2'}>{arrayLabels}</tr>);
                const arrayContent = [];
                pip.forEach(element=>{
                    let arr = [];
                    label.forEach(element2=>{
                        arr.push(<td>{element[element2]}</td>)
                    })
                    arrayContent.push(<tr>{arr}</tr>);
                });
                setContentTable(arrayContent);      
            }
             
            fetchApi();
        },[pagination,type,props.data,columns]); 
            
            
     
    const indexPlus = ()=>{
        let value = pagination;
        if(value<props.index){
            setPagination(value+50);
        }
        console.log(pagination)

        
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
    
        return(
            <div style={styleMain}>
                
                    <h1 style={styleH}>{nameServer}</h1>
                    <form action='/Server' method='get' style={styleForm}>
                        <label>Escolha o server: </label>
                        <select name='value' id='value'>
                            {options}
                            
                        </select>
                        
                        <button id='submit'>asdasd</button>
                    </form>
                    
                <div id='div_table_players'>
                    <table style={styleTable}>
                        <thead>
                            {labelstable}
                        </thead>
                        <tbody>
                            
                            {contentTable}
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example">
  <ul class="pagination">
  <li class="page-item"><button className='page-link'onClick={()=>{setPagination(50)}} >Initial</button></li>

    <li class="page-item"><button className='page-link'onClick={()=>{indexLess()}} >Previous</button></li>
    <li class="page-item"><button className='page-link' >1</button></li>
    <li class="page-item"><button className='page-link'>2</button></li>
    <li class="page-item"><button className='page-link'>3</button></li>
    <li class="page-item"><button className='page-link'onClick={()=>{indexPlus()}} >Next</button></li>
    <li class="page-item"><button className='page-link'onClick={()=>{setPagination(props.index+1)}} >End</button></li>

  </ul>
</nav>
                


            </div>
        )
    
}
export default Table;