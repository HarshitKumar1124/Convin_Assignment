import {
    User_Detail_Request,
    User_Detail_Fail,
    User_Detail_Success,
    ClearError,

    GetUser_Fail,
    GetUser_Request,
    GetUser_Success

} from "./ReducerConstant"

export const UserDetail_Reducer=(state={userInfo:{}},action)=>{

    switch(action.type){
        case User_Detail_Request:
            return {
                loading:true,
                ...state,
            };
        case User_Detail_Fail:
            return {
                loading:false,
                error:action.payload,
            };
        case User_Detail_Success:
            return {
                loading:false,
                UserDetail:action.payload
            };
        case ClearError:
            return {
                ...state,
                error:null
            };
        default:
             return state;
    }
}


export const GetUsers_Reducer=(state={Users:{}},action)=>{

    switch(action.type){
        case GetUser_Request:
            return {
                loading:true,
                ...state,
            };
        case GetUser_Fail:
            return {
                loading:false,
                error:action.payload,
            };
        case GetUser_Success:
            return {
                loading:false,
                AllUsers:action.payload.data
            };
        case ClearError:
            return {
                ...state,
                error:null
            };
        default:
             return state;
    }
}
