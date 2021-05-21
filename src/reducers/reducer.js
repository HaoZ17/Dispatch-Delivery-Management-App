import Actions from "../constants";
import { actions } from "../actionCreaters/actionCreater";

const initState={

    //basic info
    name:"",
    email:"",
    // email:"",
    // password:"",

    //profile*
    userInfo:{},

    //signin/signup*
    signUp:{},
    signIn:{},
    registerStatus:false,

    //tracking visitor
    trackingNumber:"",
    trackingInfo:{},

    //member
    orderHistoryAndProcess:[],

    //place order*
    orderInfo:{},
    isLoading:false,

    //options*
    options:[],
    optionsStatus:false,

    //checkout info *
    checkoutInfo:{},
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
                email:action.payload.email
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
        default:
            return { ...state };
    }
    
}

export default reducer;