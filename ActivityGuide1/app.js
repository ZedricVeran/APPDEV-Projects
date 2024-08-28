//This is the component for the first item
//item 1
const btn1 = document.getElementById("btn1")
//for displaying the information
btn1.addEventListener("click", () => {
    //create and initialize our variable
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value

    //display message in a template String; after pressing button
    let x = `Hello! ${name}, I see that you are from ${address}
    and you are also pursuing ${major} and you can be contacted
    using ${telephone}.`
    document.getElementById("output1").innerHTML= x
})

//item 2
const btn2 = document.getElementById("btn2")
//for displaying the output
btn2.addEventListener("click", () =>{
    //creating and initialize our variable
    let tsales = document.getElementById("tsales").value
    let total = parseFloat(tsales)
    let y = total * 0.23

    let x = `Hello!, with the total sales, ${tsales}, the annual profit is: ${y}`

    document.getElementById("output2").innerHTML= x

})

//item 3
/* const btn3 = document.getElementById("btn3") */
//for displaying the ourput
//btn3.addEventListener("click", () =>{
    //creating and initializing
   /*  let speed = document.getElementById("speed").value */
    /* let ispeed = parseInt(speed) */
    let five = 60 * 5
    let eight = 60 * 8
    let twelve = 60 * 12

    let x = `Here is the distance travel:
    ${five} miles is the distance the car will travel in 5 hours
    ${eight} miles is the distance the car will travel in 8 hours
    ${twelve} miles is the distance the car will travel in 12 hours
    
    `
    document.getElementById("output3").innerHTML = x

//})

//item 4
const btn4 = document.getElementById("btn4")
//display the output
btn4.addEventListener("click", () =>{
    //creating and intialize
    let miles = document.getElementById("miles").value
    let gallons = document.getElementById("gallons").value
    let fmiles = parseFloat(miles)
    let fgallons = parseFloat(gallons)

    let y = fmiles / fgallons
    let round = Math.round(y * 100) / 100

    let x = `The car's miles-per-gallon is ${round}`

    document.getElementById("output4").innerHTML = x

})

//item 5
const btn5 = document.getElementById("btn5")
//display output
btn5.addEventListener("click", () =>{
    //create and intialize
    let celsius = document.getElementById("celsius").value
    let cel = parseFloat(celsius)

    let y = 9/5 *cel + 32
    let round = Math.round (y * 100) / 100

    let x = `${celsius} C is ${round}F in fahrenheit`

    document.getElementById("output5").innerHTML= x
})

//item 6
const btn6 = document.getElementById("btn6")
//display output
btn6.addEventListener("click", () =>{
    //create and intialize
    let cookie = document.getElementById("cookie").value
    let cook = parseFloat(cookie)

    let y = cook * 75

    let x = `Total calories : ${y}`

    document.getElementById("output6").innerHTML= x
})

//item 6
const btn7 = document.getElementById("btn7")
//display output
btn7.addEventListener("click", () =>{
    //create and intialize
    let male = document.getElementById("male").value
    let female = document.getElementById("female").value
    let fmale = parseInt(male)
    let ffemale = parseInt(female)

    let y = fmale + ffemale
    fmale/=y
    ffemale/=y
    let x = `Total ratio of students : male: ${fmale*100}% female: ${ffemale*100}`

    document.getElementById("output7").innerHTML= x
})


