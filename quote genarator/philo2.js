const quotes = [
    "\"There is nothing on this earth more to be prized than true friendship\"",
    "\"The things that we love tell us what we are\"",
    "\"Sorrow can be alleviated by good sleep, a bath and a glass of wine\"",
    "\"Beware of the person of one book\"",
    "\"All the efforts of the human mind cannot exhause the essence of a single fly\""
]


const btn = document.getElementById("btn")
const quote = document.querySelector(".quote")
//functions for changing the colors of the HTML file
let x=1
btn.addEventListener("click", ()=>{
    let count=x++
    quote.textContent=quotes[count]
    if (count==4){
        x=0
    }
})
