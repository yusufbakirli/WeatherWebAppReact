import { useContext } from "react";
import weatherContext from "../Context/weatherContext";
import "./style/weatherContainer.css"


const WeatherContainer = () => {
    const { weatherData } = useContext(weatherContext)
    console.log(weatherData)
    // weatherData veya weatherData.city null ise "Loading..." yazdır
    if (!weatherData || !weatherData.city) {
        return <div>Loading...</div>;
    }

    return (
        <div className="weatherContainer">

            <h2>
                {weatherData.city.charAt(0).toUpperCase() + weatherData.city.slice(1).toLowerCase()}
            </h2>

            {/* Eğer weatherData bir obje ise map fonksiyonunu kullanamayız dizi olsaydı map fonksiyonu ile yazdırabilirdik */}
            <div className="w_week">
                <div className="weatherListWeekly">
                    {weatherData.result.map((item, index) => (
                        // Her günün bilgilerini yazdırıyoruz
                        <div key={index} className="wearger">
                            <span className="w_day">
                                {item.day}
                            </span>
                            <span className="icon_cont">
                                <img className="w_icon" src={item.icon} alt={`${item.day} hava durumu`} />
                            </span>
                            <span className="w_degree">
                                {Math.round(item.max)}°,{Math.round(item.min)}°
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WeatherContainer;