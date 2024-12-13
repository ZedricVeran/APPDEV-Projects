import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Array of background images
  const backgrounds = [
    "url(https://wallpaperaccess.com/full/2126186.jpg)",
    "url(https://wallpaperaccess.com/full/2126183.jpg)",
    "url(https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-an-image-of-a-computer-keyboard-in-black-image_2671362.jpg)",
  ];

  // Function to change background to next
  const nextBackground = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  // Auto change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextBackground, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <div
        className="hero-banner"
        style={{ backgroundImage: backgrounds[currentIndex] }}
      >
        <div className="content">
          <h1>Type Your World, One Key at a Time</h1>
          <p>Discover keyboards designed for every type of user.</p>
          <button type="button" onClick={() => navigate("/Products")}>Shop Now</button>
        </div>
      </div>
      <br />
      <br />
      {/* Banner Section */}
      <div className="banner-section1">
        {/* Banner 1 */}
        <div className="banner1">
          <img src="https://massdrop-s3.imgix.net/marketingContent/Y5AhCI7MTFX3piScMuT9_Flower_Journal_0266-copy-pdp.jpg?auto=format&fm=jpg&fit=crop&w=960&dpr=1.25&chromasub=444&q=56" alt="keyboard1" />
          <div className="content">
            <h2>Check out the right keyboard, for the right person</h2>
            <button onClick={() => navigate("/Products")}>Shop Now</button>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="banner2">
          <img src="https://massdrop-s3.imgix.net/img_site/shop_by_category/keycaps-desktop-02.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=1&chromasub=444&q=70" alt="keyboard2" />
          <div className="content">
            <h2>Tired of the same keyboard? How about create your own!</h2>
            {/* Navigate to KeyboardBuilder */}
            <button onClick={() => navigate("/keyboard-builder")}>
              Create your keyboard now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
