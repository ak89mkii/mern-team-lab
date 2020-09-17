import React from 'react'

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




