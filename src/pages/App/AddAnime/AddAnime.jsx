import React, { Component } from 'react';
import './AddAnime.css'

class AddAnime extends Component {
    state = { 
        invalidForm: true,
        formData: {
            name: '',
            genre: '',
            releaseDate: '',
            summary: '',
            episodes: '',
            favoriteCharacter: [],
            youtubeUrl: '',
            image: '',
        }
     }
    render() { 
        return ( 
            <>
                
            </>
         );
    }
}
 
export default AddAnime;