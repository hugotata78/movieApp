import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchForm = () => {


  const [movie, setMovie] = useState('')
  const history = useHistory()

  const handleInputChange = (e) => {
    setMovie(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    movie === '' ?
      Swal.fire('Enter data to make the query')
      :
  
      history.push(`/${movie}`)
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="field has-addons search-form">
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
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>
      </div>
    </form>
  )
}