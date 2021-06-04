import Actions from "../constants";
import { actions } from "../actionCreaters/actionCreater";

const initState={
    jumpTest:false,
    //basic info
    name:"",
    email:"test@gmail.com",
    // email:"",
    // password:"",
    displayModal:0,

    //profile*
    userInfo:null,

    registerStatus:false,

    //tracking visitor*
    trackingNumber:"a9b51c96-cb93-4",
    trackingInfo:{
    },

    //member
    orderHistory:{
    },
    //place order*

    orderInfo:{
        "senderAddress": "local",
        "receiverAddress": "future",
        "size": "50m^3",
        "weight":"20kg",
        "time":"2021-05-21-12:21"
    },

    optionChoice:{
        option:1,
        price:200
    },

    isLoading:false,

    //options*
    options:{
    },
    optionsStatus:false,

    //checkout info *

    checkoutInfo:{
        "orderInfo" :{
            "senderAddress": "local",
            "receiverAddress": "future",
            "size": "50m^3",
            "weight":"10kg",
            "senderZipCode": "95111",
            "receiverZipCode": "95188",
            "createTime": "2020-05-30-15:21"
        },
    
        "selected" :{
            "type": "robot",
            "price": 10
        },

        "user": {
            "username": "username",
            "email": "1234@gmail.com",
            "credit": 100.0,
            "address": "testAddress"

        }
    
    },
    checkoutStatus:false,
    //button:
    showRegForm:false,
    showLoginForm:false

}

const reducer=(state=initState,action={})=>{
    switch(action.type){

        case Actions.SHOWREGISTER:
            return {
                ...state,
                showRegForm:!state.showRegForm
            }
        case Actions.SHOWLOGIN:
            return{
                ...state,
                showLoginForm:!state.showLoginForm
            }
        case Actions.LOADUSERINFO:
            console.log(action.payload)
            return {
                ...state,
                userInfo:action.payload,
                name:action.payload.name,
                email:action.payload.email,
            }
        // added by Xiao & Yun
        case Actions.LOADREGISTERINFO:
            console.log(action.payload)
            return {
                ...state,
                signUp:action.payload,
                name:action.payload.name,
                email:action.payload.email,
                showRegForm:!state.showRegForm
            }
        case Actions.SIGNUPSTATUS:
            return{
                ...state,
                registerStatus: true,
                // signUp:{}
            }
        case Actions.LOADOPTIONS:
            return{
                ...state,
                options:action.payload,
                optionsStatus:true
            }
        case Actions.CHECKOUT:
            return{
                ...state,
                trackingNumber:action.payload
            }
        case Actions.LOADINGUSERORDER:
            return{
                ...state,
                orderHistory:action.payload
            }
        case Actions.LOADINGVISITERORDER:
            return{
                ...state,
                trackingInfo:action.payload
            }
        case Actions.INPUTTRACKINGNUMBER:
            console.log("tracking Info is");
            console.log(action.payload);//PRINT NUMBER
            return{
                ...state,
                trackingNumber: action.payload
            }
        case Actions.LOGININFO:
            console.log("login Info :")
            console.log(action.payload);
            return{
                ...state,
                signIn:action.payload
            }
        case "jump":
            console.log(state.jumpTest)
            return{
                ...state,
                jumpTest:!state.jumpTest
            }
        case "modelIncrease":
            console.log(state.displayModal)
            return{
                ...state,
                displayModal:state.displayModal+1
            }
        case "modelDecrease":
            console.log(state.displayModal)
            return{
                ...state,
                displayModal:state.displayModal-1
            }
        case "resetDisplayModal":
            console.log(state.displayModal)
            return{
                ...state,
                displayModal:0
            }
        case "checkDataform":
            console.log(action.payload)
            return{
                ...state
            }
        case "signOut":
            console.log("logouy")
            console.log(state.userInfo)
            return{
                ...state,
                userInfo:null
            }
        case "reSubmitProfile":
            console.log(state.userInfo);
            return{
                ...state,
                userInfo:action.payload
            }
        default:
            return { ...state };
    }

}

export default reducer;