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
    userInfo:{
        "name": "team3",
        "email": "test6@gmail.com",
        "password" : "123456",
        "address": "option",
        "zipcode": "98007",
        "mobile": "12345678",
        "credit": 300
    },
    updateInfo:{},

    //signin/signup*

    signUp:{
        name: "team3",
        email: "required@gmail.com",
        password : "required",
        address: "option",
        zipcode: "98007",
        mobile: "12345678"
    },
    signIn:{
        'email':"123@gmail.com",
        'password':"12345"
        },

    registerStatus:false,

    //tracking visitor*
    trackingNumber:"a9b51c96-cb93-4",
    trackingInfo:{
        "trackingNumber": "a9b51c96-cb93-4",
        "orderStatus": "Delivered",
        "createTime": "2020-05-30-15:21",
        "updateTime": "2020-05-31-11:00",
        "arriveTime": "2020-05-31-13:00",
        "delivererPath": {
            "Stage1": {
                "address": "local",
                "time": "2020-05-30-20:00"
            },
            "Stage4": {
                "address": "future",
                "time": "2020-05-31-11:00"
            },
            "Stage2": {
                "address": "stationC",
                "time": "2020-05-31-1:00"
            },
            "Stage3": {
                "address": "stationC",
                "time": "2020-05-31-6:00"
            }
        }
    },

    //member
    orderHistory:{
        "pending": {
            "pending": [
                {
                    "id": 13,
                    "trackingNumber": "6bb545ce-ad6f-4",
                    "senderAddress": "local",
                    "senderMobile": null,
                    "senderName": null,
                    "senderZipCode": "95111",
                    "receiverAddress": "future",
                    "receiverMobile": null,
                    "receiverName": null,
                    "receiverZipCode": "95188",
                    "status": "pending",
                    "createTime": "2020-05-30-15:21",
                    "updateTime": "2021-05-31T23:41:49.360+00:00",
                    "arriveTime": "2021-05-31T23:41:49.360+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                },
                {
                    "id": 17,
                    "trackingNumber": "eacc8711-6f90-4",
                    "senderAddress": "local",
                    "senderMobile": null,
                    "senderName": null,
                    "senderZipCode": "95111",
                    "receiverAddress": "future",
                    "receiverMobile": null,
                    "receiverName": null,
                    "receiverZipCode": "95188",
                    "status": "pending",
                    "createTime": "2020-05-30-15:21",
                    "updateTime": "2021-06-01T00:44:55.859+00:00",
                    "arriveTime": "2021-06-01T00:44:55.859+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                },
                {
                    "id": 21,
                    "trackingNumber": "a9b51c96-cb93-4",
                    "senderAddress": "local",
                    "senderMobile": null,
                    "senderName": null,
                    "senderZipCode": "95111",
                    "receiverAddress": "future",
                    "receiverMobile": null,
                    "receiverName": null,
                    "receiverZipCode": "95188",
                    "status": "pending",
                    "createTime": "2020-05-30-15:21",
                    "updateTime": "2021-06-01T01:34:41.402+00:00",
                    "arriveTime": "2021-06-01T01:34:41.402+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                },
                {
                    "id": 31,
                    "trackingNumber": "0982dd92-2020-4",
                    "senderAddress": "local",
                    "senderMobile": null,
                    "senderName": null,
                    "senderZipCode": "95111",
                    "receiverAddress": "future",
                    "receiverMobile": null,
                    "receiverName": null,
                    "receiverZipCode": "95188",
                    "status": "pending",
                    "createTime": "2020-05-30-15:21",
                    "updateTime": "2021-06-01T18:25:41.448+00:00",
                    "arriveTime": "2021-06-01T18:25:41.448+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                }
            ]
        },
        "completed": {
            "completed": []
        }
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
        "robot": {
            "type": "robot",
            "price": 10000.0,
            "is_available": null
        },
        "drone": {
            "type": "drone",
            "price": 20000.0,
            "is_available": null
        }
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