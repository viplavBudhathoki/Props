// Send props from a parent component to two different child components and render different content in both.

// FirstChild

function FirstChild(props){

    return(
        <div className="firstChild">
            <h2>First Child</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Profession: {props.profession}</p>
        </div>
    );
}

export default FirstChild