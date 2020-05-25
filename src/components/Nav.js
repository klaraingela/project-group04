import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'


/*Navigation*/
function Navbar(){
  return(
    <div className="navbar">
      <div id='logo'>
        <h1 id="my">My</h1>
        <h1 id="Superheroes">Superheroes</h1>
      </div>

      <div id="links">
      <div><Link to="/" id="searchHeroes">Search Superheroes</Link></div>
      <div><Link to="/saved" id="savedHeroes">Saved Heroes</Link></div>
      </div>
    </div>
  );
}

export default Navbar;
