import { createContext, useEffect, useState } from "react";

const ApiKey = "0FfahjVhFtYZahAJNm2iN3:2JUqX0tyOMzWLti1jVI3p7"
const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("istanbul")


    const fetchWeatherData = (city) => {
        fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `apikey ${ApiKey}` // api anahtarını headera ekledik
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error hatası" + response.status);
                }
                return response.json(); // yanıtı json formatında alıyoruz
            })

            .then((data) => {
                console.log("hava durumu verisi", data)
                setWeatherData(data);
            })
            .catch((error) => {
                console.log("hata türü :", error)
            })
    }

    useEffect(() => {
        // console.log("use1")
        fetchWeatherData(city); // ilk yüklemede varsayılan şehir
        // console.log("use2")
        setCity("");
        // console.log("use3")
    }, [])

    return (
        <div>
            <weatherContext.Provider value={{ weatherData, setCity: fetchWeatherData }}>
                {children}
                {/* <code>
                    {JSON.stringify(weatherData)}
                </code> */}
            </weatherContext.Provider>
        </div>
    )
}

export default weatherContext;