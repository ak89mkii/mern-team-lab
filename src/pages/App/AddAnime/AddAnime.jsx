import React, { Component } from 'react';
import './AddAnime.css'
import { Form, Segment } from 'semantic-ui-react'

class AddAnime extends Component {
    state = { 
        formData: {
            name: '',
            genre: '',
            released: '',
            summary: '',
            episodesMovies: '',
            youtube: '',
            image: '',
            characters: [],
        }
     }

     handleSubmit = e =>{
        e.preventDefault();
        this.props.handleAddAnime(this.state.formData)
    }

    handleChange = e => {
       const formData = {...this.state.formData, [e.target.name]: e.target.value};
       this.setState({
       formData
       });
    }

   formRef = React.createRef()
    render() { 

        return ( 
            <>
          <Segment inverted>
        <Form inverted ref={this.formRef} onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Add Name'
              name='name'
              value={this.state.formData.name}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group> 
            <Form.Input
              placeholder='Add Genre'
              name='genre'
              value={this.state.formData.genre}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
            <Form.Input
              placeholder='Add Release Date'
              name='released'
              value={this.state.formData.released}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
            <Form.Input
              placeholder='Add Summary'
              name='summary'
              value={this.state.formData.summary}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
            <Form.Input
              placeholder='Add Episodes'
              name='episodesMovies'
              value={this.state.formData.episodesMovies}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
            <Form.Input
              placeholder='Add Favorite Character(s)'
              name='characters'
              value={this.state.formData.characters}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
             <Form.Input
              placeholder='Add Youtube Url'
              name='youtube'
              value={this.state.formData.youtube}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
            <Form.Input
              placeholder='Add Image'
              name='image'
              value={this.state.formData.image}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
            <Form.Button content='Submit' 
            />
          </Form.Group>
        </Form>
      </Segment>
            </>
         );
    }
}
 
export default AddAnime;