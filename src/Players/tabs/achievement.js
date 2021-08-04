import TableUtility from "../../utility/table";
const Achievement = (props)=>{
    const dados = props.dados.achievements;
    const styleH1 = {
        marginTop:20,
        marginBottom:40
    }
    const styleMain={
        display:'block'
    }
    const styleContent ={
        overflow:'auto',

    }
    if(dados.length>0){
        const labels = Object.keys(dados[0])
        
        return(
            <div style={styleMain}>
                <h1 style={styleH1}>Conquistas</h1>
                <div style={styleContent}>
                    <TableUtility dados={dados} label={labels}/>
                </div>
                
            </div>
        )
    }
    else{return(
        <div>
            <h1 style={styleH1}>Não há Conquistas</h1>
        </div>)
    }
}
export default Achievement;