import React from "react";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { songReducer } from "./reducer";

export type RootState = ReturnType<typeof store.getState>;
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(combineReducers({ songReducer }), composedEnhancer);
export type AppDispatch = typeof store.dispatch;

export default store;
