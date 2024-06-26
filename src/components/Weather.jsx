import React, { useEffect, useState } from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Card from "./Card";

import windIcon from '../assets/animated/wind-speed.svg'
import humidityIcon from '../assets/animated/humidity.svg'
import pressureIcon from '../assets/animated/pressure.svg'
import visibilityIcon from '../assets/animated/visibility.svg'

function Weather() {
  const [city, setCity] = useState("Noida");
  const [weatherData, setWeatherData] = useState(null);

  const URL = `https://api.weatherapi.com/v1/current.json?key=ffa72df18748419891152839242604&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  return (
    <div className="container mx-auto p-5">
      <Search setCity={setCity} />

      <h1 className="text-2xl my-5">Today Overview</h1>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Temperature Container */}
        <div className="bg-[#1E293B] border border-white rounded p-4">
          {weatherData && (
            <Temperature
              stats={{
                temp: weatherData.current.temp_c,
                condition: weatherData.current.condition.text,
                conditionIcon: weatherData.current.condition.icon,
                isDay: weatherData.current.is_day,
                location: weatherData.location.name,
                time: weatherData.location.localtime,
              }}
            />
          )}
        </div>

        {/* Weather condition Info Card */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {weatherData && (
            <>
              <Card
                stats={{
                  title: "Wind Speed",
                  value: weatherData.current.wind_kph,
                  unit: 'Km/hr',
                  icon: windIcon,
                }}
              />
              <Card
                stats={{
                  title: "Humidity",
                  value: weatherData.current.wind_kph,
                  unit: '%',
                  icon: humidityIcon,
                }}
              />
              <Card
                stats={{
                  title: "Pressure",
                  value: weatherData.current.pressure_mb,
                  unit: 'hPa',
                  icon: pressureIcon,
                }}
              />
              <Card
                stats={{
                  title: "Visibility",
                  value: weatherData.current.vis_miles,
                  unit: 'Km',
                  icon: visibilityIcon,
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
