import { useState } from 'react';
import { MoviesList } from '../components/MoviesList'
import Title  from '../components/Title'
import { SearchForm } from '../components/SearchForm'

export const Home = ()=>{

    const [results, setResults ] = useState([])
    const [search, setSearch ] = useState(false)
  
    const handleResults = (res)=>{
      setResults(res)
      setSearch(true)
    }
    
    const getResults = ()=>{
      return !results.length ?
      <small>No search results found</small>
      :
      <MoviesList results={results}/>
    }
    
    return (
      <div className="App">
        <Title/>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={handleResults}/>
        </div>
        {
          !search ?
          <small>Use the form to perform a search</small>
          :
          <div>{getResults()}</div>
        }
      </div>
    );
}