import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import SelectServer from "./selectserver";

const ServerHome = ()=>{
    const [route,setRoute] = useState(useRouteMatch().url.split("/")[2])

    return(
        <div> 
            <SelectServer setRoute={setRoute} route={route}/>
        </div>
    )
}
export default ServerHome;