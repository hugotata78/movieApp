import { FETCH_MOVIE_ERROR, FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, GET_MOVIE } from "../action/movieAction"

const initialState ={
    movies:{},
    loading:false,
    error:false,
    movie:{}
}

const movieReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MOVIE_REQUEST:
            return{
                ...state,
                movies:{},
                loading:true,
                error:false
            }
        case FETCH_MOVIE_SUCCESS:
            return{
                ...state,
                movies:action.payload,
                loading:false,
                error:false
            }
        case FETCH_MOVIE_ERROR:
            return{
                ...state,
                movies:{},
                loading:false,
                error:true
            }
        case GET_MOVIE:
            return{
                ...state,
                movie:action.payload
            }
        default:
            return state
    }
}

export default movieReducer