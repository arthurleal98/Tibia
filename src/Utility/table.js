import { useEffect, useState } from "react";
import quickSort from '../Utility/quickSort';
import { Link } from 'react-router-dom';
const TableUtility=(props)=>{
    const [header,setHeader] = useState('');
    const [body,setBody] = useState('');
    const [type,setType] = useState([props.label[0],0]);
    const tamanho = props.dados.length-1
    const arrayLabels = [];
    const styleThead={
        backgroundColor:'#03256c',
        padding:'20px 10vh 20px 10vh',
        color:'white',
        fontSize:'20px',

    }
    const styleTheadFirst={
        backgroundColor:'#03256c',
        padding:'20px 10vh 20px 10vh',
        color:'white',
        fontSize:'20px',
        borderRadius:'20px 0px 0px 0px'

    }
    const styleTheadLast={
        backgroundColor:'#03256c',
        padding:'20px 10vh 20px 10vh',
        color:'white',
        fontSize:'20px',
        borderRadius:'0px 20px 0px 0px'

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
    }

    useEffect(()=>{
        const dados  = quickSort(props.dados,0,tamanho,type[0],type[1])
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
            let chave = `table_button_${element}_page2`
            
                arrayLabels.push(<th key={chave} style={styleThead} className='teste' onClick={()=>{sorting(element)}} >{element[0].toUpperCase()+element.slice(1)}</th>)

            
        });
        setHeader(<tr key={'table_button_header_page2'} style={styleTrHeader}>{arrayLabels}</tr>);
        const arrayContent = [];
        let counter1= 0;
        let counter2 = 0;
        props.dados.forEach((element,index)=>{
            let arr = [];
            const styleLink ={
                textDecoration:'none'
            }
            
            props.label.forEach((element2,index2)=>{          
                console.log(props.columnLink===undefined)    
                const verify_Link =props.columnLink===undefined ? false : props.columnLink.includes(element2)


                if(Array.isArray(element[element2]) && element[element2].length>0){
                    let ul_td = [];

                    let li_td =[];
                    let lab = Object.keys(element[element2][0])[0];
                    element[element2].forEach((c_array)=>{
                        console.log('rola'+element2);
                        console.log(element2 in props.columnLink)
                        if(verify_Link){
                            li_td.push(<Link to={`/${props.destination[element2]}/${c_array[lab]}`}><li key={`li_${c_array[lab]}`}> {c_array[lab]}</li></Link>)

                        }
                        else{
                            li_td.push(<li key={`li_${c_array[lab]}`}>{c_array[lab]}</li>)

                        }
                    })
                    ul_td.push(<ul key={`ul_td_${element2}`}>{li_td}</ul>)
                    arr.push(<td key={`${element}_${index}_${element2}`} style={styleTd}>{ul_td}</td>)
                    
                }
                else{
                
                   
                    if(verify_Link){
                        arr.push(<td key={`${element}_${index}_${element2}`} style={styleTd}><Link to={`/${props.destination[element2]}/${element[element2]}`}> {element[element2]} </Link></td>)

                    }
                   
                    else{
                        arr.push(<td key={`${element}_${index}_${element2}`} style={styleTd}>{element[element2]}</td>)

                    }

                    }
                
            })
            let chave = `${element}_${index}`;
            
            console.log('tamano:'+tamanho)
           
            if (index%2!==0){
                let color = {backgroundColor:' #c1cfe3'}

                arrayContent.push(<tr style={color} className='tr_table' key={chave} >{arr}</tr>);
            }
            
            else{
                let color = {backgroundColor:'#e1e7f0'}

                arrayContent.push(<tr style={color} className='tr_table' key={chave}>{arr}</tr>);
            }
            counter1+=1;
        })
        setBody(arrayContent);

    },[type])
    const styleTable={
        width:'100%'
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