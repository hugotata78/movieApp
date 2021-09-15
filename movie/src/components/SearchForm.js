import React, { useState } from 'react'
import { useHistory } from 'react-router'


export const SearchForm = () => {

  
  const [movie, setMovie] = useState('')
  const history = useHistory()

  const handleInputChange = (e) => {
    setMovie(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/${movie}`)
  }

  return (
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