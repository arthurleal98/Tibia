import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import ServerHome from './server/serverHome';
import ServerLocal from './server/localServer';
import Home from './home/home';
import Navbar from './navbar/navBar';
import SecondPage from './global/second_page';
import Player from './players/players';
import HomePlayer from './players/playerHome';
import Footer from './footer/footer';
const App =()=>{
    const styleDiv={
      marginBottom:'5em'
    }
    return(
      <div id='Main'>
        <div style={styleDiv}>
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
          <Footer/>
        </Router>
        </div>
      </div>
    )
    

}
ReactDOM.render(
  <><App/></>, document.getElementById('root')
)

