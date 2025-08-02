
// Second Child

function Secondchild(props){

    return(
        <div className="secondChild">
            <h2>Second Child</h2>
            <p>Address: {props.address}</p>
            <p>Hobby: {props.hobby}</p>
        </div>
    );
}

export default Secondchild