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
        "trackingNumber": "a9b51c96-cb93-4",
        "orderStatus": "Pending",
        "createTime": "2020-05-30-15:21",
        "updateTime": "2021-06-05-01:34",
        "arriveTime": "2020-05-31-13:00",
        "delivererPath": {
            "Stage1": {
                "address": "local",
                "time": "2020-05-30-20:00"
            },
            "Stage2": {
                "address": "stationC",
                "time": "2020-05-31-1:00"
            },
            "Stage3": {
                "address": "stationC",
                "time": "2021-06-05-01:34"
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
                },
                {
                    "id": 39,
                    "trackingNumber": "3ef1ee38-7f45-4",
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
                    "updateTime": "2021-06-03T16:49:20.203+00:00",
                    "arriveTime": "2021-06-03T16:49:20.203+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                },
                {
                    "id": 46,
                    "trackingNumber": "1e3a4993-02ef-4",
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
                    "updateTime": "2021-06-04T20:35:43.169+00:00",
                    "arriveTime": "2021-06-04T20:35:43.169+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                },
                {
                    "id": 48,
                    "trackingNumber": "67c73c9b-0b56-4",
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
                    "updateTime": "2021-06-04T20:39:06.335+00:00",
                    "arriveTime": "2021-06-04T20:39:06.335+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                },
                {
                    "id": 50,
                    "trackingNumber": "9a0f9190-a4bd-4",
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
                    "updateTime": "2021-06-04T20:40:10.892+00:00",
                    "arriveTime": "2021-06-04T20:40:10.892+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                },
                {
                    "id": 52,
                    "trackingNumber": "3e81ec7c-81a5-4",
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
                    "updateTime": "2021-06-04T20:58:49.353+00:00",
                    "arriveTime": "2021-06-04T20:58:49.353+00:00",
                    "paymentAmount": 0.0,
                    "paymentCard": null,
                    "weight": "10kg",
                    "size": "50m^3"
                },
                {
                    "id": 56,
                    "trackingNumber": "fab921fb-a72d-4",
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
                    "updateTime": "2021-06-04T22:20:22.811+00:00",
                    "arriveTime": "2021-06-04T22:20:22.811+00:00",
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
            "email": "test@gmail.com",
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