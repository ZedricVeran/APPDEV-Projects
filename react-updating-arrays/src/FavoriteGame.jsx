import React, {useState} from "react"

export default function FavoriteGames(){
    const [games,setGames] = useState(["Hades", "Risk of Rain 2", "Doomsday Hunters"])
    //function to add game
    function handleAddGame(){
        //refering to our text bos
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [...g,  newGame])
        //reset textbox
        document.getElementById("gameInput").value=" ";
    }

    function handleRemoveGame(index){
        const newGame = games.filter((games, i) => i !=index)
        setGames(newGame)
    }
    return(
        <>
        <div>
            <h2>These are my favorite games in 2024</h2>
            <ul>
                {
                    games.map((game, index) => 
                    <li key={index} onClick={() => handleRemoveGame(index)}>{game}</li>)
                }
            </ul>
            <input type="text" name="gameInput" id="gameInput" />
            <button type="button" onClick={handleAddGame}>Add Games</button>
        </div>
        </>
    )
}