import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import SelectServer from "./selectserver";

const ServerHome = ()=>{
    const [route,setRoute] = useState(useRouteMatch().url.split("/")[2])
    const styleMain ={
        marginLeft:'5em',
        marginRight:'5em',
    } 
    const styleMainDiv = {
        borderRadius:'40px'

    }
    return(
        <div style={styleMain}>
            <div style={styleMainDiv}>                
                <SelectServer setRoute={setRoute} route={route} border={'50px'}/>

            </div> 
            
        </div>
    )
}
export default ServerHome;