import axios from "axios";
import {
    User_Detail_Request,
    User_Detail_Fail,
    User_Detail_Success,
    GetUser_Fail,
    GetUser_Request,
    GetUser_Success
    

} from "./ReducerConstant"

export const getUserDetails = (UserID)=>async(dispatch)=>{

    console.log("aaya")
    try{
        dispatch({type:User_Detail_Request});

        console.log("aaya2")

        let Data = await axios.get(`https://reqres.in/api/users/${UserID}`)
        console.log(Data)

        dispatch({
            type:User_Detail_Success,
            payload:Data
        });
    }
    catch(error)
    {
        dispatch({
            type:User_Detail_Fail,
            payload:error
        });
    }
}

export const getAllUsers = (Page)=>async(dispatch)=>{

    console.log("aaya get all users")
    try{
        dispatch({type:GetUser_Request});

        console.log("aaya2 get all users")

        let Data = await axios.get(`https://reqres.in/api/users?page=${Page}`)
        console.log(Data)

        dispatch({
            type:GetUser_Success,
            payload:Data
        });
    }
    catch(error)
    {
        dispatch({
            type:GetUser_Fail,
            payload:error
        });
    }
}