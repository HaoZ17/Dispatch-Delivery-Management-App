import Actions from "../constants";

const initState={
    //login info
    email:"",
    password:"",

    //profile
    userInfo:{},

    //signin/signup
    signUp:{},
    signIn:{},

    //tracking visitor
    trackingNumber:"",
    trackingInfo:{},
    //member
    orderHistoryAndProcess:[],

    //place order
    orderInfo:{},
    isLoading:false,
    //options
    options:{},
    //checkout info 
    checkoutInfo:{}
}

const reducer=(state=initState,action={})=>{
    switch(action.type){ 
        case "loginInfo":
            console.log("reducer:")
            console.log(action.payload)
            return {
                ...state,
                signIn:action.payload
            }
        default:
            return { ...state };
    }
    
}

export default reducer;