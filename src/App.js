import './App.css';
import PrimaryBall from './components/PrimaryBall/PrimaryBall'

//import { setDarkMode, setLightMode } from './store/action';
import { useContext } from "react";
import {ColorModeContext} from './context/ColorModeProvider'

function App() {

  const {setDarkMode, setLightMode} = useContext(ColorModeContext)

  function turnDarkMode() {
    setDarkMode()
  }
  function turnLightMode() {
    setLightMode()
  }
  return (
    <div className="App">
      <div className="info-wrapper">
        <h1>Esercizio 1</h1>
        <strong>Premi un pulsante per cambiare il tema:</strong>
        <div className="button-container">
          <button type="button" id="darkBtn" onClick={() => { turnDarkMode() }}>Dark Mode</button>
          <button type="button" id="lightBtn" onClick={() => { turnLightMode() }}>Light Mode</button>
        </div>
      </div>
      <div className="ball-container">
        <PrimaryBall />
      </div>
    </div>
  );
}

export default App;
