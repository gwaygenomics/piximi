import logger from "redux-logger";
import {persistReducer, persistStore, Persistor} from "redux-persist";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import localforage from "localforage";
import {
  EnhancedStore,
  configureStore,
  Middleware,
  StoreEnhancer
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import {reducer} from "./reducer";
import {root} from "./sagas/model";

const enhancers: StoreEnhancer[] = [];

const saga = createSagaMiddleware();

const middleware: Middleware[] = [logger, saga, thunk];

const preloadedState = {};

const storage = localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: "piximi"
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducer);

const options = {
  devTools: process.env.NODE_ENV !== "production",
  enhancers: enhancers,
  middleware: middleware,
  preloadedState: preloadedState,
  reducer: persistedReducer
};

export const store: EnhancedStore = configureStore(options);

export const persistor: Persistor = persistStore(store);

saga.run(root);
