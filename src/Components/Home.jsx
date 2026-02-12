import React from 'react'
import{useState ,useEffect, useContext} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.jsx';
import Pagination from './Pagination.jsx';
import {genreContext} from '../App';

const Home = ({addToWatchlist, query, setQuery, movies, setMovies, page, setPage, selectedGenre}) => {
  const {genre, setGenre} = useContext(genreContext); 
  
  useEffect(function(){
    if(selectedGenre) return ;
    else if(query === ''){
      getMovies();
    }
    else{
      searchMovies();
    }
  },[query, page, selectedGenre]);
  function next(){
  setPage(page+1);    //next page 
  scrollTo(0,0);
};
function prev(){
  setPage(page-1);
  if(page>1) {
    setPage(page-1);    //prev page 
  }else{
    setPage(1);
  }
};
function BackToHome(){
  setPage(1);
  scrollTo(0,0);
}
function MoveToTop(){  
  scrollTo(0,0);
};                        //back to top 
const getMovies = async() =>{
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=8e8f20999ead7a8769aa1088fa689515&region=IN&sort_by=popularity.desc&page=${page}`;
  let res = await axios.get(url);
  setMovies(res.data.results);
}
const searchMovies = async() => {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=8e8f20999ead7a8769aa1088fa689515&query=${query}&page=${page}`;
  let res = await axios.get(url);
  setMovies(res.data.results);
}
  return (
    <div className= "home">
      <h1>🙋🏻 Trending 🎥 for You!! </h1>
        <div className="card-container">
          <MovieCard movies={movies} genre={genre} addToWatchlist={addToWatchlist}/>
        </div>

      <Pagination page={page} prev={prev} next={next} MoveToTop={MoveToTop} BackToHome={BackToHome} genre={genre}/>
    </div>
  )
}

export default Home
