import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="person">
            <img className="person-picture" src="https://placeholder.pics/svg/150x150" alt="profile-icon"/>
            <p>This is <strong>{props.name}'s</strong> favorite food:</p>
            <p>{(props.food).toUpperCase()}</p>
            <p>Is it Health?{props.isHealthy ? "Yes" : "No"}</p>
            <p><strong>{PropTypes.name} is {props.age} years old!</strong></p>
        </div>
    )
}

Body.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealthy: PropTypes.bool,
    age: PropTypes.number

//prop types a s a function to check the validity of types of data
//passed as props



}
Body.defaultProps ={
    name: "Guest",
    food: "Uknown",
    isHealthy: false,
    age: 0
}
