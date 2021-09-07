import axios from "axios";

const apiKey = 'ee818442'
export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST'
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS'
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR'
export const GET_MOVIE = 'GET_MOVIE'
const fetchMovieRequest = () => {
    return {
        type: FETCH_MOVIE_REQUEST
    }
}

const fetchMovieSuccess = (data) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: data
    }
}

const fetchMovieError = () => {
    return {
        type: FETCH_MOVIE_ERROR
    }
}

const getResultsMovie = (movie) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieRequest())
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
            response.data.Response === 'True' ? dispatch(fetchMovieSuccess(response.data)) : dispatch(fetchMovieError())

        } catch (error) {

        }
    }
}

const getMovie = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
            dispatch({
                type: GET_MOVIE,
                payload: response.data
            })

        } catch (error) {

        }
    }
}

export {
    fetchMovieRequest,
    fetchMovieSuccess,
    fetchMovieError,
    getResultsMovie,
    getMovie
}