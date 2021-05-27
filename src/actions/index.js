const Login = "Login";

export const Logedin = (name,email,password,loggedIn) => {
    return{
            type: Login,
            payload:{
                name,
                email,
                password,
                loggedIn
            }
        }}

const Logout = "Logout";

export const Logedout = () => {
    return{
            type: Logout,
            
        }}        
