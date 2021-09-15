import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { MoviesList } from "../components/MovieList";
import NavBar from '../components/NavBar'
import NotFound from "../components/NotFound";
import PageLoader from "../components/PageLoader";
import { getResultsMovie } from "../redux/action/movieAction";



const ContainerResults = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.movieReducer.movies)
    const error = useSelector(state => state.movieReducer.error)
    const loading = useSelector(state => state.movieReducer.loading)
    const { movie } = useParams()

    useEffect(()=>{
        dispatch(getResultsMovie(movie))
    },[dispatch,movie])

    return (
        <div>
            <NavBar />
            {loading && <PageLoader />}
            {<MoviesList results={data && data.Search} />}
            {error && <NotFound />}
        </div>
    )
}

export default ContainerResults