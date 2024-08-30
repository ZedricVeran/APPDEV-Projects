//hex code=f15025
const quotes = [
    "\"A good decision is based on knowledge and not on numbers.\"",
    "\"Thinking - the talking of the soul with itself.\"",
    "\"There is no harm in repeating a good thing.\"",
    "\"Truth is the beginning of every good to the gods, and of every good to man.\"",
    "\"Knowledge without justice ought to be\""
]


const btn = document.getElementById("btn")
const quote = document.querySelector(".quote")
//functions for changing the colors of the HTML file
btn.addEventListener("click", ()=>{
    //targeting the document body
    console.log(document.body)//not required; just to ensure the connection between the console
    //getting a random number form getRandomNumber()
    const randomNumber=getRandomNumber()
    //change the text content for our span tag
    quote.textContent = quotes[randomNumber]
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * quotes.length)
}