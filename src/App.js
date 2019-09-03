import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [loading, setLoading] = React.useState(false);
const [msg, setMesg] = React.useState("");
 const handleClick = api => e => {
    e.preventDefault()
    setLoading(true)
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json =>  {setLoading(false); setMesg(json.msg)})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick("salesForce")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <p>  <span>{msg}</span>
      </p>
      </header>
    </div>
  );
}

export default App;
