import React from 'react';
import './App.css';



function Navbar(){
  return(
    <div className="navbar">
      <h1>My Movies</h1>
      <div>
        <a>Search Movies</a>
        <a>new movie</a>
        <a>My Movies</a>
      </div>
    </div>
  );
}

function Search(props){
  return(
    <div className="search-input">
      <h1>Search among 8485739 movies</h1>
      <input placeholder="Search" onChange={event=>props.getMovies(event.target.value)}></input>
    </div>
  );
}

function Movie(props){
  return(
    <div className="card">
      <img src="avengers.jpg" alt="Avengers"></img>
      <div className="container">
        <h4><b>Avengers</b></h4>
        <img src={props.image}></img>
      </div>
   </div>
 );

}


function App(){
  var [data, setData] = React.useState([]);

  const getMovies = async (title) =>{
    console.log("Search: " + title);

    const response = await fetch("https://imdb8.p.rapidapi.com/title/find?q=" + title, {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "imdb8.p.rapidapi.com",
  		"x-rapidapi-key": "33f16e4f7fmsh98dd17eec3d8a2fp16ab71jsncce1b696746d"
  	}
    })

    const res = await response.json();
    setData(res.results);
    //console.log(res.results[0].image.url);





  }

/*
  for(var i = 0; i < data.length; i++){
    console.log(data[i].image.url);
  }*/

  return (
    <main>
      <Navbar/>
      <Search getMovies={getMovies} />
      {data.map(data =>(

        <Movie image={data.image.url} />
      ))}
    </main>


  );
}

export default App;
