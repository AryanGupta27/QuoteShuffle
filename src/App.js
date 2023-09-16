import './App.css';
import { useState } from 'react';
import Axios from "axios";

function App() {

  const[quote,setQuote]=useState(null)

  const fetchQuotes=()=>{
    Axios.get("https://api.adviceslip.com/advice").then((res)=>{
      setQuote(res.data.slip);
    })
  }
  
  return (
    <div className="App">
        <h1 className='quotedata'>{quote?.advice}</h1>
        <button className='clickBtn' onClick={fetchQuotes}> <h3>Genrate New!</h3> </button>        
    </div>
  );
}

export default App;
