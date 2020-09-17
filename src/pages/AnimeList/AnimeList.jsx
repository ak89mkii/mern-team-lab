
import React from 'react'
import AnimeCard from '../../components/AnimeCard/AnimeCard'
import './AnimeList.css'

const AnimeList = (props) => {

    return( 
        <>
            <h1>Anime List:</h1>
            <div className='AnimeList-grid'>
                {props.anime.map(anime =>
                    <AnimeCard key={anime._id} anime={anime}
                     handleDeleteAnime={props.handleDeleteAnime}
                    />
                    )}
            </div>
        </> 
    );
}
 //map( element, idx, array)
export default AnimeList;