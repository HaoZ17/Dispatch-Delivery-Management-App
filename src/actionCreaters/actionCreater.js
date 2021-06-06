import Actions from '../constants';
import axios from "axios";

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// sign up */
const signUpStatusCheck=()=>({
    type:Actions.SIGNUPSTATUS
})
const registUser=(payload)=>{
    return (dispatch,getState)=>{
        console.log(payload);
        return axios.post(Actions.SIGNUPURL,payload)
        .then((res)=>{
            console.log("successful")
            console.log(res)
            if(res.statusText==="OK"){//later
                dispatch(signUpStatusCheck());
            }else{
                alert("please check your info");
            }
        }).catch((err)=>{
            console.log("fail:",err)
            alert("please check your info");
        })
    }
}

// register info
// const loadRegisterInfo=(payload)=>({
//     type:Actions.LOADREGISTERINFO,
//     payload
// })

// sign in */
const loaduserInfo=(payload)=>({
    type:Actions.LOADUSERINFO,
    payload
})
const signInRequest=(payload)=>{
    return (dispatch,getState)=>{
        console.log("SignIn....:")
        return axios.post(
            Actions.LOGINURL,
            payload
        )
        .then((res)=>{
            console.log(res);
            if(res.statusText==="OK"){
                console.log("successful SignIn");
                console.log(res);
                dispatch(loaduserInfo(res.data))
            }else{
                alert("please check your Email or Password");
            }
        }).catch((err)=>{
            console.log(err);
            console.log("SignIn Error");
        })
    }
}

// signOut*/
const signOut=()=>({
    type:"signOut"
})

//update info & redeem*/ 
const profileUpdate=(payload)=>{
    return (dispatch,getState)=>{
        // const storeData={...getState()};
        // const data=storeData.userInfo;
        console.log("update:",payload)
        return axios.post(Actions.UPDATEURL,payload
        )
        .then((res)=>{
            if(res.statusText==="OK"){
                console.log("successful update");
                console.log(res);
                dispatch(loaduserInfo(payload))
            }else{
                alert("Cannot process your request,Please try later");
            }
        }).catch((err)=>{
            console.log(err);
            console.log("update Error");
            alert("Cannot process your request");
        })
    }
}

//order history:*/
const loadingUserOrder=(payload)=>({
    type:Actions.LOADINGUSERORDER,
    payload
})
const trackMemberOrder=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.email;
        console.log("MemberEmail:",data);
        return axios.post(Actions.HISTORYORDER,{"email":data})
        .then((res)=>{
            if(res.statusText==="OK"){
                console.log(res);
                dispatch(loadingUserOrder(res.data)) //具体传入内容待改
            }else{
                alert("Loading Error, please try again")
            }
        }).catch((err)=>{
            console.log(err);
            console.log("loading error");
        })
    }
}

//Tracking Order:*/
const loadingOrder=(payload)=>({
    type:Actions.LOADINGVISITERORDER,
    payload
})
const trackOrder=(payload)=>{
    return (dispatch,getState)=>{
        console.log("TrackingNum:",payload)
        return axios.post(
            Actions.TRACKINGURL,
            {"trackingNumber" : payload}
            )
        .then((res)=>{
            if(res.statusText==="OK"){
                console.log("successfully get visiter's orders");
                console.log(res);
                dispatch(loadingOrder(res.data)) //具体传入内容待改
            }else{
                alert("Cannot find your information");
            }
        }).catch((err)=>{
            console.log(err);
            console.log("loading error");
            alert("Cannot find your information")
        })
    }
}


//place order */
const loadOptions=payload=>({
    type:Actions.LOADOPTIONS,
    payload
})
const placeOrder=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.orderInfo;
        console.log("Request....")
        console.log(data);
        return axios.post(Actions.ORDERREQUESTURL,{"orderInfo":data})
        .then((res)=>{
            console.log("successful placeOrder");
            console.log(res);
            dispatch(loadOptions(res.data)) //具体传入内容待改
        }).catch((err)=>{
            console.log(err);
            console.log("PlaceOrder Error");
        })
    }
}

//Checkout select:*/
const checkout=(payload)=>({
    type:Actions.CHECKOUT,
    payload
})
const confirmOption=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.checkoutInfo;
        console.log(data);
        return axios.post(Actions.ORDERCONFIRMURL,data)
        .then((res)=>{
            console.log("CheckOut Info:");
            console.log(res);
            if(res.statusText==="OK"){
                dispatch(checkout(res.data));
            }else{
                alert('network Error')
            }
        }).catch((err)=>{
            console.log(err);
            console.log("checkout error");
            alert('network Error');
        })
    }
}

/**
 * 辅助测试功能模块
 */

const jumptest=()=>({
    type: "jump"
})

//other:
const increaseMDButton=()=>({
    type:"modelIncrease"
})
const decreaseMDButton=()=>({
    type:"modelDecrease"
})

//button
const isshowRegForm=()=>({
   type:Actions.SHOWREGISTER
})
const isshowLoginForm=()=>({
   type:Actions.SHOWLOGIN
})

//input tracking number://ASYNC PENDING UNFINISHED
const inputTrackingNumber=(payload)=>({
    type:Actions.INPUTTRACKINGNUMBER,
    payload
})
const loginInfo=(payload)=>({
    type:Actions.LOGININFO,
    payload
})

const resetDisplayModal=()=>({
    type:"resetDisplayModal"
})

const checkDataform=(payload)=>({
    type:"checkDataform",
    payload
})

const reSubmitProfile=(payload)=>({
    type:"reSubmitProfile",
    payload
})


export const actions={
    loginInfo,
    registUser,
    signInRequest,
    placeOrder,
    loadOptions,
    confirmOption,
    trackMemberOrder,
    trackOrder,
    inputTrackingNumber,
    isshowRegForm,
    isshowLoginForm,
    loaduserInfo,
    jumptest,
    increaseMDButton,
    decreaseMDButton,
    resetDisplayModal,
    checkDataform,
    signOut,
    reSubmitProfile,
    profileUpdate
}