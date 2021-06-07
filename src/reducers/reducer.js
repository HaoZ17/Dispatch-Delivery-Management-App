import Actions from "../constants";
import { actions } from "../actionCreaters/actionCreater";

const initState = {
    jumpTest: false,
    //basic info
    name: "",
    email: "",
    // email:"",
    // password:"",
    displayModal: 0,

    //profile*
    userInfo: null,

    registerStatus: false,

    //tracking visitor*
    trackingNumber:"",
    trackingInfo: null,
    trackingResult:false,

    //member
    orderHistory: null,
    //place order*

    orderInfo: {
    },

    // optionChoice:{
    //     option:1,
    //     price:200
    // },

    //save form0 data
    fromInfo:{

    },
    //save form1 data
    orderInfoAll:{

    },
    //save form2 data
    packageInfo:{

    },
    isLoading:false,

    //options*
    options:{
    },
    //save selected option
    selected:{

    },
    optionsStatus: false,




    //checkout info *
    // "orderInfo" :{
    //         "senderAddress": "local",
    //         "receiverAddress": "future",
    //         "size": "50m^3",
    //         "weight":"10kg",
    //         "senderZipCode": "95111",
    //         "receiverZipCode": "95188",
    //         "createTime": "2020-05-30-15:21"
    // },
    
    checkoutInfo:{
        // "orderInfo" :{
        //     "senderAddress": "local",
        //     "receiverAddress": "future",
        //     "size": "50m^3",
        //     "weight":"10kg",
        //     "senderZipCode": "95111",
        //     "receiverZipCode": "95188",
        //     "createTime": "2020-05-30-15:21"
        // },
    
        // "selected" :{
        //     "type": "robot",
        //     "price": 10
        // },

        // "user": {
        //     "username": "username",
        //     "email": "test@gmail.com",
        //     "credit": 100.0,
        //     "address": "testAddress"
        // }
    
    },
    checkoutStatus: false,
    //button:
    showRegForm: false,
    showLoginForm: false

}
/**
 *Object.assign(state.checkoutInfo,{orderInfo:action.payload})
 *Object.assign(state.checkoutInfo,{selected:action.payload})
 *Object.assign(state.checkoutInfo,{user:state.userInfo})
 */

const reducer = (state = initState, action = {}) => {
    switch (action.type) {

        case Actions.SHOWREGISTER:
            return {
                ...state,
                showRegForm: !state.showRegForm
            }
        case Actions.SHOWLOGIN:
            return {
                ...state,
                showLoginForm: !state.showLoginForm
            }
        case Actions.LOADUSERINFO:
            console.log(action.payload)
            const newInfo = state.userInfo === null ? action.payload : Object.assign(state.userInfo, action.payload);
            return {
                ...state,
                userInfo: newInfo,
                name: action.payload.name,
                email: action.payload.email,
            }

        // added by Xiao & Yun
        case Actions.LOADREGISTERINFO:
            console.log(action.payload)
            return {
                ...state,
                signUp: action.payload,
                name: action.payload.name,
                email: action.payload.email,
                showRegForm: !state.showRegForm
            }

        case Actions.SIGNUPSTATUS:
            return {
                ...state,
                registerStatus: true,
                // signUp:{}
            }
        case "saveOrder":
            return{
                ...state,
                orderInfo:action.payload
            }
        case "saveOption":
            console.log("asd:",action.payload)
            return{
                ...state,
                selected:action.payload,
                checkoutInfo:Object.assign(state.checkoutInfo,{"selected":action.payload})
            }
        case "saveUser":
            const user=state.userInfo===null? {}:state.userInfo;
            return{
                ...state,
                checkoutInfo:Object.assign(state.checkoutInfo,{"user":user})
            }
        case Actions.LOADOPTIONS:
            return {
                ...state,
                options:action.payload,
                optionsStatus:true,
                checkoutInfo:Object.assign(state.checkoutInfo,{"orderInfo":state.orderInfo})
            }
        case Actions.CHECKOUT:
            // const currentCredit=state.userInfo===null?0:state.userInfo.credit-state.checkoutInfo.selected.price*1.1;
            return{
                ...state,
                trackingNumber:action.payload,
                checkoutStatus:true
                // userInfo:Object.assign(state.userInfo,{credit:currentCredit})
            }
        case "checkOutUpdate":
            const currentCredit=state.userInfo.credit-state.checkoutInfo.selected.price*0.11;
            return{
                ...state,
                userInfo:Object.assign(state.userInfo,{credit:currentCredit})
            }
        case Actions.LOADINGUSERORDER:
            return {
                ...state,
                orderHistory: action.payload
            }
        case Actions.LOADINGVISITERORDER:
            return {
                ...state,

                trackingInfo:action.payload,
                trackingResult:true
            }
        case Actions.INPUTTRACKINGNUMBER:
            console.log("tracking Info is");
            console.log(action.payload);//PRINT NUMBER
            return {
                ...state,
                trackingNumber: action.payload
            }
        case Actions.LOGININFO:
            console.log("login Info :")
            console.log(action.payload);
            return {
                ...state,
                signIn: action.payload
            }
        case "jump":
            console.log(state.jumpTest)
            return {
                ...state,
                jumpTest: !state.jumpTest
            }
        case "modelIncrease":
            console.log(state.displayModal)
            return {
                ...state,
                displayModal: state.displayModal + 1
            }
        case "modelDecrease":
            console.log(state.displayModal)
            return {
                ...state,
                displayModal: state.displayModal - 1
            }
        case "resetDisplayModal":
            console.log(state.displayModal)
            return {
                ...state,
                displayModal: 0
            }
        case "checkDataform":
            console.log(action.payload)
            return{
                ...state,
                fromInfo:action.payload,
            }
        case "checkDataformOrderInfo":
            console.log(action.payload)
            return{
                ...state,
                orderInfoAll:action.payload,
            }
        case "checkDataformPackageInfo":
            console.log(action.payload)
            return{
                ...state,
                packageInfo:action.payload,
            }

        case "signOut":
            console.log("logouy")
            console.log(state.userInfo)
            return {
                ...state,
                userInfo: null
            }
        case "reSubmitProfile":
            console.log(state.userInfo);
            return {
                ...state,
                userInfo: action.payload
            }
        case "resetResult":
            return{
                ...state,
                trackingResult:false
            }
        case "checkoutReset":
            return{
                ...state,
                checkoutStatus:false
            }
        case "redeem":
            return{
                ...state,
                userInfo:Object.assign(state.userInfo,{"credit":state.userInfo.credit+100})
            }
        default:
            return { ...state };
    }

}

export default reducer;