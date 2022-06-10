import { useEffect, useState } from "react";

const Machine = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [operation, setOperation] = useState('?');

    const handleClick1 = () => {
        setFirstNumber(firstNumber + 1);
    }

    const handleClick2 = () => {
        setSecondNumber(secondNumber + 1);
    }
   
    useEffect(() => {
        if (operation === "+"){
            setAnswer(firstNumber + secondNumber)
        } else if (operation === "-"){
            setAnswer(firstNumber - secondNumber)
        } else if (operation === "*"){
            setAnswer(firstNumber * secondNumber)
        } else if (operation === "/"){
            setAnswer(Math.round((firstNumber / secondNumber)*100)/100)
        }
    },[secondNumber,firstNumber, operation]);

    const handleReset = () => {
        setFirstNumber(0);
        setSecondNumber(0);
        setAnswer(0);
        setOperation("")
    }

    const handleChange = (e) => {
        setOperation(e.target.value);
    }
   
    return (
    <div className="container">
        <div className="counter">
            <div className="first">{firstNumber}</div>
            <div className="second">{secondNumber}</div>
            <div className="total">{answer}</div>
        </div>
        <div className="buttons">
            <button className="addToFirst" onClick={handleClick1}>Add to 1st</button>
            <button className="addToSecond" onClick={handleClick2}>Add to 2nd</button>
            <button className="reset" onClick={handleReset}>Reset</button>
            <select class="operation" onChange={(e) => handleChange(e)}>
                <option disabled value="?">Operation</option>
                <option value="+">Add</option>
                <option value="-">Subtract</option>
                <option value="*">Multiply</option>
                <option value="/">Divide</option>
            </select>
        </div>
    </div>
    );
}
 
export default Machine;