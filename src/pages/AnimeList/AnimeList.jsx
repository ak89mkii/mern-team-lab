import React, {Component} from 'react'
import { getAnimeList } from '../../services/api-calls'
import { Link } from "react-router-dom"
import { render } from '@testing-library/react'

class AnimeList extends Component {
    state = {
        AnimeList: []
    }


async componentDidMount() {
    const AnimeList = await getAnimeList()
    console.log(AnimeList)
    this.setState({ animeList: animeList.results })
}

    render() {
        return (
            <>
                <h1>Anime List</h1>
                {this.state.animeList.map((anime) =>
                <div key={starship.url}>
                <Link
                to={{
                    pathname: "/anime",
                    state: { anime }
                }}
                >
                {anime.name}
                </Link><br></br>
                </div>
                )}
            </>
        )
    }
}

export default AnimeList