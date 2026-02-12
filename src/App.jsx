import React from 'react';
import {useState , useEffect, createContext} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Watchlist from './Components/Watchlist.jsx';
import Modal from './Components/Modal.jsx';

const genreContext = createContext();
const App = () => {
  const [watchlist , setWatchlist] = useState([]);
  const[genre, setGenre] = useState({});
  const [query, setQuery] = useState('');
  const [showGenre, setShowGenre] = useState(false);
  const[movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); 
  const[selectedGenre, setSelectedGenre] = useState(null);
  const getGenre = async() => {
      let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=8e8f20999ead7a8769aa1088fa689515&page=${page}`);
      const genreObj ={};
      res.data.genres.forEach((g) => {
        genreObj[g.id] = g.name;
      });
      setGenre(genreObj);
  }
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
  };
  const fetchByGenre = async(id) => {
    let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=8e8f20999ead7a8769aa1088fa689515&page=${page}`);
    setMovies(res.data.results);
  }
  
  useEffect(() => {
    getGenre();
  }, []);
  // useEffect(() => {
  //   if(selectedGenre){
  //     fetchByGenre(selectedGenre);
  //     setPage(1);
  //   }
  // },[selectedGenre]);
  useEffect(function(){
      if(selectedGenre){
      fetchByGenre(selectedGenre);
      
    }
  }, [selectedGenre, page]);

  return (
    <>
      <genreContext.Provider value = {{genre, setGenre}}>
      <Navbar query={query} setQuery = {setQuery} showGenre ={showGenre} setShowGenre = {setShowGenre}/>
      {showGenre &&
      <>
       <div className="overlay" onClick={() => setShowGenre(false)}></div>
       <Modal selectedGenre={selectedGenre} setSelectedGenre= {setSelectedGenre}/>
       </>
       } 
       
      <Routes>
      <Route path='/' element = {<Home addToWatchlist = {addToWatchlist} query={query} genre={genre} setGenre={setGenre} getGenre = {getGenre} movies={movies} setMovies={setMovies} page = {page} setPage={setPage} selectedGenre={selectedGenre} />}></Route>
      <Route path='/watchlist' element = {<Watchlist watchlist = {watchlist} removeMovie = {removeMovie}  genre = {genre}/>}></Route>
      </Routes> 
      </genreContext.Provider>
    </>
    

  )
}

export default App
export {genreContext};