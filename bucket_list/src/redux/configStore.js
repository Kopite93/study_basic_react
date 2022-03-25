import { createStore, combineReducers } from "redux";
import bucket from "./module/bucket";

const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer);

export default store;
