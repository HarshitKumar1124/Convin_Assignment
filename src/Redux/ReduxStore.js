import {combineReducers,applyMiddleware, createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

const reducer=combineReducers({

});

let initialState={};

const middleWare = [thunk];

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)


export default store