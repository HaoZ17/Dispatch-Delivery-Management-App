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
    trackingInfo:null,

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
        drone: {
            "type": "drone",
            "price": "100"
        },
        robot: {
            "type": "robot",
            "price": "50"
        }
    },
    //save selected option
    selected:{

    },
    optionsStatus:false,




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
    checkoutStatus:false,
    //button:
    showRegForm:false,
    showLoginForm:false

}
/**
 *Object.assign(state.checkoutInfo,{orderInfo:action.payload})
 *Object.assign(state.checkoutInfo,{selected:action.payload})
 *Object.assign(state.checkoutInfo,{user:state.userInfo})
 */

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
            return{
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
                // userInfo:Object.assign(state.userInfo,{credit:currentCredit})
            }
        case "checkOutUpdate":
            const currentCredit=state.userInfo.credit-state.checkoutInfo.selected.price*0.11;
            return{
                ...state,
                userInfo:Object.assign(state.userInfo,{credit:currentCredit})
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