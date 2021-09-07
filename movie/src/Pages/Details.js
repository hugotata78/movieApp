import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import MovieDetail from '../components/MovieDetail';
import NavBar from '../components/NavBar';
import { getMovie } from '../redux/action/movieAction';


export const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const movie = useSelector(state => state.movieReducer.movie)

  useEffect(() => {
    dispatch(getMovie(id))
  }, [dispatch, id])

  return (

    <div>
      <NavBar />
      <MovieDetail movie={movie} />
    </div>

  )

}
