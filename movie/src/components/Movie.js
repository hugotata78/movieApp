import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Movie = ({ title,poster,type,year,id})=>{
    return(
        
        <div className="card">
  <div className="card-image">
    <figure className="image ">
      <img src={poster} alt={title}/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      <div className="media-content">
        <Link to={`/movie/${id}`} className="subtitle is-6"> {title} </Link>
        <p className="subtitle is-6">{type}</p>
        <p className="subtitle is-6">{year}</p>
      </div>
    </div>

    
  </div>
</div>
    )
}