import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import AnimeList from "../AnimeList/AnimeList";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import AddAnime from './AddAnime/AddAnime';
import * as animeApi from '../../services/anime-api'

class App extends Component {
  state = {
    user: authService.getUser(),
    anime: []
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  async componentDidMount(){
    const anime = await animeApi.getAll()
    this.setState({anime})
  }

  handleDeleteAnime = async id =>{
    if(authService.getUser()){
      await animeApi.deleteAnime(id)
      this.setState({
        anime: this.state.anime.filter(a => a._id !== id)
      }, this.props.history.push('/anime'))
    }else{
      this.props.history.push('/login')
    }
  }

  handleUpdateAnime = async updateAnimeData => {
    const updatedAnime = await animeApi.updateAnime(updateAnimeData)
    this.setState({
      anime: this.state.anime.map(a => a._id === updatedAnime._id ? updatedAnime : a)
    }, ()=>this.props.history.push('/'))
  }

  handleAddAnime = async newAnimeData => {
    const newAnime = await animeApi.createAnime(newAnimeData)
    this.setState({anime: [...this.state.anime, newAnime]},
      ()=> this.props.history.push('/'))
  }

  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route 
          exact path='/anime'
          render={( {location} ) => 
          <AnimeList
            location={location}
              anime={this.state.anime}
              user={this.state.user}
              handleDeleteAnime={this.handleDeleteAnime}

          />
          }/>
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
          <Route 
          exact path='/anime/add'
          render={() =>
            authService.getUser() ?
            <AddAnime 
            handleAddAnime = {this.handleAddAnime}
            user={this.state.user}
            />
          :
          <Redirect to='/login' />
          }/>
      </>
    );
  }
}

export default App;
