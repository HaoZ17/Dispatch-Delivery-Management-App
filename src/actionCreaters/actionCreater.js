import Actions from '../constants';
import axios from "axios";

const registUser=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.signup;
        console.log(data);
        return axios.post("http://localhost:8080/register",data)
        .then((res)=>{
            alert("Registration successful")
        }).catch((err)=>{
            alert("Registration failed")
        })
    }
}
const loginInfo=(payload)=>({
    type:"loginInfo",
    payload
})

const signInRequest=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.signIn;
        console.log("Request....")
        console.log(data);
        return axios.post("http://localhost:8080/login",data)
        .then((res)=>{
            console.log(res);
            console.log("successful SignIn");
        }).catch((err)=>{
            console.log(err);
            console.log("SignIn Error");
        })
    }
}

export const actions={
    loginInfo,
    registUser,
    signInRequest
}