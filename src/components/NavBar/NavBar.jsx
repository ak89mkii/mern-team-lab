// import React, { Component } from 'react';
// import { Input, Menu } from 'semantic-ui-react'

// const NavBar = ({ user, handleLogout }) => {
//     return (
//     <div>
//       {user ?
//         <nav className="navBar">
//           <div className="nav-wrapper">
//             <ul id="nav-mobile" className="right">
//               <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
//               <li><a href="/users" className="nav-link">Users</a></li>
//               <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
//               <li><a href="/anime/add" className="nav-link">Add Anime</a></li>
//               <li><a href="/anime/" className="nav-link">Anime List</a></li>
//             </ul>
//           </div>
//         </nav>
//       :
//         <nav>
//           <div className="nav-wrapper">
//             <ul id="nav-mobile" className="right">
//               <li><a href="/login" className="nav-link">Log In</a></li>
//               <li><a href="/users" className="nav-link">Users</a></li>
//               <li><a href="/signup" className="nav-link">Sign Up</a></li>
//             </ul>
//           </div>
//         </nav>
       
//       }
//     </div>
//     )
// }

import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

// export default NavBar;


