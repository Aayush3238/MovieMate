import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import Modal from './Modal';
import {useState} from 'react';
const Navbar = ({query, setQuery , showGenre, setShowGenre}) => {
  const location = useLocation();
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="nav-item logo"><NavLink to="/">MovieMate</NavLink></li>
        <li className="nav-item"><NavLink to="/">Home</NavLink></li>
        {location.pathname === '/' && (
          <li className="nav-item nav-search">
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setQuery(e.target.value)}
            />
          </li>
        )}
        <li className="nav-item">
          <button className="explore-btn" onClick={() => setShowGenre(true)}>
            Explore Genres
          </button>
        </li>
        <li className="nav-item"><NavLink to="/watchlist">Watchlist</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
