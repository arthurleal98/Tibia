import { useEffect } from "react";

const Player = ()=>{
    useEffect(()=>{
        const extract_data = (objeto)=>{
            console.log('sdasd')
        }
        const API = async()=>{
            try{
                console.log(window.location.href.match(/([=]).+/g)[0].slice(1))
                let testando = window.location.href.match(/([=]).+/g)[0].slice(1).replaceAll('%20','+')
                const response = await fetch(`https://api.tibiadata.com/v2/characters/${testando}.json`)
                const data = await response.json();
                console.log(Object.keys(data['characters']))
                console.log(data['characters'])

            }
            catch(e){
                console.log(e)
            }
        }
        API();
    },[])
    return(
        <div><h1>Constução em andamento!</h1></div>
    )
};
export default Player;