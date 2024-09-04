import Footer from './footer';
import Header from './header';
import Body from './body';


export default function App(){
    return(
        <>
        <Header />
        <br />
        <Body />
        <br />
        <Body name="Zedric" food="Potatoes" isHealthy={true} age={20} />
        <br />
        <Body name="Yuwan" food="Burger" isHealthy={false} age={19} />
        <br />
        <Body name="El" food="Burger" isHealthy={false} age={19} />
        <br />
        <Body name="Renzo" food="Sinigang" isHealthy={true} age={21} />
        <br />
        <Body name="Ahron" food="Cheesebar" isHealthy={true} age={21} />
        <Footer />
        </>
    )
}