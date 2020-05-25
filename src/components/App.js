import React from 'react'
import Search from './Search'
import Saved from './Saved'
import Navbar from './Nav.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Footer(){
  return(
    <footer>
      <div className='hr'></div>
      <div className='container'>
        <div id='logo'>
          ©<b>MySuperheroes 2020</b>
        </div>
        <div id='names'>
          <div>Sandra Smrekar</div>
          <div>Klara Rosengren</div>
        </div>
      </div>

    </footer>
  );
}

function App(){
  return(
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/saved" component={Saved}></Route>
          <Route path="/" exact component={Search}></Route>
        </Switch>
        <Footer/>
      </Router>

  );
}

export default App;
