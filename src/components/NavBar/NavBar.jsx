import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          as={Link}
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/anime'
          name='anime list'
          active={activeItem === 'anime list'}
          onClick={this.handleItemClick}
          
        />
        {this.props.user ? <>
          <Menu.Item
          as={Link}
          to='/anime/add'
          name='add anime'
          active={activeItem === 'add anime'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
          as={Link}
          to='/'
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.props.handleLogout}
        />
      
         </> 
        : 
        <> 
        <Menu.Item
          as={Link}
          to='/login'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        
        </>}
       
      </Menu>
    )
  }
}
export default NavBar;





// const NavBar = ({ user, handleLogout }) => {
//   return (
//     <Menu inverted>
//       <Menu.Item
//         name='home'
//         active={activeItem === 'home'}
//         onClick={this.handleItemClick}
//       />
//       <Menu.Item
//         name='messages'
//         active={activeItem === 'messages'}
//         onClick={this.handleItemClick}
//       />
//       <Menu.Item
//         name='friends'
//         active={activeItem === 'friends'}
//         onClick={this.handleItemClick}
//       />
//     </Menu>
//   )
// }

// export default NavBar