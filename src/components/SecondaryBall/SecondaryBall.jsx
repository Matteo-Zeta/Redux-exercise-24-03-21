import './SecondaryBall.css';
import {useContext} from "react";
import {ColorModeContext} from '../../context/ColorModeProvider'


function SecondaryBall() {
  const {state: {lightMode, darkMode}} = useContext(ColorModeContext)
  return (
    <div className={`SecondaryBall ${ darkMode ? `darkMode` : lightMode ? `lightMode` : '' }`} />
  )
}
export default SecondaryBall;