import {FETCH_PROVIDERS_PENDING, FETCH_PROVIDERS_SUCCESS, FETCH_PROVIDERS_ERROR} from '../actions/provider';

const initialState = {
    ppending: false,
    providers: [],    
    perror: null
}

export function providersReducer(state = initialState, action) {
    console.log("providersReducer",action)
    switch(action.type) {
        case FETCH_PROVIDERS_PENDING: 
            return {
                ...state,
                ppending: true
            }
        case FETCH_PROVIDERS_SUCCESS:
            return {
                ...state,
                ppending: false,
                providers: action.providers
            }
        case FETCH_PROVIDERS_ERROR:            
            return {
                ...state,
                ppending: false,
                perror: action.error
            }        
        
        default: 
            return state;
    }
}

export const getProviders = state => {console.log("provider reducer state", state); return state.providersStore.providers;};
export const getProvidersPending = state => state.providersStore.ppending;
export const getProvidersError = state => state.providersStore.perror;
export const getSearchText = state => state.servicesStore.searchText;