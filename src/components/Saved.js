import React from 'react';
import HeroCard from './HeroCard';


/*SÖK SIDAN, visar alla sparade kort av superhjältar*/
function SavedApp(){
    const superheroes = JSON.parse(localStorage.getItem("heroes"));
    console.log(superheroes);
    return (
        <HeroCard heroes={superheroes}/>
    )
}

export default SavedApp;
