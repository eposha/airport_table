
export const flightsListSelector = state => {
    return state.flights.flights
};

export const spinnerSelector = state => {
    return state.flights.isLoading
};


export const activeButtonSelector = state => {
    return state.flights.isActiveButton
};

