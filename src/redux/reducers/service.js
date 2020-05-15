import {FETCH_SERVICES_PENDING, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_ERROR} from '../actions/service';

const initialState = {
    spending: false,
    services: [],
    searchText:"",
    serror: null
}

export function servicesReducer(state = initialState, action) {
    console.log("servicesReducer",action)
    switch(action.type) {
        case FETCH_SERVICES_PENDING: 
            return {
                ...state,
                spending: true
            }
        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                spending: false,
                services: action.services
            }
        case FETCH_SERVICES_ERROR:
            return {
                ...state,
                spending: false,
                serror: action.error
            }
        case "FILTER_PROVIDER":            
                return {
                    ...state,
                    searchText:action.text
                }
        default: 
            return state;
    }
}

export const getServices = state => state.servicesStore.services;
export const getServicesPending = state => state.servicesStore.spending;
export const getServicesError = state => state.servicesStore.serror;