import styles from './index.css'

function Student(props) {

    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
  name: PropTypes.string,      // expects a string
  age: PropTypes.number,       // expects a number
  isStudent: PropTypes.bool,   // expects a boolean
};

Student.defaultProps = {
    name: "Sankalpa",
    age: 20,
    isStudent: True,
}

export default Student