import {combineReducers,applyMiddleware, createStore} from "redux"

import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {UserDetail_Reducer,GetUsers_Reducer} from "../Redux_Operations/Reducers"

const reducer=combineReducers({

    userDetail:UserDetail_Reducer,
    getUsers:GetUsers_Reducer,

});

let initialState={};

const middleWare = [thunk];

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)


export default store