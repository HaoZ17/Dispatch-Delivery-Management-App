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
        name: "team3",
        email: "required@gmail.com",
        password : "required",
        address: "option",
        zipcode: "98007",
        mobile: "12345678",
        credit: 300
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
        email:"123@gmail.com",
        password:"12345"
        },

    registerStatus:false,

    //tracking visitor*
    trackingNumber:"1234567asdasdasd",
    trackingInfo:{
        "trackingNumber": "e880a0e8-33a2-4",
        "orderStatus": "PENDING", /*{Delievered, Created}*/
        "createTime": "2021-05-25T03:00:48.019+00:00",
        "updateTime": "2021-05-25T03:00:48.019+00:00",
        "arriveTime": "2021-05-25T03:00:48.019+00:00",
        "tracking": [
            {
                      "station id": 2,
                      "station_status": "passed",   /*{keeping, coming}*/
                      "receivedAt": "2021-05-25T02:55:57.057+00:00",
                      "leaveAt": "2021-05-25T02:55:57.057+00:00",
                  },
            {
                      "station id": 3,
                      "station_status": "passed",   /*{keeping, coming}*/
                      "receivedAt": "2021-05-25T02:55:57.057+00:00",
                      "leaveAt": "2021-05-25T02:55:57.057+00:00",
                  },
            {
                      "station id": 4,
                      "station_status": "keeping",   /*{keeping, coming}*/
                      "receivedAt": "2021-05-25T02:55:57.057+00:00",
                      "leaveAt": "2021-05-25T02:55:57.057+00:00",
                  }
        ]
   },

    //member
    processing: [{from: "local", to:"future",size: "50m^3m", orderWeight: "10 pounds", shipTime:"2021-05-21-12:21", deliverTime:"2021-05-27-12:21"},
    {from: "company", to:"home",size: "100m^2m", orderWeight: "40 pounds", shipTime:"1999-05-21-12:21", deliverTime:"1999-05-23-12:21"},
    {from: "china", to:"USA",size: "2000m^400m", orderWeight: "8 pounds", shipTime:"200-05-21-12:21", deliverTime:"1999-05-24-12:21"}],
    delivered: [{from: "santa clara", to:"san cruz",size: "50inch^3inch", orderWeight: "10 kg", shipTime:"2000-05-21-12:21", deliverTime:"1999-05-22-12:21"},
    {from: "east", to:"west",size: "110inch^8inch", orderWeight: "1600kg", shipTime:"2015-05-21-12:21", deliverTime:"1999-05-25-12:21"},
    {from: "japan", to:"korea",size: "90inch^7inch", orderWeight: "9 kg", shipTime:"2019-05-21-12:21", deliverTime:"1999-05-27-12:21"}],
    //place order*

    orderInfo:{
        "fromAddress": "local", // address
        "toAddress": "future", // address
        "from": "local", // zipcode
        "to": "future", // zipcode
        "size": "50m^3", // added for advanced feature
        "weight":"10kg",
        "Time":"2021-05-21-12:21",
        "senderMobile": null,
        "senderName": null,
        "receiverMobile": null,
        "receiverName": null,
        "receiverEmail": null,
    },

    optionChoice:{
        option:1,
        price:200
    },

    isLoading:false,

    //options*
    options:[],
    optionsStatus:false,

    //checkout info *

    checkoutInfo:{
        orderInfo:{
            from:"local",
            fromZipcode:"98006",
            to:"future",
            toZipcode:"02155",
            size:"50m^3",
            weight:"10kg",
            time:"2021-05-21-12:21"
        },
        options:{
            option:"1",
            price:"10USD"
        },
        useInfo:{
            name: "team3",
            email: "required@gmail.com",
            password : "required",
            address: "option",
            zipcode: "98007",
            mobile: "12345678",
            credit: 300
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