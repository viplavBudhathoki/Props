// Make a Button component that accepts label and onClick function via props.

function Button(props){
    return(
        <div className="Click">
            <button onClick={props.onClick}>{props.label}</button>
        </div>
    );
}

export default Button