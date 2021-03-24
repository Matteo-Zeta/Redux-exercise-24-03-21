import './App.css';
import PrimaryBall from './components/PrimaryBall/PrimaryBall'
import SecondaryBall from './components/SecondaryBall/SecondaryBall'

import {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  function turnDarkMode(){
    setLightMode(false);
    setDarkMode(true);
  }
  function turnLightMode(){
    setLightMode(true);
    setDarkMode(false);
  }
  return (
    <div className="App">
      <div className="info-wrapper">
        <h1>Esercizio 1</h1>
        <strong>Premi un pulsante per cambiare il tema:</strong>
        <div className="button-container">
          <button type="button" id="darkBtn" onClick={() => {turnDarkMode()}}>Dark Mode</button>
          <button type="button" id="lightBtn" onClick={() => {turnLightMode()}}>Light Mode</button>
        </div>
      </div>
      <div className="ball-container">
        <PrimaryBall darkMode={darkMode} lightMode={lightMode}>
          <SecondaryBall darkMode={darkMode} lightMode={lightMode}/>
        </PrimaryBall>
      </div>
    </div>
  );
}

export default App;
