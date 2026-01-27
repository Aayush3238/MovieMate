import React from 'react';
import {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Watchlist from './Components/Watchlist.jsx';


const App = () => {
  const [watchlist , setWatchlist] = useState([]);
  const [query, setQuery] = useState('');
  function addToWatchlist(movie){
    setWatchlist(prev=> {
      let present = prev.find((m) => m.id === movie.id);
      if(!present){
        return [...prev, movie];
      }
      else{
        return prev;
      };
    });
  }
  function removeMovie(movie){
    setWatchlist(prev => prev.filter((m) => m.id !== movie.id));
  }
  

  return (
    <>
      <Navbar query={query} setQuery = {setQuery}/>
      <Routes>
      <Route path='/' element = {<Home addToWatchlist = {addToWatchlist} query={query}/>}></Route>
      <Route path='/watchlist' element = {<Watchlist watchlist = {watchlist} removeMovie = {removeMovie} />}></Route>
      </Routes>
    </>
    

  )
}

export default App
