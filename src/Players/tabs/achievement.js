import TableUtility from "../../Utility/table";
const Achievement = (props)=>{
    const dados = props.dados.achievements
    if(dados.length>0){
        const labels = Object.keys(dados[0])
        
        return(
            <div>
               <TableUtility dados={dados} label={labels}/>
                <h1>achievement</h1>
            </div>
        )
    }
    else{return(
        <div>
            <h1>Não há Conquistas</h1>
        </div>)
    }
}
export default Achievement;