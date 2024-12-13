import { useState, React } from "react";

export default function Reviews(props) {
    const [reviews, setReviews] = useState([]);

    // Function to add a keyboard review
    function AddKeyboardRev() {
        let review = {
            date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            keyboard: document.getElementById("keyboard").value,
            review: document.getElementById("review").value,
            rating: document.getElementById("rating").value  
        };
        setReviews(r => [...r, review]);
        document.getElementById("keyboard").value = "";
        document.getElementById("review").value = "";
        document.getElementById("rating").value = 0;
    }

    // Render the keyboard review history
    const renderKeyboardRevHistory = () => {
        return reviews.map((review, index) => {
            return (
                <div key={index} className="review-card">
                    <h2>{review.keyboard}</h2>
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
            <h1>Share your keyboard/company reviews with us!</h1>
            <h4>Review:</h4>
            <div className="input-group">
                <label htmlFor="keyboard">Keyboard/Company:</label>
                <input type="text" name="keyboard" id="keyboard" />
            </div>
            <div className="input-group">
                <label htmlFor="rating">Rating</label>
                <input type="number" name="rating" id="rating" min="0" max="10" />
            </div>
            <div className="input-group">
                <label htmlFor="review">Review:</label>
                <textarea name="review" id="review" cols="50" rows="10"></textarea>
            </div>

            <button className="submit-btn" type="button" onClick={AddKeyboardRev}>Submit Review</button>

            <h4>Review History:</h4>
            <div className="review-history">
                {renderKeyboardRevHistory()}
            </div>
        </div>
    )
}
