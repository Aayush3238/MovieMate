import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import Modal from './Modal';
import {useState} from 'react';
const Navbar = ({query, setQuery , showGenre, setShowGenre}) => {
  const location = useLocation();
  return (
    <div className="navbar">
      <ul className="nav">
        <li><NavLink to = '/' >MovieMate</NavLink></li>
        <li><NavLink to = '/'>Home</NavLink></li>
        {location.pathname === '/' && ( 
          <li>
          <input type="text" placeholder="Search movies..." value={query} 
           onChange={(e) => {
              setQuery(e.target.value);
           }} 
           onKeyDown={(e) => {
            if(e.key === "Enter"){
              setQuery(e.target.value);
            }
           }}
          />

        </li>)}<br/>
        <button onClick = {()=> {setShowGenre(true)}}>Explore Genres</button>
        <li><NavLink to = '/watchlist'>Watchlist</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
