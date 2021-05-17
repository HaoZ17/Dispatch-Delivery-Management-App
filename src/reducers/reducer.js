import Actions from "../constants";

const initState={
    email:"",
    password:"",
    userInfo:{},
    signUp:{},
    signIn:{}
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