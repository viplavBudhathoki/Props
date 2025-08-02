

function User(props) {
  return (
    <div className="User">
      <p>Beginner-level(Question no. 1)</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default User