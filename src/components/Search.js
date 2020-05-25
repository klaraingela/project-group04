import React from 'react';
import './Search.css';
import HeroCard from './HeroCard';



/*SÖK RUTAN*/
function Search(props){
  var [input, setInput] = React.useState("");

  //Gör sökning
  const search= event =>{
    props.getSuerheroes(input);
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
      <p id='res'>{props.message}</p>
    </div>
  );
}



function SearchApp(){
  var [data, setData] = React.useState([]);
  var [message,setMessage] = React.useState('');
  const getSuerheroes = async (title) =>{
    if(title.length < 1){
      setMessage('Please enter input');
    }else{
      setData([]);
      setMessage('Loading...')

      //Marvel API
      const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+title+"&apikey=13c9801495b19e2d9ac692bdfd0a2adc");
      const res = await response.json();

      console.log(res.data.results);
      if(res.data.results.length <1){
        console.log('ja');
        setMessage('No result');

        //alert("No result");
      }else{
        setMessage('');
      }
      setData(res.data.results);
    }
  }


  return (
    <div>
      <Search getSuerheroes={getSuerheroes} message={message} />
        <div id='herocard'>
          <HeroCard  heroes={data} location={'search'} />
        </div>
    </div>
  );
}



export default SearchApp;
