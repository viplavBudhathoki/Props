// Build a Profile card component that gets name, age, and avatar (image URL) as props.

function Profile(props) {

    return(
        <div className="pp">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <img src={props.img} alt="Viplav Budhathoki" height={450}/>
        </div>
    );
}

export default Profile