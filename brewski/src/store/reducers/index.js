import { GET_BREWS_START, GET_BREWS_SUCCESS, GET_BREWS_FAILURE } from '../actions'


const initialState = {
    isLoading: false,
    locations: [],
    state: null,
    city: null,
    zip: null,
    error: ''
}

export const beerReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BREWS_START:
            return {
                ...state,
                isLoading: true,
            }
        case GET_BREWS_SUCCESS:
            return {
                ...state,
                locations: action.payload,
                isLoading: false,
            }
        case GET_BREWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}