import './index.css'

const Header = props => {
  const {score, time} = props
  return (
    <nav className="navContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="navImage"
      />
      <ul className="navtextContainer">
        <li>
          <p className="navscorepara">
            Score: <span>{score}</span>
          </p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="navtimerImage"
          />
        </li>
        <li>
          <p className="navtextpara">{time} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
