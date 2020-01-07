import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/root";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
