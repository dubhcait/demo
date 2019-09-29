import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [msg, setMesg] = React.useState('');
  const [img, setImg] = React.useState('');
  const [explanation, setExplanation] = React.useState('');
  const [date, setDate] = React.useState('');

  useEffect(() => {
    setLoading(true);
    fetch('/.netlify/functions/nasa')
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setMesg(json.title);
        setImg(json.image);
        setExplanation(json.info);
        setDate(json.date);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>{msg}</h2>
        <h3>{date}</h3>
        {img != '' ? <img src={img} className="App-logo" alt="Nasa" /> : null}
        <p>{explanation}</p>
      </header>
    </div>
  );
}

export default App;
