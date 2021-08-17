import React from 'react';
import GraphPie from './graphPie';
import Graph from './graph';

import ServerStatus from './server_status';

const StatusGlobal= ()=>{
    const styleDiv={padding:0}
    return(
    <div style={styleDiv} className='container-fluid'>
      <div id='graphics'>
          <Graph  titulo={'Servers mais jogados'}/>
          <GraphPie titulo={'Jogadores por região'}/>
      </div>
      <div id='all_status' className='container'>
          
        <ServerStatus/>
        

      
            </div></div>)
    

    }
export default StatusGlobal;