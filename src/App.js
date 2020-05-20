import React from 'react';
import './App.css';


function Navbar(){
  return(
    <div className="navbar">
      <h1>My Superheroes</h1>
      <div>
        <a>Search Superheroes</a>
        <a>Saved Heroes</a>
      </div>
    </div>
  );
}


function Search(props){
  var [input, setInput] = React.useState("");

  const search= event =>{
    if(input.length > 0){
      props.getMovies(input);
    }else{
      alert("Please enter input")
    }
    setInput("");
  }

  return(
    <div className="search-input">
      <h1>Search among 8485739 movies</h1>
      <div className="search-button">
        <input placeholder="Search" onChange={event=>setInput(event.target.value)} value={input}></input>
        <button onClick={search}>Go</button>
      </div>

    </div>
  );
}


function Movie(props){
  var movieUrl = props.movie.thumbnail.path +'.'+ props.movie.thumbnail.extension;
  var [starSrc, setStarSrc] = React.useState("star_hollow.png");


  const toggleStar = event => {
    currentStorage = JSON.parse(localStorage.getItem("heroes"));
    if(currentStorage === null) {
      currentStorage = [];
    }
    if(starSrc === "star_hollow.png") {
      setStarSrc("star.png");
      var currentStorage = currentStorage.concat(props.movie);
      var stored = JSON.stringify(currentStorage);
      console.log("aktuell logg" + currentStorage);
      localStorage.setItem("heroes", stored);

    } else {
      for(var i = 0; i < currentStorage.length; i++) {
        if(props.movie.id === currentStorage[i].id) {
          currentStorage.splice(i, 1);
          localStorage.setItem("heroes", JSON.stringify(currentStorage));
          break;
        }

      }
      setStarSrc("star_hollow.png");

    }
  }

  return(
    <div className="card">
      <img src={movieUrl} alt="Avengers"></img>
      <div className="container">
        <h4><b>{props.movie.name}</b></h4>
        <img src= {starSrc} onClick = {toggleStar}></img>
      </div>
   </div>
 );

}

function AllMovies(props){
    var movies;
    if(props.movies.length === 0 || props.movies.length === undefined){
      alert("No result");
    }else{
        movies = props.movies.map(movie => {
        return (
            <Movie movie={movie}/>
        );
      });
    }

    return (
        <ul className="movies">{movies}</ul>
    )
  }



function App(){
  var [data, setData] = React.useState([]);

  const getMovies = async (title) =>{
    console.log("Search: " + title);

    //FILMER API
    /*
    const response = await fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=" + title, {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "imdb8.p.rapidapi.com",
  		"x-rapidapi-key": "33f16e4f7fmsh98dd17eec3d8a2fp16ab71jsncce1b696746d"
  	}
    })*/

    //RECEPT API
    /*
    const response = await fetch("https://api.spoonacular.com/recipes/search?apiKey=a861207a921d4d7d9aa1d74e7f9eca4c&query="+title)
    //const res = await response.json();
    //setData(res.d);
    //https://api.spoonacular.com/recipes/search??apiKey=a861207a921d4d7d9aa1d74e7f9eca4c&query=cheese&number=2
    const res = await response.json();
    console.log(res.results);
    setData(res.results)
    */


    //SUPERHJÄLTAR API
    const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+title+"&apikey=13c9801495b19e2d9ac692bdfd0a2adc")
    const res = await response.json();
    console.log(res.data.results);
    setData(res.data.results);

    console.log("L: " + res.data.length);



    }



  return (
    <main>
      <Navbar/>
      <Search getMovies={getMovies} />
      <AllMovies movies={data}/>
    </main>


  );
}

export default App;
