import './SecondaryBall.css';

function SecondaryBall({darkMode, lightMode}) {
  return (
    <div className={`SecondaryBall ${ darkMode ? `darkMode` : lightMode ? `lightMode` : '' }`} />
  )
}
export default SecondaryBall;