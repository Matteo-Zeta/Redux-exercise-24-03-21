import './SecondaryBall.css';
import {useSelector} from "react-redux";


function SecondaryBall() {
  const darkMode = useSelector(state => state.darkMode);
  const lightMode = useSelector(state => state.lightMode);
  return (
    <div className={`SecondaryBall ${ darkMode ? `darkMode` : lightMode ? `lightMode` : '' }`} />
  )
}
export default SecondaryBall;