import { createStore, applyMiddleware } from "redux";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from "redux-thunk";

import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";



    

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  // rootReducer,
  // initialState,
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);


const persistor = persistStore(store);
export { store, persistor };