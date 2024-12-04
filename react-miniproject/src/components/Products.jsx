import { Link } from "react-router-dom"
const keyboards = [
    {id:1,
    name: 'SHIFT V2 Mechanical Keyboard',
    image1: 'https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/3bWXYP5qRqWTV2S8wkQj_PC2.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70',
    price: '$179',
    image2: '',
    image3: '',
    image4: '',
    header1:'',
    description1: '',
    header2:'',
    description2:'',
    keys:'',
    layout: '',
    case:'',
    material: '',
    keycaps: '',
    switches: '',
    stabilizers: '',
    connectivity: '',
    included1: '',
    included2: '',
    included3: '',
    },
]

const artisankeyb = []


export default function Products(){
    return(
        <>
            <h1>Keyboard Lists:</h1>
            <ul className="keyboard-list">
                {keyboards.map((keyboard) =>(
                    <li key={keyboard.id}>
                        <Link to ={`/keyboards/${keyboard.id}`} state={{keyboard}}><img src={keyboard.image1}/></Link><br />
                        <Link to ={`/keyboards/${keyboard.id}`} state={{keyboard}}>{keyboard.name.toUpperCase()}</Link><br />{keyboard.price}
                    </li>
                ))}
            </ul>
        </>
    )
}