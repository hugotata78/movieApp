import React, { useEffect, useState } from 'react'

import { useParmas } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
const apiKey = 'ee818442'

export const Details = ()=>{
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    const fetchMovie = (id)=>{
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response=>response.json())
        .then(movie =>{
            console.log(movie)
            setMovie(movie)
        })
    }

    useEffect(()=>{
        fetchMovie(id)
    },[id])
    
    return(
        
            <div className='Details'>
            <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={movie.Poster} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      <div className="media-content">
        <h3 className="title is-4">{movie.Title}</h3>
        <h4 className="subtitle is-6">{movie.Director}</h4>
      </div>
    </div>

    <div class="content">
      <p>{movie.Plot}</p>
      <span>{movie.Actors}</span>
      <br/>
      <Link to='/'>Home</Link>
    </div>
  </div>
</div>
            </div>
        
    )

}
