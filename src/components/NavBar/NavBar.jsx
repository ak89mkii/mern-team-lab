import React, { Component } from 'react';


const NavBar = ({ user, handleLogout }) => {
    return (
    <div>
      {user ?
        <nav className="navBar">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
              <li><a href="/users" className="nav-link">Users</a></li>
              <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
              <li><a href="/anime/add" className="nav-link">Add Anime</a></li>
              <li><a href="/anime/" className="nav-link">Anime List</a></li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href="/login" className="nav-link">Log In</a></li>
              <li><a href="/users" className="nav-link">Users</a></li>
              <li><a href="/signup" className="nav-link">Sign Up</a></li>
            </ul>
          </div>
        </nav>
       
      }
    </div>
    )
}

export default NavBar;


