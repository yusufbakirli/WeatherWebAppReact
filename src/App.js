import './App.css';
import SearchInput from './Components/SearchInput';
import { WeatherProvider } from './Context/weatherContext';
import WeatherContainer from './Components/WeatherContainer';

function App() {
  return (
    <div className="App">

      <WeatherProvider>

        <SearchInput />

        <WeatherContainer />

      </WeatherProvider>
    </div>
  );
}

export default App;