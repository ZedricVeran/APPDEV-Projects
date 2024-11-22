import { useLocation } from "react-router-dom"
export default function Game(){
    const location = useLocation()
    const game = location.state.game;
    return(
        <div>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <h2>Reviews</h2>
            <p>{game.review1}</p>
            <p>{game.review2}</p>
            <p>{game.review3}</p>
        </div>
    )   
}