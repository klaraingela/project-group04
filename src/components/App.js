import React from 'react'
import Search from './Search'
import Saved from './Saved'
import Navbar from './Nav.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App(){
  return(
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/saved" component={Saved}></Route>
        <Route path="/" exact component={Search}></Route>

      </Switch>


    </Router>
  );
}

export default App;
