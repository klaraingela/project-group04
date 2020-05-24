import React from 'react';
import HeroCard from './HeroCard';
import './Saved.css';


/*SÖK SIDAN, visar alla sparade kort av superhjältar*/
function SavedApp(){
    const superheroes = JSON.parse(localStorage.getItem("heroes"));
    console.log(superheroes);
    return (
      <div className="saved">
        <h2>My favourite heroes</h2>
        <HeroCard heroes={superheroes}/>
        </div>
    )
}

export default SavedApp;
