import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

// TODO: add middleware here: redux thunk, redux saga, redux logger
const middlewares = [thunk];
const middlewaresEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewaresEnhancer];
// TODO: add redux dev tools to debug
const composedMiddlewaresEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, composedMiddlewaresEnhancers);
