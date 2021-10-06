import React from "react";
import { useHistory } from "react-router";
import img from '../img/img.jpg'

const MovieDetail = ({ movie }) => {

    const history = useHistory()

    const handleOnClick = (e) => {
        e.preventDefault()
        history.push('/')
      }
    const prevPage = (e)=>{
        e.preventDefault()
        history.goBack()
    }

    const poster = movie.Poster==='N/A' ? img: movie.Poster
    return (
        <div className='Details'>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={ poster } alt={movie.Title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">

                        <div className="media-content">
                            <h3 className="title is-4">{movie.Title}</h3>
                            <h4 className="subtitle is-6">{movie.Director}</h4>
                        </div>
                    </div>

                    <div className="content">
                        <p>{movie.Plot}</p>
                        <span>{movie.Actors}</span>
                        <br />
                        <button className="button is-link m-4" onClick={e => handleOnClick(e)}>Home</button>
                        <button className="button is-success m-4" onClick={e => prevPage(e)}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetail