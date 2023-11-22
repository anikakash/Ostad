import {useState} from "react";


const App = () => {
    const [number, setNumber] = useState(0);
    const IncValue = ()=>{
        setNumber(number+1);
    }
    const resetValue = ()=>{
        setNumber(0);
    }
    const deCriment = ()=>{
        number>0? setNumber(number-1) : alert("Counter Can't Negative ");
    }
    return (
        <div>
            <h1>Number : {number}</h1>
            <button onClick={IncValue} className={'button'}>Increment</button>
            <button onClick={resetValue} className={'button'}>Reset</button>
            <button onClick={deCriment} className={'button'}>Decrement</button>
        </div>
    );
};

export default App;