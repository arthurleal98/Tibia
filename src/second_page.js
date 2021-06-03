import React, { useEffect, useState } from 'react';
import quickSort from './quickSort';
import StatusGlobal from './status';

const SecondPage = ()=>{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetchApi = async()=>{
            try{
                const response = await fetch('https://api.tibiadata.com/v2/houses/Antica.json');
                const data = await response.json();
                const houses = quickSort(data.houses.houses,0,data.houses.houses.length-1,'rent');
                
                console.log(houses[0]);
            }
            catch(e){
                console.log(e);
            }
            finally{
                setLoading(false);
            }
        }
        fetchApi();
    },[])
    
    if(loading){
        return(		
            
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            
            )
    }
    else{
        return(<>
            <StatusGlobal/>
        </>)
    }
}
export default SecondPage;