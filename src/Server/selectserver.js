import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom";

const SelectServer=(props)=>{
    const [options,setOptions] = useState([]);
    const history = useHistory();
    const [selected,setSelected] =useState('');
    useEffect(async()=>{
        try{
            const response = await fetch('https://api.tibiadata.com/v2/worlds.json');
            const data = await response.json();
            const dado = data.worlds.allworlds;
            const dados_filtrados = dado.filter((x)=>{return parseInt(x['online'])>0})
            console.log(dados_filtrados)
            let arr = [];
            dados_filtrados.forEach(element=>{
                arr.push(element['name'])
            })
            let option_c = [];
            option_c.push(<option key={"null_option_page2_"} value=" ">-----------</option>)
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

    },[])
    const styleMain={
        display:'flex',
        justifyContent:'center',
        marginTop:100
    }
    const styleDiv={
        display:'flex',
        width:200
    }
    return(<div>
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