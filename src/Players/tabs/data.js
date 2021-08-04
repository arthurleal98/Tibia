import { useEffect, useState } from "react";

const Data = (props)=>{
    const dados = props.dados.data;
    console.log(dados);
    delete dados['former_names'];
    delete dados['comment']
    const [thead,setThead] = useState('');
    const [tbody,setTbody] = useState('');
    const styleTable={
            marginLeft:'auto',
            marginRight:'auto',
            width:'70%'
        }
    const styleH1 = {
            marginBottom:40
        }
    useEffect(()=>{
        const styleThead={
            backgroundColor:'#0C1446',
            color:'white',
            fontSize:'16px',
            borderColor:'#0C1446',


        }
        const styleTitle={
            backgroundColor:'yellow'
        }
        const styleContentTitle={
            backgroundColor:'#d3d7f2',
            color:'black',
            width:'70%',
            fontSize:'16px',

                }
        const styleLabels = {
            width:'200px',
            

        }
        const structTable=(dados)=>{
            const styleTable = {
                marginLeft:'auto',
                marginRight:'auto'
            }
            let tr = [];
            let labels = Object.keys(dados);
            labels.forEach((element)=>{
                tr.push(<tr key={`trObject${element}`}><td key={`subTabletd1${element}`}>{element}:</td>
                <td key={`subTabletd2${element}`}>{dados[element]}</td>
                </tr>)
            })
            return (
                <table style={styleTable} key={'table_object'}>
                    <thead>
                        {tr}
                    </thead>
                </table>
            )
        }
        
        const mainFunction = (valor,...rules)=>{
            const all_item = [];
            const labels_status=Object.keys(valor);
            labels_status.forEach((label)=>{
                let labels=[];
                labels.push(<td key={`${label}${rules}`} style={styleLabels}>{label}</td>)
                console.log(Array.isArray(valor[label]))
                if (Array.isArray(valor[label])){
                    labels.push(<td key={`${label}${rules}_array`} style={styleContentTitle}>{structTable(valor[label][0])}</td>)
                }
                else if(typeof valor[label] === 'object' && valor[label]!==null && valor[label]!==undefined){
                    
                    labels.push(<td key={`${label}${rules}_object`} style={styleContentTitle}>{structTable(valor[label])}</td>)
                }
                else{
                    
                    labels.push(<td key={`${label}_${valor[label]}`} style={styleContentTitle}>{valor[label]}</td>)

                }

                all_item.push(<tr key={`tr_${label}`} style={styleThead}>{labels}</tr>)
            })
            return all_item;
        }

        setThead(mainFunction(dados));
    },[])
    const styleTeste = {
        overflow:'auto'
    }
    return(<div style={styleTeste}>
        <h1 style={styleH1}>Status</h1>
            <table className='table' style={styleTable}> 
                <tbody>
                    {thead}
                </tbody>            
            </table>
    </div>)
}
export default Data;