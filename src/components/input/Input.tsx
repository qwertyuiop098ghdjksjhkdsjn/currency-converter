import {useState} from "react"
import styles from "./Input.module.css";

interface InputProps {
    onClick: (sum: string, currency: string) => void;
}


function Input ({onClick} : InputProps) {
    const [text, setText] = useState ("");
    const [currency, setCurrency] = useState("usd");

    function handleClick (){
        onClick(text, currency);
        setText("");
    }
    return (
        <div className={styles.wrap}>
            <input className={styles.input} placeholder="enter the amount in rubles" type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <p className={styles.paragraph}>into</p>
            <select className={styles.selector} onChange={(e) => setCurrency(e.target.value)}>
                <option value={"usd"}>dollar</option>
                <option value={"eur"}>euro</option>
            </select>
            <button className={styles.button} onClick={handleClick}>convert</button> 
        </div>
    )
}

export default Input;