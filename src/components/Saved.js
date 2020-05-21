import React,{useEffect} from 'react';
import './Saved.css';




function Movie(props){
  var movieUrl = props.movie.thumbnail.path +'.'+ props.movie.thumbnail.extension;
  var [starSrc, setStarSrc] = React.useState("star_hollow.png");
  var [remove, setRemove] = React.useState('show');
  var currentStorage = JSON.parse(localStorage.getItem("heroes"));
  if(currentStorage === null) {
    currentStorage = [];
  }
  //LADDA RÄTT STJÄRNOR
  useEffect(() => {
    for(var i = 0; i < currentStorage.length; i++) {
      if(props.movie.id === currentStorage[i].id) {
        setStarSrc("star.png");
        break;
      }
    }
  });



  //Toggle stjärnor
  const toggleStar = event => {
    currentStorage = JSON.parse(localStorage.getItem("heroes"));
    if(currentStorage === null) {
      currentStorage = [];
    }
    if(starSrc === "star_hollow.png") {
      setStarSrc("star.png");
      currentStorage = currentStorage.concat(props.movie);
      var stored = JSON.stringify(currentStorage);
      console.log("aktuell logg" + currentStorage);
      localStorage.setItem("heroes", stored);

    }else {
      setStarSrc("star_hollow.png");
      setRemove('hide');
      for(var i = 0; i < currentStorage.length; i++) {
        if(props.movie.id === currentStorage[i].id) {
          currentStorage.splice(i, 1);
          localStorage.setItem("heroes", JSON.stringify(currentStorage));
          break;
        }
      }
    }
  }

  return(
     <div className="card" id={remove}>
       <img src={movieUrl} alt="Avengers"></img>
       <div className="container">
         <h4><b>{props.movie.name}</b></h4>
         <img src= {starSrc} onClick = {toggleStar}></img>
       </div>
     </div>
 );

}


function SavedApp(){
    const superheroes = JSON.parse(localStorage.getItem("heroes"));
    console.log(superheroes);

    var movies = "";
    if(superheroes.length > 0){
        movies = superheroes.map(heroe => {
          return (
              <Movie movie={heroe}/>
            );
      });
    }

    return (
        <ul className="movies">{movies}</ul>
    )
}

export default SavedApp;
