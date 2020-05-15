import axios from 'axios';

export const FETCH_PROVIDERS_PENDING = 'FETCH_PROVIDERS_PENDING';
export const FETCH_PROVIDERS_SUCCESS = 'FETCH_PROVIDERS_SUCCESS';
export const FETCH_PROVIDERS_ERROR =   'FETCH_PROVIDERS_ERROR';

function fetchProvidersPending() {
    return {
        type: FETCH_PROVIDERS_PENDING
    }
}

function fetchProvidersSuccess(providers) {
    return {
        type: FETCH_PROVIDERS_SUCCESS,
        providers
    }
}

function fetchProvidersError(error) {
    return {
        type: FETCH_PROVIDERS_ERROR,
        error
    }
}

// export function fetchProvidersSearch(text) {
//     console.log("fetchProvidersSearch",text)
//     return dispatch => dispatch( {
//         type: "FILTER_PROVIDER",
//         text
//     })
// }
function fetchProviders() {
    return dispatch => {
        dispatch(fetchProvidersPending());
        axios
            .get('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers',
                {
                "include":"locations,schedules.location",
                "page[number]": "1",
                "page[size]": "10"
              })
       .then(res => res.data)
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
           // console.log("provider",res)
            dispatch(fetchProvidersSuccess(res.data));
            return res.data;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(fetchProvidersError(error));
        })
    }
}

export default fetchProviders;