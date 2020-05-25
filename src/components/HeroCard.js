import './HeroCard.css';
import React, {useEffect} from 'react';


/*KORT FÖR EN HJÄLTE*/
function Hero(props){
  const [isFlipped, setIsFlipped] = React.useState(false)
  var heroUrl = props.hero.thumbnail.path +'.'+ props.hero.thumbnail.extension;
  var [starSrc, setStarSrc] = React.useState("star_hollow.png");
  var [remove, setRemove] = React.useState('');
  var currentStorage = JSON.parse(localStorage.getItem("heroes"));

  //GE STROAGE ETT TOM VÄRDE
  if(currentStorage === null) {
    currentStorage = [];
  }

  //LADDA RÄTT STJÄRNOR
  useEffect(() => {
    for(var i = 0; i < currentStorage.length; i++) {
      if(props.hero.id === currentStorage[i].id) {
        setStarSrc("star.png");
        break;
      }
    }
  } ,[currentStorage, props.hero.id] );



  //TOGGLE STJÄRNOR
  const toggleStar = event => {
    currentStorage = JSON.parse(localStorage.getItem("heroes"));
    if(currentStorage === null) {
      currentStorage = [];
    }
    if(starSrc === "star_hollow.png") {
      setStarSrc("star.png");
      currentStorage = currentStorage.concat(props.hero);
      var stored = JSON.stringify(currentStorage);
      localStorage.setItem("heroes", stored);
    }else {
      setStarSrc("star_hollow.png");
      if(props.location === ''){setRemove('hide');};
      for(var i = 0; i < currentStorage.length; i++) {
        if(props.hero.id === currentStorage[i].id) {
          currentStorage.splice(i, 1);
          localStorage.setItem("heroes", JSON.stringify(currentStorage));
          break;
        }
      }
    }
  }

  //Description av hjälte
  var des = props.hero.description;
  if(des.length === 0){
    des = 'No description available'
  }

  return(
    <div className={`card ${isFlipped ? 'flip' : ''}`} id={remove} >

      <div className="theFront">
        <img src={heroUrl} alt="Avengers" onClick={() => setIsFlipped(!isFlipped)} ></img>
        <div className="container">
          <h4><b>{props.hero.name}</b></h4>
          <img src= {starSrc} onClick = {toggleStar} alt="star"></img>
        </div>
      </div>

      <div className="theBack" onClick={() => setIsFlipped(!isFlipped)} alt="background" >
        <img src="marvel.png" alt='marvel'></img>
        <div id="backText">
          <h1>{props.hero.name}</h1>
          <p>{des}</p>
        </div>
      </div>

    </div>
 );
}

/*LISTA AV ALLA KORT*/
function AllHeroes(props){
    var heroes = "";
    if(props.heroes.length > 0){
      heroes = props.heroes.map(hero => {
        return (
            <Hero hero={hero} key={hero.id}/>
          );
      });
    }

    return (
        <ul className="heroes">{heroes}</ul>
    )
  }

export default AllHeroes;
