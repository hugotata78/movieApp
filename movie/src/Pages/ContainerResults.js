import React from "react";
import { useSelector } from "react-redux";
import { MoviesList } from "../components/MovieList";
import NavBar from '../components/NavBar'
import NotFound from "../components/NotFound";
import PageLoader from "../components/PageLoader";



const ContainerResults = () => {
    const data = useSelector(state => state.movieReducer.movies)
    const error = useSelector(state => state.movieReducer.error)
    const loading = useSelector(state => state.movieReducer.loading)

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