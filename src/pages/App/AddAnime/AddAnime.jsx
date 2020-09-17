import React, { Component } from 'react';
import './AddAnime.css'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

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
    <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Opinion'
      placeholder='Opinion'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
    </Form>
            </>
         );
    }
}
 
export default AddAnime;