import { useState, useContext } from "react"
import weatherContext from "../Context/weatherContext";
import "./style/searchInput.css"


const SearchInput = () => {
    const [city, setCity] = useState("");
    const { setCity: fetchWeatherData } = useContext(weatherContext); // burda setCity ye fetchWeatherData adını verdik

    const inputChange = (e) => {
        setCity(e.target.value)
    }
    console.log(city)
    const handleSearch = () => {
        if (!city.trim()) {
            alert("Lütfen bir şehir girin!")
            return;
        }
        fetchWeatherData(city);
        setCity(""); // input alanını temizle
    }

    return (
        <div className="searchContainer">
            <h1 className="headerText">Hava Durumu Sorgulama</h1>
            <div className="search-main">
                <input
                    name="searchWeather"
                    placeholder="Şehir Giriniz"
                    onChange={inputChange}
                    value={city}
                />
                <button onClick={handleSearch}>
                    Ara
                </button>
            </div>
        </div>
    )
}

export default SearchInput;