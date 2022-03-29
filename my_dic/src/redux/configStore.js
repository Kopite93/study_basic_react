import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dic from "./modules/dic";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ dic });
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);
//스토어는 리듀서 묶음과 옵셔널한 것들을 엮어서 만든다

export default store;
