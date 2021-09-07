import React from "react";
import { useSelector } from "react-redux";
import { MoviesList } from "../components/MovieList";
import NavBar from '../components/NavBar'
import NotFound from "../components/NotFound";

const ContainerResults = () => {
    const data = useSelector(state => state.movieReducer.movies)
    const error = useSelector(state => state.movieReducer.error)
    return (
        <div>
            <NavBar />
            {error && <NotFound />}
            {data.Search && <MoviesList results={data.Search}/>}
        </div>
    )
}

export default ContainerResults