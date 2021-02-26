import React, { useState } from 'react'
const apiKey = 'ee818442'

export const SearchForm = ({onResults})=>{

    const [movie,setMovie] = useState('')

    const handleInputChange = (e)=>{
        setMovie(e.target.value)
        console.log(movie)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
        .then(response=>response.json())
        .then(results =>{
            const { Search = [], totalResults = '0' } = results
            console.log({ Search, totalResults })
            onResults(Search)
        })
        
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
               className="input"
               type="text"
               placeholder="Movie to search ..."
               onChange={handleInputChange}
            />
          </div>
         <div className="control">
           <button className="button is-info">
            Search
           </button>
         </div>
       </div>
       </form>
    )
}