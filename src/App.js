import RickMorty from './img/Wallpaper.png';
import './App.css';
import Characters from './components/characters';
import { useState } from 'react';

function App() {
  const[character , setcharacter] = useState(null)

  const reqapi = async ()  => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()

    setcharacter(characterApi.results)
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1 className='title'>Rick & Morty</h1>
      {character ?(
        <Characters characters = {character} setcharacter = {setcharacter}/>
      ) : (
        <>
        <img src={RickMorty} className="img-home" alt="Rick & Morty"/>
        <button onClick={reqapi} className='btn-search'>Vamos a ver</button>
        </>
      )}
      
      
      </header>
    </div>
  );
}

export default App;
