import React from 'react'

const Watchlist = ({watchlist, genre, removeMovie}) => {
  
  if(watchlist.length=== 0){
    return (
      <h1>Watchlist is empty </h1>
    )
  }

  const genreNames = (ids) => {
    return ids.map((id) => genre[id]).join(", ");
  }
  
return (
  <>
    <div className="heading"><h1>Your Watchlist</h1></div>
    <div className="Watchlist">
      {watchlist.map((movie) => (
        <div className="watchCard" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p className ="genre">{genreNames(movie.genre_ids)}</p>
          <p className="desc">{movie.overview}</p>
          <p className="rating">⭐ {movie.vote_average}</p>
          <button onClick={() => removeMovie(movie)}>Remove from Watchlist</button>
        </div>
      ))}
    </div>
  </>
)

}

export default Watchlist
