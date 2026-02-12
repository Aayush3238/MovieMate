import React from 'react';
import {useContext, useState} from 'react';
import {genreContext} from '../App';

const Modal = ({selectedGenre, setSelectedGenre}) => {
  const {genre , setGenre} = useContext(genreContext);
  const [searchGenre, setSearchGenre] = useState('');
  return (
    <div className = "modal">
        <div className="searchGenre">
            <input type="text" placeholder="Search Genre" value = {searchGenre} onChange={(e) => {
                setSearchGenre(e.target.value)
            }}/>
        </div>
        {Object.entries(genre).filter(([Id, Name]) => 
            Name.toLowerCase().includes(searchGenre.toLowerCase())
        )
        .map(([Id, Name]) => (
            <button className ="genrebtn"onClick = {() => setSelectedGenre(Id)}>
                {Name}
            </button>
        ))
        }
    </div>
  )
}

export default Modal;
