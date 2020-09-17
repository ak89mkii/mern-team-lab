import React, {Component} from 'react'
// import { getAnimeList } from '../../services/api-calls'
import { Link } from "react-router-dom"
import AnimeCard from '../../components/AnimeCard/AnimeCard'

const AnimeList = (props) => {

    return( 
        <>
            <h1>Anime List:</h1>
            <div>
                {props.anime.map(anime =>
                    <AnimeCard key={anime._id} anime={anime}/>
                    )}
            </div>
        </> 
    );
}
 //map( element, idx, array)
export default AnimeList;




