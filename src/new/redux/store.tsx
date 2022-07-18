import React from "react";

import { applyMiddleware, combineReducers,compose,createStore } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import {devToolsEnhancer} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { songReducer } from "./reducer";

export type RootState = ReturnType<typeof store.getState>
const reducer=songReducer;

const middleWear =applyMiddleware(thunk) ;
const d=compose(middleWear,devToolsEnhancer({}));

const store =createStore(combineReducers({ songReducer }),applyMiddleware(thunk));
//devToolsEnhancer<any>({}),
//const store=createStore<any,any,any,any>(reducer,d);
export type AppDispatch = typeof store.dispatch

export default store;