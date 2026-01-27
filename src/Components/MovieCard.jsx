import React from 'react'

const MovieCard = ({movies, genre, addToWatchlist}) => {
 if(movies.length==0){
  return (
  <h2>Loding movies for you ...</h2>
  );
 }
  const genreNames = (ids) => {
    return ids.map((id) => genre[id]).join(",");
  }
  return (
    <>
    {movies.map((movie) => (
      
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <h3>{movie.title}</h3>
      <p className="desc">{movie.overview}</p>
      <p className="rating"> ⭐{movie.vote_average}</p>
      <p className="genre">{genreNames(movie.genre_ids)}</p>
      <button onClick={() => addToWatchlist(movie)}>Add to Watchlist </button>
    </div>
    ))}
    </>
  )
}

export default MovieCard
