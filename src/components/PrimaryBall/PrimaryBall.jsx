import './PrimaryBall.css';
import {useContext} from "react";
import {ColorModeContext} from '../../context/ColorModeProvider'

import SecondaryBall from '../SecondaryBall/SecondaryBall'

function PrimaryBall() {
  const {state: {lightMode, darkMode}} = useContext(ColorModeContext)
  return (
    <div className={`PrimaryBall ${ darkMode ? `darkMode` : lightMode ? `lightMode` : '' }`}>
      <SecondaryBall />
    </div>
  )
}
export default PrimaryBall;