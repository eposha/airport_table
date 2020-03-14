import { FLIGHTS_DEPARTURES, SHOW_SPINNER, TOGGLE_ACTIVE_BUTTON } from './flights.actions';


const initialState = {
    flights: [],
    isActiveButton: false,
    isLoading: false,
}

export const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIGHTS_DEPARTURES:
            return {
                ...state,
                flights: action.payload.flights,
                isLoading: !state.isLoading,
            };
        case SHOW_SPINNER:
            return {
                ...state,
                isLoading: !state.isLoading
            };

        case TOGGLE_ACTIVE_BUTTON:
            return {
                ...state,
                isActiveButton: action.payload.boolean
            }


        default: return state
    }
}