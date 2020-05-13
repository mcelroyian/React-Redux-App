import axios from 'axios'

export const GET_BREWS_START = "GET_BREWS_START"
export const GET_BREWS_SUCCESS = "GET_BREWS_SUCCESS"
export const GET_BREWS_FAILURE = "GET_BREWS_FAILURE"

export const getBrews = (endpoint = 'by_state', value = 'Mississippi') => dispatch =>{
    //set loading
    dispatch({ type: GET_BREWS_START })

    //get brews
    axios
        .get(`https://api.openbrewerydb.org/breweries?${endpoint}=${value}`)
        .then(res => {
            //res.data is array of breweries
            dispatch({ type: GET_BREWS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.data)
            dispatch({ type: GET_BREWS_FAILURE, payload: err.data })
        })
}
