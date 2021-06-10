import React from 'react'

const Movie = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props
    const checkPoster = poster === 'N/A'
        ?
        <img className='activator' src={`https://via.placeholder.com/300x400?text=${title}`}/>
        :
        <img className='activator' src={ poster }/>

    return(
        <div id={ id } className='card movie'>
            <div className='card-image waves-effect waves-block waves-light'>
                { checkPoster }
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    { title }
                </span>
                <p>
                    { year}
                    <span className='right'>
                        { type }
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Movie