import React, { useState, useEffect } from 'react';
export default function Home(){
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of background images
    const backgrounds = [
      'url(https://wallpaperaccess.com/full/2126186.jpg)',
      'url(https://wallpaperaccess.com/full/2126183.jpg)',
      'url(https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-an-image-of-a-computer-keyboard-in-black-image_2671362.jpg)', // Add your own image URLs here
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
    
    return(
        <>
        {/* Hero Banner */}
        <div
        className="hero-banner"
        style={{ backgroundImage: backgrounds[currentIndex] }}
      >
            <div className="content">
                <h1>Type Your World, One Key at a Time</h1>
                <p>Discover keyboards designed for every types of users.</p>
                <button type="button">Button 1</button>
                <button type="button">Button 2</button>
            </div>
        </div>
        <br />
        <br />
        {/* Banner 1 */}
        <div className="banner-section1">
            <div className="banner1">
                <img src="https://via.placeholder.com/650x650" alt="keyboard1" />
                <h2>Office keyboard</h2>
                <button type="button">Button 3</button>
            </div>
            <div className="banner2">
                <img src="https://via.placeholder.com/650x650" alt="keyboard2" />
                <h2>Mechanical keyboard</h2>
                <button type="button">Button 3</button>
            </div>
        </div>

        </>
    )
}