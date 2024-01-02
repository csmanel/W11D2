import './ClimateStats.css';
import { useClimateContext } from '../../context/ClimateContext';

function ClimateStats() {
  const { climateTemp, climateHumidity} = useClimateContext();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climateTemp}°F
      </div>
      <div className="humidity">
        Humidity {climateHumidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
