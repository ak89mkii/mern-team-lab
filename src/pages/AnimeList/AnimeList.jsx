
import React, {Component} from 'react'
import { Link } from "react-router-dom"

import React from 'react'

import React from 'react'

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