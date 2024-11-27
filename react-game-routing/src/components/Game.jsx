import { useLocation } from "react-router-dom"
export default function Game(){
    const location = useLocation()
    const game = location.state.game;
    return(
        <div>
            <div className="background-container">
                <img className="background" src={game.background} alt="Background-image" />
                <img src={game.overlay} alt="Overlay-image" className="overlay" />
            </div>
            
            <h1 className="game-name">{game.name}</h1>
            <p>{game.description}</p>
            <h2 className="game-review">Reviews</h2>
            <p>{game.review1}</p>
            <p>{game.review2}</p>
            <p>{game.review3}</p>
        </div>
    )   
}