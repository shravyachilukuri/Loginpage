const initialState = {
    user : null
}

export const logReducer = (state = initialState, action)=> {
    switch(action.type){
        case "Login" : 
        return {
            ...state,
            
             user : action.payload
            
     }
            
        
        case "Logout":
            return{
              ...state,
              user : null, 
            }
        default:
            return state;    
    }
}


