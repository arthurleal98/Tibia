import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import ServerHome from './Server/serverHome';
import ServerLocal from './Server/localServer';
import Home from './Home/home';
import Navbar from './Navbar/navBar';
import SecondPage from './Global/second_page';
import Player from './Players/Players';
import HomePlayer from './Players/PlayerHome';

class App extends React.Component{
  
    render(){return(
      <>
      
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/Global">
            <SecondPage/>
          </Route>
          
          <Route path='/Server/:id'>
            <ServerLocal/>
          </Route>
          <Route path='/Server'>
            <ServerHome/>
          </Route>
          <Route path="/Player/:id">
            <Player/>
          </Route>
          <Route path="/Player">
            <HomePlayer/>
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

