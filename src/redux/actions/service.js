import axios from 'axios';

export const FETCH_SERVICES_PENDING = 'FETCH_SERVICES_PENDING';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_ERROR =   'FETCH_SERVICES_ERROR';

function fetchServicesPending() {
    return {
        type: FETCH_SERVICES_PENDING
    }
}

function fetchServicesSuccess(services) {
    return {
        type: FETCH_SERVICES_SUCCESS,
        services
    }
}

function fetchServicesError(error) {
    return {
        type: FETCH_SERVICES_ERROR,
        error
    }
}

function fetchProviderSeachText(text) {
    return {
        type: "FILTER_PROVIDER",
        text 
    }
}


function fetchServices(text="") {
    return dispatch => {
        dispatch(fetchServicesPending());
        axios
			.get('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services')
       // .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
           // console.log("Service",res)
            dispatch(fetchServicesSuccess(res.data.data));
            dispatch(fetchProviderSeachText(text));
            return res.data;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(fetchServicesError(error));
        })
    }
}

export default fetchServices;