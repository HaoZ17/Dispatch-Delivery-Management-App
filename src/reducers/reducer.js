import Actions from "../constants";
import { actions } from "../actionCreaters/actionCreater";

const initState={
    jumpTest:false,
    //basic info
    name:"",
    email:"required@gmail.com",
    // email:"",
    // password:"",
    displayModal:1,

    //profile*
    userInfo:{},
    updateInfo:{},

    //signin/signup*

    signUp:{
        name: "team3",
        email: "required@gmail.com",
        password : "required",
        address: "option",
        zipcode: "98007",
        mobile: "12345678",
    },
    signIn:{
        email:"123@gmail.com",
        password:"12345"
        },

    registerStatus:false,

    //tracking visitor
    trackingNumber:"1234567asdasdasd",
    trackingInfo:{},

    //member
    orderHistoryAndProcess:[],

    //place order*

    orderInfo:{
            from:"local",
            to:"future",
            size:"50m^3",
            weight:"10kg",
            time:"2021-05-21-12:21"
    },

    fromInfo:{

    },
    toInfo:{

    },
    isLoading:false,

    //options*
    options:[],
    optionsStatus:false,

    //checkout info *

    checkoutInfo:{
        basicInfo:{
            from:"local",
            to:"future",
            size:"50m^3",
            weight:"10kg",
            time:"2021-05-21-12:21"
        },
        selected:{
            option:"1",
            price:"10USD"
        },
        useInfo:{
            name: "team3",
            email: "required@gmail.com",
            password : "required",
            address: "option",
            zipcode: "98007",
            mobile: "12345678"
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
                signUp:{}
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
                checkoutInfo:action.payload,
                checkoutStatus:true
            }
        case Actions.LOADINGUSERORDER:
            return{
                ...state,
                orderHistoryAndProcess:action.payload
            }
        case Actions.LOADINGVISITERORDER:
            return{
                ...state,
                trackingInfo:action.payload
            }
        case Actions.INPUTTRACKINGNUMBER:
            console.log("tracking Info is");
            console.log(action.payload);
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
        default:
            return { ...state };
    }

}

export default reducer;