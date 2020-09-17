import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const AnimeCard = ({ user, anime, handleDeleteAnime }) => {
    return ( 
        <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false}  src={anime.image ? anime.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
    <Card.Content>
      <Card.Header>{anime.name}</Card.Header>
      <Card.Meta>
        <span>{anime.genre}</span>
        <span>{anime.released}</span>
      </Card.Meta>
      <Card.Description>
        {anime.summary}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
     );
}
 
export default AnimeCard;