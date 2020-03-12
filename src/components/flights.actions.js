import { fetchFlightsList } from '../flightsApi/fetchFlights'

export const FLIGHTS_DEPARTURES = 'FLIGHTS_DEPARTURES';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const TOGGLE_ACTIVE_BUTTON = 'TOGGLE_ACTIVE_BUTTON'


export const flightsListRecieved = flights => {
    return {
        type: FLIGHTS_DEPARTURES,
        payload: {
            flights
        }
    }
};

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
};

export const toggleActiveButton = (boolean) => {
    return {
        type: TOGGLE_ACTIVE_BUTTON,
        payload: {
            boolean
        }
    }
}


export const getFlightsList = type => (dispath, getState) => {
    if (type === 'arrival') {
        dispath(toggleActiveButton(true))
    } else {
        dispath(toggleActiveButton(false))
    }
    dispath(showSpinner());
    fetchFlightsList()
        .then(item => dispath(flightsListRecieved(item.body[type])))
} 