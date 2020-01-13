import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
   key: "cart",
   storage,
   whitelist: ["cart"]
};

const persistedReducer = persistReducer(config, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export default store;
