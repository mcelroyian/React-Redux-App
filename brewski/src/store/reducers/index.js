import { GET_BREWS_START, GET_BREWS_SUCCESS, GET_BREWS_FAILURE, SEARCH_INPUT_CHANGE, SEARCH_INPUT_SUBMIT } from '../actions'


const initialState = {
    isLoading: false,
    locations: [],
    state: '',
    city: null,
    zip: null,
    error: '',
    search: '',
    endpointValue: '',
    endpoint: ''
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
        case SEARCH_INPUT_CHANGE:
            // const slice = action.payload.target.name
            // const value = action.payload.target.value
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value,
            }
        case SEARCH_INPUT_SUBMIT:
            return {
                ...state,
                city: action.payload,
                search: ''
            }
        default:
            return {
                ...state
            }
    }
}