import { servicesReducer } from "./service";
import { providersReducer } from "./provider";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    servicesStore:servicesReducer,
    providersStore:providersReducer
})

console.log("allReducers",allReducers);
export default allReducers;