import { useState } from "react"
import Shop from "./Shop";
import AdminPanel from "./AdminPane";

export default function Login(){
    //the items for the shop component
    let items =
    [{id: 1, name: "grapes", price: 50},
    {id: 2, name: "orange", price: 20},
    {id: 3, name: "pickles", price: 40}]
    
    //credentials for the account
    let accounts = 
    [{id:1, username: "customer", password: "customer", role: "customer"},
    {id:1, username: "customer2", password: "customer2", role: "customer2"},
    {id:2, username: "admin", password: "admin", role:"admin"}]

    //Boolean Bariable for Logging in
    const [isLoggedIn, setIsLoggedIn]= useState(false);
    //variable for the user roles
    const [role, setRole] = useState("")
    //varaible for the entered cresentials
    const [enteredUsernames, setEnteredUsernames] = useState("")
    const [enteredPasswords, setEnteredPasswords] = useState("")
    //function to get the entered username
    function getUserName(event){
        setEnteredUsernames(event.target.value)
    }
    //function to get the entered passwords
    function getPassword(event){
        setEnteredPasswords(event.target.value)
    }
    //function to handle the Login process
    function handleLogin(){
        accounts.map((account) => {
            if(account.username ===
                enteredUsernames &&
                account.password === enteredPasswords){
                    setIsLoggedIn(true)
                    setRole(account.role)
                }
        })
    }
    //this funtion renders the login page
    function renderLogin(){
        return(
            <div>
                <h1>Login</h1>
                <br></br>Username: <input type="text" placeholder="username" id="username" onChange={getUserName}/> <br />
                <br></br>Password: <input type="text" placeholder="password" id="password" onChange={getPassword}/> <br />
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }
    //function to render the shop
    function renderShop(){
        return<Shop isLoggedIn = {isLoggedIn} items = {items} />;
        
    }

    //function to render admin page
    function renderAdmin(){
        return (<AdminPanel isLoggedIn= {isLoggedIn} accounts = {accounts}/>)
    }
    //handles the rendering of components based on Login credentials
    if(isLoggedIn === false){
        return renderLogin()
    }
    else{
        //return our components
        if (role === "admin"){
            return renderAdmin()
        }
        else{
            return renderShop()
        }
    }


}