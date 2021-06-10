import React, { Component } from 'react'
import Movies from '../../components/movie-list'
import Spinner from '../../components/spinner'
import Search from '../../components/search'

// const API_KEY = process.env.API_KEY

export default class Main extends Component {
    state = {
        movies: [],
        loading: true
    }
    _apiBase = `https://www.omdbapi.com/?apikey=83b48e90&s=`

    componentDidMount() {
        fetch(`${this._apiBase}matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch((err) => {
                console.log(err)
                this.setState({ loading: false })
            })
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true })
        fetch(`${this._apiBase}${str}${
            type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false  }))
            .catch((err) => {
                console.log(err)
                this.setState({ loading: false })
            })
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