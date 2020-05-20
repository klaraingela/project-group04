import React from 'react';
import './Search.css';
import {Link} from 'react-router-dom'



function Navbar(){
  return(
    <div className="navbar">
      <h1>My Superheroes</h1>
      <div>
        <Link to="/">Search Superheroes</Link>
        <Link to="/saved">Saved Heroes</Link>
      </div>
    </div>
  );
}

export default Navbar;
