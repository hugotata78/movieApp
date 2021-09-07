import React from 'react';
import Title from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import NavBar from '../components/NavBar';


export const Home = () => {


  return (
    <div className="App">
      <NavBar />
      <Title />
      <div className='SearchForm-wrapper'>
        <SearchForm />
      </div>
      <small className='mt-2'>Use the form to perform a search</small>
    </div>
  );
}