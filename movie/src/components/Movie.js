import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import img from '../img/img.jpg'

export const Movie = ({ title, poster, type, year, id }) => {

  const Poster = poster==='N/A'?img:poster
  return (

    <div className="card">
      <div className="card-image">
        <figure className="image ">
          <Link to={`/movie/${id}`} className="subtitle is-6"> <img src={Poster} alt={title} /></Link>
        </figure>
      </div>

    </div>
  )
}