import React from 'react';
import GraphPie from './graphPie';
import Graph from './Graph';

import ServerStatus from './server_status';

const StatusGlobal= ()=>{
  
    return(
    <div>
      <div id='graphics'>
          <Graph  titulo={'Servers mais jogados'}/>
          <GraphPie titulo={'Jogadores por região'}/>
      </div>
      <div id='all_status' className='container'>
          
        <ServerStatus/>
        

      
            </div></div>)
    

    }
export default StatusGlobal;