import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import ServerLocal from './localServer';
import Home from './home';
import Navbar from './navBar';
import SecondPage from './second_page';
import Player from './Players';

class App extends React.Component{
  
    render(){return(
      <>
      
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/Global">
            <SecondPage/>
          </Route>
          <Route path='/Server'>
            <ServerLocal/>
          </Route>
          <Route path="/Player">
            <Player/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
          

        </Switch>
      </Router></>
    )
    }

}
ReactDOM.render(
  <><App/></>, document.getElementById('root')
)

