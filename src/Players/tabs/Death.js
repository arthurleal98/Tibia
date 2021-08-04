import TableUtility from "../../utility/table";
const  Death = (props)=>{
    const dados = props.dados.deaths;
    const styleH1 = {
        marginTop:20,
        marginBottom:40
    }
    const styleMain={
        display:'block',
        marginBottom:'20px'
    }
    const styleContent ={
        overflow:'auto',

    }
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
        const labels = Object.keys(dados[0])

       
        return(
            <div style={styleMain}>
                <h1 style={styleH1}>Deaths</h1>
                <div style={styleContent}>
                    <TableUtility dados={filtrado} label={labels}  columnLink={['involved']} destination={{'involved':'Player'}}/>
                </div>

            </div>
        )
    }
    else{return(
        <div style={styleMain}>
            <h1 style={styleH1}>Não há registro de mortes</h1>
        </div>)
    }
}
export default Death;