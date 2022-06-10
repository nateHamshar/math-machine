import { useState } from "react";

const Home = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [total, setTotal] = useState(0)

   const handleClick1 = () => {
    setFirstNumber(firstNumber + 1);
   }
   const handleClick2 = () => {
    setSecondNumber(secondNumber + 1);
    }
   
   const handleReset = () => {
    setFirstNumber(0);
    setSecondNumber(0);
    setTotal(0);
   }

   
    return (
    <div className="container">
        <div className="counter">
            <div className="first">{firstNumber}</div>
            <div className="second">{secondNumber}</div>
            <div className="total">{total}</div>
        </div>
        <div className="buttons">
            <button className="addToFirst" onClick={handleClick1}>Add to 1st</button>
            <button className="addToSecond" onClick={handleClick2}>Add to 2nd</button>
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>
    </div>
    );
}
 
export default Home;