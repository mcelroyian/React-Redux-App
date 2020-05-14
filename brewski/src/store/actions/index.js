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

export const SEARCH_INPUT_CHANGE = "SEARCH_INPUT_CHANGE"
export const SEARCH_INPUT_SUBMIT = "SEARCH_INPUT_SUBMIT"

export const handleChanges = e => {
    return { type: SEARCH_INPUT_CHANGE, payload: e }
}

export const handleSubmit = term => {
    return { type: SEARCH_INPUT_SUBMIT, payload: term }
}
