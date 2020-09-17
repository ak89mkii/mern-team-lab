import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

const UserCard = ({ user, anime }) => {
    return ( 
    <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {user.avatar}
        />
        <Card.Header></Card.Header>
        <Card.Meta>{user.name}</Card.Meta>
        <Card.Description>
          email: {user.email}
          Bio: {user.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Favorite Anime: {user.favorites}
      </Card.Content>
    </Card>
    </Card.Group>
        
     );
}

 
export default UserCard;