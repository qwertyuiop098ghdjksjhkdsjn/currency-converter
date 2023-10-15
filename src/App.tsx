import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Input from "./components/input/Input"; 
import getRate from './api/api';


interface IRate {
  USD?: number;
  EUR?: number
}

function App() {

  const [rate, setRate] = useState<IRate>({});

  const [result, setResult] = useState<string | number>("");

  function onClickConvert (sum: string, currency: string) {
    if (currency === "usd") {
      setResult(+sum * (rate?.USD || 1))
    } else {
      setResult(+sum * (rate?.EUR || 1))
    }
  }

  useEffect(() => {
    getRate().then(response => {
      console.log(response);
      let result: IRate = {};
      result.USD = 1/response.rates.RUB * response.rates.USD;
      result.EUR = 1/response.rates.RUB;

      setRate(result);
    })
  }, [])


  return (
    <div className="App">
      <header>
        <h1>Currency Converter</h1>
        <h4>The application converts rubles into dollars and euros</h4>
      </header>
      <Input onClick={onClickConvert}/>
      <p>exchange rate:</p>
      <div className='output'>{(+result).toFixed(3)}</div>
    </div>
  );
}

export default App;
