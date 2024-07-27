import { useState, useEffect } from 'react';
import './Calculator.css';

export default function Calculator() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    const clear = () => {
        setResult('');
    };

    const backspace = () => {
        setResult(result.slice(0, -1));
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult('Error');
        }
    };

    const handleKeyPress = (e) => {
        if ((e.key >= '0' && e.key <= '9') || e.key === '/' || e.key === '*' || e.key === '-' || e.key === '+' || e.key === '.') {
            setResult(result.concat(e.key));
        } else if (e.key === 'Enter') {
            calculate();
        } else if (e.key === 'Backspace') {
            backspace();
        } else if (e.key === 'Escape') {
            clear();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [result]);

    return (
        <div className="container">
            <form>
                <input type="text" value={result} readOnly />
            </form>
            <div className="keypad">
                <button className='high' onClick={clear} id="clear">Clear</button>
                <button className='high' onClick={backspace} id="back"><ion-icon name="backspace-outline"></ion-icon></button>
                <button className='high' name="/" onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button className='high' name="*" onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button className='high' name="-" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button className='high' name="+" onClick={handleClick}>+</button>
                <button name="." onClick={handleClick}>.</button>
                <button name="0" onClick={handleClick}>0</button>
                <button className='high' onClick={calculate} id='result'>=</button>
            </div>
        </div>
    );
}
