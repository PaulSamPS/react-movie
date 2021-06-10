import React, { Component } from 'react'
import Movies from '../../components/movie-list'
import Spinner from '../../components/spinner'
import Search from '../../components/search'

const API_KEY = process.env.API_KEY

export default class Main extends Component {
    state = {
        movies: [],
        loading: true
    }
    _apiBase = `http://www.omdbapi.com/?apikey=${ API_KEY }&s=`

    componentDidMount() {
        fetch(`${this._apiBase}matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true })
        fetch(`${this._apiBase}${str}${
            type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false  }))
    }

    render() {
        const { movies, loading } = this.state
        const loadingContent =
            loading ? <Spinner /> : <Movies movies={ movies }/>


        return(
            <main className='container content'>
                <Search searchMovies={ this.searchMovies }/>
                { loadingContent }
            </main>
        )
    }
}