import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./root";

const config = {
   key: "cart",
   storage,
   whitelist: ["cart"]
};

const persistedReducer = persistReducer(config, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger, thunk));

export const persistor = persistStore(store);

export default store;
