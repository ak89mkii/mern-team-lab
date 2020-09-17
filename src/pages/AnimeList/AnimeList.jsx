<<<<<<< HEAD
import React, {Component} from 'react'
import { Link } from "react-router-dom"
=======
import React from 'react'

>>>>>>> 12bf9ad7fcb454de69c741de7ad16e8ba4fa3f65
import AnimeCard from '../../components/AnimeCard/AnimeCard'
import './AnimeList.css'

const AnimeList = (props) => {

    return( 
        <>
            <h1>Anime List:</h1>
            <div className='AnimeList-grid'>
                {props.anime.map(anime =>
                    <AnimeCard key={anime._id} anime={anime}/>
                    )}
            </div>
        </> 
    );
}
 //map( element, idx, array)
export default AnimeList;




