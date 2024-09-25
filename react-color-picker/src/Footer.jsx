export default function Footer (){
    //stateless component - no hooks, no functions, no states; just rendering
    //funciton component - There are events; there are states
    return(
        <>
        <footer>
            <hr />
            <p>&copy; {new Date().getFullYear()} My Color Picker Website || Written by: Rens Zedric R. Veran</p>
        </footer>
        </>
        
    )

}