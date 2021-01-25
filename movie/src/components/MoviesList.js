import React from'react'
import { Movie } from './Movie'


export const MoviesList = ({results})=>{

    const renderResults = ()=>{
        return(
          results.map(res=>{
            return(
              
              <div 
              className='MoviesListItem'
              key={res.imdbID} 
              >
              
              <Movie 
                id={res.imdbID}
                title={res.Title}
                poster={res.Poster}
                type={res.Type}
                year={res.Year}
              />
              
              </div>
              
            )
          })
        )
      }
    return(
        <div className='MoviesList'>
            {
                renderResults()
            }
        </div>
    )
}