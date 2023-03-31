import { GET_COUNTRIES } from "../actions";

let initialState = {
    countries: [],
    allCountries: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload
            }
    
        default:
            return state
    }
}


export default rootReducer;