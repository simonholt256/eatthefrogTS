import moonPic from '../assets/moon.png'
import sunPic from '../assets/sun.png'

type HeaderProps = {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Header({
  darkMode,
  setDarkMode
}: HeaderProps) {
  return (
    <div className="header-div">
      <div className="header-box">
        <div className='eat-frog-header'>EAT THE FROG</div>
        <button
          id="themeToggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          <img
            className="darkmode-img"
            src={darkMode ? sunPic : moonPic}
          />
        </button>
      </div>
      <div className='shape'></div>
    </div>
  )
}