import React, { useState } from 'react';

export default function Body() {
    const randomQuote = [
        "\"A good decision is based on knowledge and not on numbers.\"",
        "\"Thinking - the talking of the soul with itself.\"",
        "\"There is no harm in repeating a good thing.\"",
        "\"Truth is the beginning of every good to the gods, and of every good to man.\"",
        "\"Knowledge without justice ought to be\""
    ];

    const [quote, setQuote] = useState(randomQuote[0]); // Initial quote
    const [index, setIndex] = useState(0); // State to keep track of the current index

    function getRandomNumber() {
        return Math.floor(Math.random() * randomQuote.length);
    }

    function getRandomQuote() {
        return randomQuote[getRandomNumber()];
    }

    function randomQuoteChange() {
        setQuote(getRandomQuote());
    }

    function orderQuoteChange() {
        const nextIndex = (index + 1) % randomQuote.length; // Cycle through the quotes
        setQuote(randomQuote[nextIndex]); // Set the next quote
        setIndex(nextIndex); // Update the index
    }

    return (
        <div>
            <main>
                <div className="container">
                    <h2>
                        Plato:
                        <span className="quote">
                            {quote}
                        </span>
                    </h2>
                    <button className="btn btn-hero" id="btn" onClick={randomQuoteChange}>Randomize</button>
                    <button className="btn btn-hero" id="btn" onClick={orderQuoteChange}>Order</button>
                </div>
            </main>
        </div>
    );
}
