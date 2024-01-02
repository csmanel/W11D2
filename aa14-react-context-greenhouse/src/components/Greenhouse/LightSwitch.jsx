import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (e.target.value === 'day') {
      setThemeName('day');
    } else if (e.target.value === 'night') {
      setThemeName('night');
    }
  };

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on">
        <button onClick={handleClick} value="day">
          day
        </button>
      </div>
      <div className="off">
        <button onClick={handleClick} value="night">
          night
        </button>
      </div>
    </div>
  );
}

export default LightSwitch;
