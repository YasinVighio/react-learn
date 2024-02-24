import './MyComponent.css';


function MyName(props){
    return(
        <span className='myName'>
            {props.name}
        </span>
    )
}

export default MyName;
