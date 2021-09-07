import { useState } from 'react';
import { MoviesList } from '../components/MoviesList'
import Title  from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import NavBar from '../components/NavBar';
import NotFound from './NotFound';

export const Home = ()=>{

    const [results, setResults ] = useState([])
    const [search, setSearch ] = useState(false)
  
    const handleResults = (res)=>{
      setResults(res)
      setSearch(true)
    }
    
    const getResults = ()=>{
      return !results.length ?
      <NotFound/>
      :
      <MoviesList results={results}/>
    }
    
    return (
      <div className="App">
        <NavBar/>
        <Title/>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={handleResults}/>
        </div>
        {
          !search ?
          <small className='mt-2'>Use the form to perform a search</small>
          :
          <div>{getResults()}</div>
        }
      </div>
    );
}