import Actions from '../constants';
import axios from "axios";


const jumptest=()=>({
    type: "jump"
})

// sign up
const signUpStatusCheck=()=>({
    type:Actions.SIGNUPSTATUS
})
const registUser=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.signUp;
        console.log(data);
        return axios.post(Actions.SIGNUPURL,data)

        .then((res)=>{
            console.log("successful")
            console.log(res)
            if(res.status===true){//later
                dispatch(signUpStatusCheck());
            }else{
                alert("please check your info");
            }
        }).catch((err)=>{
            console.log("fail")
            console.log(err)
        })
    }
}
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


// added by Xiao & Yun
// register info
const loadRegisterInfo=(payload)=>({
    type:Actions.LOADREGISTERINFO,
    payload

})

// sign in
const loaduserInfo=(payload)=>({
    type:Actions.LOADUSERINFO,
    payload
})
const signInRequest=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.signIn;
        console.log("Request....")
        console.log(data);
        return axios.post(Actions.LOGINURL,data)
        .then((res)=>{
            console.log("successful SignIn");
            dispatch(loaduserInfo(res))
        }).catch((err)=>{
            console.log(err);
            console.log("SignIn Error");
        })
    }
}

const signOut=()=>({
    type:"signOut"
})

//place order
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
            dispatch(loadOptions(res.data)) //具体传入内容待改
        }).catch((err)=>{
            console.log(err);
            console.log("PlaceOrder Error");
        })
    }
}

//option select
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
            if(res.status==="ok"){
                dispatch(checkout(res.data))//具体内容待定
            }else{
                console.log("please check your order option??")
            }
        }).catch((err)=>{
            console.log(err);
            console.log("checkout error")
        })
    }
}
//tracking:
const loadingUserOrder=(payload)=>({
    type:Actions.LOADINGUSERORDER,
    payload
})
const trackMemberOrder=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.email;
        console.log("Request....")
        console.log(data);
        return axios.post(Actions.USERTRACKINGURL,data)
        .then((res)=>{
            console.log("successfully get user's orders");
            dispatch(loadingUserOrder(res.data)) //具体传入内容待改
        }).catch((err)=>{
            console.log(err);
            console.log("loading error");
        })
    }
}
const loadingOrder=(payload)=>({
    type:Actions.LOADINGVISITERORDER,
    payload
})
const trackOrder=()=>{
    return (dispatch,getState)=>{
        const storeData={...getState()};
        const data=storeData.trackingNumber;
        console.log("Request....")
        console.log(data);
        return axios.post(Actions.TRACKINGURL,data)
        .then((res)=>{
            console.log("successfully get visiter's orders");
            dispatch(loadingOrder(res.data)) //具体传入内容待改
        }).catch((err)=>{
            console.log(err);
            console.log("loading error");
        })
    }
}

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

const checkDataformOrderInfo=(payload)=>({
    type:"checkDataformOrderInfo",
    payload
})

const checkDataformPackageInfo=(payload)=>({
    type:"checkDataformPackageInfo",
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
    checkDataformOrderInfo,
    checkDataformPackageInfo,
    signOut,
    reSubmitProfile
}