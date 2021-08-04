import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const SelectServer=(props)=>{
    const [options,setOptions] = useState([]);
    const [selected,setSelected] =useState('');
    const contorno = props.border || 0
    useEffect(()=>{
        const fetchApi = async()=>{
            try{
                const response = await fetch('https://api.tibiadata.com/v2/worlds.json');
                const data = await response.json();
                const dado = data.worlds.allworlds;
                const dados_filtrados = dado.filter((x)=>{return parseInt(x['online'])>0})
                let arr = [];
                dados_filtrados.forEach(element=>{
                    arr.push(element['name'])
                })
                let option_c = [];
                option_c.push(<option key={"null_option_page2_"} value="">-----------</option>)
                arr.forEach(element=>{
                    option_c.push(<option key={`null_option_page2_${element}`} value={element}>{element}</option>)
                })
                setOptions(option_c);
            }
            catch(e){
                console.log(e)
            }
            finally{

            }
        }
        fetchApi();
    },[])
    const styleMain={
        display:'flex',
        justifyContent:'center',
        height:'100%',
        alignItems:'center',
        borderRadius: contorno,
        marginTop:'50px'
    }
    const styleDiv={
        display:'flex',
        width:200
    }
    const styleDivMain={        
        height:100
    }
    return(<div style={styleDivMain}>
        <div style={styleMain} className='form-group'>
            <h3 className='me-3'>Escolha um servidor:</h3>
            <div style={styleDiv} >                
                <select name='value' id='value'  className='form-select me-2' onChange={(e)=>{setSelected(e.target.value)}}>
                    {options}                                
                </select>
                <Link to={`/Server/${selected}`}><button type='button' className='btn btn-primary '>IR</button></Link>
            </div>
                
        </div>
            
    </div>)
};
export default SelectServer;