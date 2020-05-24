import React from 'react';
import './Search.css';
import HeroCard from './HeroCard';



/*SÖK RUTAN*/
function Search(props){
  var [input, setInput] = React.useState("");

  //Gör sökning
  const search= event =>{
    if(input.length > 0){
      props.getSuerheroes(input);
    }else{
      alert("Please enter input")
    }
    setInput("");
  }

  return(
    <div className="search-input">
      <h1>Search among 8485739 heroes</h1>
      <div className="search-button">
        <input placeholder="Search" onChange={event=>setInput(event.target.value)}
          value={input} onKeyPress={event => {if (event.key === 'Enter') {search()}}}>
        </input>
        <button onClick={search}>Go</button>
      </div>
    </div>
  );
}




function SearchApp(){
  var [data, setData] = React.useState([]);

  const getSuerheroes = async (title) =>{
    //Nollställer resultat efter man tryckt på sök knapp
    setData([]);

    //Marvel API
    const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+title+"&apikey=13c9801495b19e2d9ac692bdfd0a2adc")
    const res = await response.json();
    console.log(res.data.results);

    if(res.data.results.length <1){
      alert("No result");
    }else{
      setData(res.data.results);
    }
  }

  return (
    <main>
      <Search getSuerheroes={getSuerheroes} />
      <HeroCard heroes={data}/>
    </main>
  );
}

export default SearchApp;
