import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const AnimeCard = ({ user, anime, handleDeleteAnime, handleUpdateAnime}) => {
    return ( 
        <Card textAlign='center'>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false}  src={anime.image ? anime.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
    <Card.Content>
      <Card.Header>{anime.name}</Card.Header>
      <Card.Meta>
        <span>Genre:{anime.genre}</span>
        <span>Released Date: {anime.released}</span>
      </Card.Meta>
      <Card.Description>
        Description: {anime.summary}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='characters' />
        Favorite Character: {anime.characters}
      </a>
      <div>
      <a>
          <button type="submit" onClick={() => handleDeleteAnime(anime._id)}>Delete</button>
          <Link 
            className="btn yellow black-text"
            to={{
            pathname: '/edit',
            state: {anime}
            }}
            >
                <button>Edit Anime</button>
            </Link>
      </a>
      </div>
    </Card.Content>
  </Card>
     );
}
 
export default AnimeCard;