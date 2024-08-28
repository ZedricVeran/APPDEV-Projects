//set the intial value for count
let count = 0;

//select value and buttons
//all the buttons
const btns = document.querySelectorAll('.btn')
//only one
const value = document.querySelector('#value')

getRandomNumber = () => {
    return Math.floor(Math.random() *100)
    return getRandomNumber
}

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        console.log  (e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }

        else if(styles.contains('decrease5')){
            count-=5
        }

        else if(styles.contains('increase5')){
            count+=5
        }

        else if(styles.contains('increase')){
            count++
        }

        else if(styles.contains('random')){
            count= Math.floor(Math.random() *200)-100
        }
        else{
            count = 0
        }
        


        if (count > 0){
            value.style.color="green"
        }

        if (count == 0){
            value.style.color="black"
        }

        if (count < 0){
            value.style.color="red"
        }

        value.textContent = count
    })
})

getRandomNumber = () => {
    return Math.floor(Math.random() *100)
}

