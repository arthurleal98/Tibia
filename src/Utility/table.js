import { useEffect, useState } from "react";
import quickSort from './quickSort';
import { Link } from 'react-router-dom';
const TableUtility=(props)=>{
    const [header,setHeader] = useState('');
    const [body,setBody] = useState('');
    const first_sort = props.ordem|| props.label[0] 
    const [type,setType] = useState([first_sort,0]);
    const tamanho = props.dados.length-1
    const arrayLabels = [];
    
    useEffect(()=>{
        const styleLink={
            color:'#264a39'
        };
        const dados  = quickSort(props.dados,0,tamanho,type[0],type[1])
    
        const styleThead={
            backgroundColor:'#0C1446',
            padding:'20px 10vh 20px 10vh',
            color:'white',
            fontSize:'20px',

        }
        
        const styleTrHeader={
            position:'-webkit-sticky',
            position:'sticky',
            top:0
        }
        
        const styleTd = {
            padding:12,
            width:'10px !important',
            transition:'0s'
        };
       
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
        props.label.forEach((element,index) => {
            let chave = `table_button_${element}_page2`;   
            
            arrayLabels.push(<th key={chave} style={styleThead} className='teste' onClick={()=>{sorting(element)}}>{element[0].toUpperCase()+element.slice(1)}</th>);            
        });
        setHeader(<tr key={'table_button_header_page2'} style={styleTrHeader}>{arrayLabels}</tr>);
        const arrayContent = [];
        
        dados.forEach((element,index)=>{
            let arr = [];            
            
            props.label.forEach((element2,index2)=>{          
                const verify_Link =props.columnLink===undefined ? false : props.columnLink.includes(element2)


                if(Array.isArray(element[element2]) ){
                    let ul_td = [];
                    let li_td =[];

                    if(element[element2].length>0){
                        let lab = Object.keys(element[element2][0])[0];
                        element[element2].forEach((c_array)=>{                        
                            if(verify_Link){
                                li_td.push(<Link to={`/${props.destination[element2]}/${c_array[lab]}`} style={styleLink}><li key={`li_${c_array[lab]}`}>{c_array[lab]}</li></Link>)

                            }
                            else{
                                li_td.push(<li key={`li_${c_array[lab]}`}>{c_array[lab]}</li>)

                            }
                        })
                    }
                    else{
                        li_td.push(<li key={`li_${element2}`}>None</li>)

                    }
                    ul_td.push(<ul key={`ul_td_${element2}`}>{li_td}</ul>)
                    arr.push(<td key={`${element}_${index}_${element2}`} style={styleTd}>{ul_td}</td>)
                    
                }
                else{
                    if(verify_Link){
                        arr.push(<td key={`${element}_${index}_${element2}`} style={styleTd}><Link to={`/${props.destination[element2]}/${element[element2]}`} style={styleLink}>{element[element2]}</Link></td>)
                    }
                    else{
                        arr.push(<td key={`${element}_${index}_${element2}`} style={styleTd}>{element[element2]}</td>)

                    }

                }
                
            })
            let chave = `${element}_${index}`;           
            if (index%2!==0){
                let color = {backgroundColor:'#a3a9d1'};
                arrayContent.push(<tr style={color} className='tr_table' key={chave}>{arr}</tr>);
            }            
            else{
                let color = {backgroundColor:'#d3d7f2'};
                arrayContent.push(<tr style={color} className='tr_table' key={chave}>{arr}</tr>);
            }
        })
        setBody(arrayContent);

    },[type, props.dados])
    const styleTable={
        width:'100%',
    }
    return(
        
        <table style={styleTable} className='table'>
            <thead>
                {header}
            </thead>
            <tbody>
                {body}
            </tbody>  
        </table>

    )

}
export default TableUtility;