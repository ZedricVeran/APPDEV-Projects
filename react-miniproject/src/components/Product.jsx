import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Product() {
  const location = useLocation();
  const keyboard = location.state.keyboard;

  // Set `image1` as the default main image
  const [mainImage, setMainImage] = useState(
    keyboard.image1 || "placeholder.jpg"
  );

  // Handles changing the main image
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  // Keyboard review functionality
  const [reviews, setReviews] = useState([]);

  // Function to add a keyboard review
  function AddKeyboardRev() {
    let review = {
      date:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      keyboard: keyboard.name,
      name: document.getElementById("name").value,
      review: document.getElementById("review").value,
      rating: document.getElementById("rating").value,
    };
    setReviews((r) => [...r, review]);
    document.getElementById("name").value = "";
    document.getElementById("review").value = "";
    document.getElementById("rating").value = 0;
  }

  // Render the keyboard review history
  const renderKeyboardRevHistory = () => {
    return reviews.map((review, index) => {
      return (
        <div key={index} className="review-card">
          <h2><strong>Product:</strong> {review.keyboard}</h2>
          <h4><strong>Review:</strong> {review.rating}/10</h4>
          <p className="review-date">{review.date}</p>
          <p className="review-name">Customer Name: {review.name}</p> 
          <p className="review-text">Comment: "{review.review}"</p>
        </div>
      );
    });
  };

  return (
    <>
      <div className="product-container">
        {/* Left Side: Image Gallery */}
        <div className="product-images">
          <div>
            <img
              src={mainImage}
              alt={keyboard.name || "Keyboard"}
              className="product-main-image"
            />
          </div>
          <div className="product-thumbnails">
            {[
              keyboard.image1,
              keyboard.image2,
              keyboard.image3,
              keyboard.image4,
            ]
              .filter(Boolean) // Exclude empty or undefined images
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  className={`product-thumbnail ${
                    image === mainImage ? "selected" : ""
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="product-details">
          <h1 className="product-name">
            {keyboard.name || "Unnamed Keyboard"}
          </h1>
          <h2 className="product-price">
            {keyboard.price ? keyboard.price : "Price not available"}
          </h2>
          <div className="product-rating">
            {"★".repeat(keyboard.rating || 4)}
            {"☆".repeat(5 - (keyboard.rating || 4))}
          </div>
          <button
            className="add-to-cart-button"
            onClick={() => console.log(`${keyboard.name} added to cart!`)}
          >
            Add to Cart
          </button>

          {/* Specifications */}
          <h3 className="product-header">Specifications</h3>
          <ul className="product-specifications">
            <li>Keys: {keyboard.keys || "Not specified"}</li>
            <li>Layout: {keyboard.layout || "Not specified"}</li>
            <li>Case: {keyboard.case || "Not specified"}</li>
            <li>Keycaps: {keyboard.keycaps || "Not specified"}</li>
            <li>Switches: {keyboard.switches || "Not specified"}</li>
            <li>Stabilizers: {keyboard.stabilizers || "Not specified"}</li>
            <li>Connectivity: {keyboard.connectivity || "Not specified"}</li>
          </ul>
        </div>
      </div>

      <div className="pro-header">
        <div className="pro-head-container">
          <h3 className="product-header">{keyboard.header1}</h3>
        </div>
        <div className="pro-desc-container">
          <p className="product-description">{keyboard.description1}</p>
        </div>
      </div>

      <div className="pro-header">
        <div className="pro-head-container">
          <h3 className="product-header">{keyboard.header2}</h3>
        </div>
        <div className="pro-desc-container">
          <p className="product-description">{keyboard.description2}</p>
        </div>
      </div>

      {/* Keyboard Review Section */}
      <div className="reviews-container">
        <h4 className="reviews-title">Reviews:</h4>

        <div className="input-group">
          <label htmlFor="name" className="input-label">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="name-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="rating" className="input-label">
            Rating:
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            min="0"
            max="10"
            placeholder="Rate out of 10"
            className="rating-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="review" className="input-label">
            Your Review:
          </label>
          <textarea
            name="review"
            id="review"
            cols="50"
            rows="5"
            placeholder="Write your review here..."
            className="review-textarea"
          ></textarea>
        </div>

        <button className="submit-btn" type="button" onClick={AddKeyboardRev}>
          Submit Review
        </button>

        <h4 className="history-title">Review History:</h4>
        <div className="review-history">{renderKeyboardRevHistory()}</div>
      </div>
    </>
  );
}
