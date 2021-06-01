import Actions from '../constants';
import axios from "axios";


const jumptest=()=>({
    type: "jump"
})

// sign up *
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
            if(res.status===true){//later
                dispatch(signUpStatusCheck());
            }else{
                alert("please check your info");
            }
        }).catch((err)=>{
            console.log("fail:",err)
        })
    }
}

// register info
const loadRegisterInfo=(payload)=>({
    type:Actions.LOADREGISTERINFO,
    payload

})

// sign in *
const loaduserInfo=(payload)=>({
    type:Actions.LOADUSERINFO,
    payload
})
const signInRequest=(payload)=>{
    return (dispatch,getState)=>{
        console.log("SignIn....:",payload)
        return axios.post(Actions.LOGINURL,payload)
        .then((res)=>{
            console.log("successful SignIn");
            dispatch(loaduserInfo(res))
        }).catch((err)=>{
            console.log(err);
            console.log("SignIn Error");
        })
    }
}

// signOut*
const signOut=()=>({
    type:"signOut"
})

//update info & redeem*
const profileUpdate=(payload)=>{
    return (dispatch,getState)=>{
        console.log("update:",payload)
        return axios.post(Actions.UPDATEURL,payload)
        .then((res)=>{
            console.log("successful update");
            dispatch(loaduserInfo(res))
        }).catch((err)=>{
            console.log(err);
            console.log("update Error");
        })
    }
}

//place order *
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
        return axios.post(Actions.ORDERREQUESTURL,data)
        .then((res)=>{
            console.log("successful placeOrder");
            console.log(res);
            //  dispatch(loadOptions(res.data)) //具体传入内容待改
        }).catch((err)=>{
            console.log(err);
            console.log("PlaceOrder Error");
        })
    }
}

//Checkout select:*
const checkout=(payload)=>({
    type:Actions.CHECKOUT,
    payload
})
const confirmOption=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.checkoutInfo;
        console.log(data);
        return axios.post(Actions.CHECKOUTURL,data)
        .then((res)=>{
            // if(res.status==="ok"){
            //     dispatch(checkout(res.data))//具体内容待定
            // }else{
            //     console.log("please check your order option??")
            // }
            console.log("CheckOut Info:");
            console.log(res);
        }).catch((err)=>{
            console.log(err);
            console.log("checkout error")
        })
    }
}
//order history:*
const loadingUserOrder=(payload)=>({
    type:Actions.LOADINGUSERORDER,
    payload
})
const trackMemberOrder=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.email;
        console.log("MemberEmail:",data);
        return axios.post(Actions.HISTORYORDER,data)
        .then((res)=>{
            console.log("Order historys:");
            dispatch(loadingUserOrder(res.data)) //具体传入内容待改
        }).catch((err)=>{
            console.log(err);
            console.log("loading error");
        })
    }
}

//Tracking Order:*
const loadingOrder=(payload)=>({
    type:Actions.LOADINGVISITERORDER,
    payload
})
const trackOrder=(payload)=>{
    return (dispatch,getState)=>{
        console.log("TrackingNum:",payload)
        return axios.post(Actions.TRACKINGURL,payload)
        .then((res)=>{
            console.log("successfully get visiter's orders");
            console.log(res);
            // dispatch(loadingOrder(res.data)) //具体传入内容待改
        }).catch((err)=>{
            console.log(err);
            console.log("loading error");
        })
    }
}

/**
 * 辅助测试功能模块
 */
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
    loadRegisterInfo,
    jumptest,
    increaseMDButton,
    decreaseMDButton,
    resetDisplayModal,
    checkDataform,
    signOut,
    reSubmitProfile,
    profileUpdate
}