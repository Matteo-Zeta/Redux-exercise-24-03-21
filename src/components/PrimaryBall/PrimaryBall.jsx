import './PrimaryBall.css';

function PrimaryBall({darkMode, lightMode, children}) {
  return (
    <div className={`PrimaryBall ${ darkMode ? `darkMode` : lightMode ? `lightMode` : '' }`}>
      {children}
    </div>
  )
}
export default PrimaryBall;