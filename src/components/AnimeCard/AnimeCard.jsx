import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const AnimeCard = ({ user, anime, handleDeleteAnime }) => {
    return ( 
        <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
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