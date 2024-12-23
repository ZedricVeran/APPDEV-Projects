import React, {useState} from "react";
import Login from "./Login";
export default function AdminPanel(props){
    let accounts = props.accounts
    //devlogs as objects or lists
    const [devlogs, setDevLogs] = useState([])
    //function to add DevLogs
    function AddDevlog(){
        let devlog = {
            date: new Date().getFullYear()+ "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        }
        setDevLogs(d =>[...d, devlog])
        document.getElementById("title").value = ""
        document.getElementById("content").value = ""

    }
    //function to render accounts
    const renderAccounts = () => {
        return(
            accounts.map((account) =>{
                return(
                    <div>
                    <h2 key = {account.id}>
                        {account.username}
                    </h2>
                    <p>{account.role}</p>
                    </div>
                )
            })
        )
    }
    //function to render devlogs history
    const renderDevLogHistory = () => {
        return(
            devlogs.map((devlog) =>{
                return(
                    <div>
                        <h2>{devlog.title}</h2>
                        <p>{devlog.date}</p>
                        <p>{devlog.content}</p>
                    </div>
                )
            })
        )
    }
    //conditioonal rendering
    if(props.isLoggedIn === false){
        return <Login />
    }
    else{
        return(
            <div>
                <h1>This is the admin pane</h1>
                <p>These are the active accounts:</p>
                {renderAccounts()}
                <br />
                <hr />
                <h4>Admin Devlogs:</h4>
                Title : <input type="text" name="title" id="title" />
                <br /> <br />
                Content:
                <br />
                <textarea name="content" id="content" cols="50" rows="10"></textarea>
                <br />
                <button type="submit" onClick={AddDevlog}>Submit</button>
                <h4>Devlog History:</h4>
                <br /> <br />
                {renderDevLogHistory()}
            </div>
        )
    }
    
    
    return(
        <>
        </>
    )
}