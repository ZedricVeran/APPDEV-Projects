export default function Body() {
    const randomQuote = [
        "\"A good decision is based on knowledge and not on numbers.\"",
        "\"Thinking - the talking of the soul with itself.\"",
        "\"There is no harm in repeating a good thing.\"",
        "\"Truth is the beginning of every good to the gods, and of every good to man.\"",
        "\"Knowledge without justice ought to be\""
    ]
    
    
    
    const [quote,setQuote] = useState("\"A good decision is based on knowledge and not on numbers.\"")
    
    function getRandomNumber() {
        return Math.floor(Math.random()*randomColor.length)

    }

    function getRandomQuote(){
        let quotes=randomQuote[getRandomNumber()] 
    }

    function randomQuoteChange(){
        
    }
  
  
    return (
    <body>
      <main>
        <div class="container">
          <h2>
            Plato:
            <span class="quote">
              "A good decision is based on knowledge and not on numbers."
            </span>
          </h2>
          <button class="btn btn-hero" id="btn">Randomize</button>
          <button class="btn btn-hero" id="btn">Order</button>
        </div>
      </main>
    </body>
  );
}
