import React, { useState } from "react";

export default function Reviews(props) {
    const [reviews, setReviews] = useState([]);

    // Function to add a game review
    function AddGameRev() {
        let review = {
            date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            game: document.getElementById("game").value,
            review: document.getElementById("review").value,
            rating: document.getElementById("rating").value  
        };
        setReviews(r => [...r, review]);
        document.getElementById("game").value = "";
        document.getElementById("review").value = "";
        document.getElementById("rating").value=0;
    }

    // Render the game review history
    const renderGameRevHistory = () => {
        return reviews.map((review, index) => {
            return (
                <div key={index} className="review-card">
                    <h2>{review.game}</h2>
                    <h4>{review.rating}/10</h4>
                    <p className="review-date">{review.date}</p>
                    <p className="review-text">{review.review}</p>
                </div>
            );
        });
    }

    // Main render
    return (
        <div className="reviews-container">
            <h1>Welcome to the Review Page!</h1>
            <h4>Game Reviews:</h4>
            <div className="input-group">
                <label htmlFor="game">Game:</label>
                <input type="text" name="game" id="game" />
            </div>
            <div className="input-group">
                <label htmlFor="rating">Rating</label>
                <input type="number" name="rating" id="rating" min="0" max="10" />
            </div>
            <div className="input-group">
                <label htmlFor="review">Review:</label>
                <textarea name="review" id="review" cols="50" rows="10"></textarea>
            </div>

            <button className="submit-btn" type="button" onClick={AddGameRev}>Submit Review</button>

            <h4>Review History:</h4>
            <div className="review-history">
                {renderGameRevHistory()}
            </div>
        </div>
    )
}
