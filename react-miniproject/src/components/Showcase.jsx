import './Showcase.css';

export default function Showcase() {
    return (
        <>
            <h1 className="title">Welcome to Our Keyboard Showcase!</h1>
            <div className="features">
                <h2 className="features-title">Why Choose Our Keyboards?</h2>
                <ul className="features-list">
                    <li className="feature-item">Ergonomic designs for comfortable typing</li>
                    <li className="feature-item">Customizable RGB lighting for a personalized setup</li>
                    <li className="feature-item">Durable key switches rated for 50 million presses</li>
                    <li className="feature-item">Wireless and wired options to suit your needs</li>
                </ul>
            </div>
            <div className="testimonials">
                <h2 className="testimonials-title">What Our Customers Say</h2>
                <div className="testimonial">
                    <p className="quote">"The tactile feedback is unparalleled! I can't imagine using another keyboard."</p>
                    <p className="author">- Alex J.</p>
                </div>
                <div className="testimonial">
                    <p className="quote">"Customizable keys and sleek design. This keyboard is a game-changer!"</p>
                    <p className="author">- Taylor S.</p>
                </div>
                <div className="testimonial">
                    <p className="quote">"Typing feels so smooth and effortless. Highly recommend this brand!"</p>
                    <p className="author">- Jordan P.</p>
                </div>
            </div>
            <div className="statistics">
                <h2 className="stats-title">Our Achievements</h2>
                <ul className="stats-list">
                    <li className="stat-item">Over 50,000 keyboards sold worldwide</li>
                    <li className="stat-item">Rated 4.9/5 by our customers</li>
                    <li className="stat-item">Used by professional gamers and typists in 30+ countries</li>
                </ul>
            </div>
        </>
    );
}
