import TableUtility from "../../Utility/table";
const  Death = (props)=>{
    const dados = props.dados.deaths
    console.log(dados)
    
    if(dados.length>0){
        const filtrado =[]
        dados.forEach(element => {
            let lista = {}
            for( let a in element){
                if(a==='date'){
                    lista[a]=element[a][a]
                }
                else{
                    lista[a]=element[a]
                }
                    
            }

            filtrado.push(lista)

        });
        console.log(filtrado)
        const labels = Object.keys(dados[0])

       
        return(
            <div>
                <h1>Deaths</h1>
                <TableUtility dados={filtrado} label={labels}  columnLink={['involved']} destination={{'involved':'Player'}}/>

            </div>
        )
    }
    else{return(
        <div>
            <h1>Não há Conquistas</h1>
        </div>)
    }
}
export default Death;