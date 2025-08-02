// Pass an array of numbers from a parent component to a child and display the sum.

function Array(props){

    const sum = props.arrayNumber.reduce((total, num) => total + num, 0);


    return(
        <div className="Arr">
            <p>Beginner-level(Question no. 2)</p>
            <p>Sum = {sum}</p>
        </div>
    );
}

export default Array