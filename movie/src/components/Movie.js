import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Movie = ({ title,poster,type,year,id})=>{
    return(
        
        <div className="card">
  <div className="card-image">
    <figure className="image ">
    <Link to={`/movie/${id}`} className="subtitle is-6"> <img src={poster} alt={title}/></Link>
    </figure>
  </div>
  
</div>
    )
}