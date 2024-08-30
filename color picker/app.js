//hex code=f15025
const colors = ["green", "red", "rgba(133,122,200)", "$f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
//functions for changing the colors of the HTML file
btn.addEventListener("click", ()=>{
    //targeting the document body
    console.log(document.body)//not required; just to ensure the connection between the console
    //getting a random number form getRandomNumber()
    const randomNumber=getRandomNumber()
    //referencing the backgound color of the document body
    document.body.style.backgroundColor = colors[randomNumber]
    //change the tect content for our span tag
    color.textContent = colors[randomNumber]
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length)
}