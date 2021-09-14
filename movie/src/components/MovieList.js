import React from 'react'
import { Movie } from './Movie'


export const MoviesList = ({ results }) => {

  
  const renderResults = () => {
    return (
      results && results.map(r => {
        return (

          <div
            className='MoviesListItem'
            key={r.imdbID}
          >

            <Movie
              id={r.imdbID}
              title={r.Title}
              poster={r.Poster}
              type={r.Type}
              year={r.Year}
            />

          </div>

        )
      })
    )
  }
  return (
    <div className='MoviesList'>

      {
        renderResults()
      }
    </div>
  )
}