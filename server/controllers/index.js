const apiKey = 'ee818442'
const axios = require('axios')
const url = `http://www.omdbapi.com/?apikey=${apiKey}`


const getResultsMovies = async (req,res)=>{
    try {
        const response = await axios.get(`${url}&s=${req.params.movie}`)
        res.json(response.data)
    } catch (error) {
        res.json(null)
    }
}

const getMovie = async (req,res)=>{
    try {
        const response = await axios.get(`${url}&i=${req.params.id}`)
        res.json(response.data)
    } catch (error) {
        res.json(null)
    }
}

module.exports={
    getResultsMovies,
    getMovie
}