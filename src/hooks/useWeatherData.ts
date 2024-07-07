import { useState, useEffect, useCallback } from "react";
import {
  fetchAllWeatherData,
  fetchWeatherData,
} from "../utils/weatherServices";
import { WeatherData } from "../types/weather";
import { loadLocations, saveLocations } from "../utils/locationStorage";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [locations, setLocations] = useState<string[]>(loadLocations());

  const addCity = useCallback(
    async (city: string) => {
      if (
        weatherData.some(
          (weather) => weather.city.toLowerCase() === city.toLowerCase()
        )
      ) {
        alert("City already exists");
        return;
      }

      const newWeather = await fetchWeatherData(city);
      if (newWeather) {
        setWeatherData((prevData) => [...prevData, newWeather]);
        setLocations((prevLocations) => [...prevLocations, city]);
      }
    },
    [weatherData]
  );

  const deleteWeatherCard = useCallback((id: number, city: string) => {
    setWeatherData((prevData) => prevData.filter((item) => item.id !== id));
    setLocations((prevLocations) =>
      prevLocations.filter((loc) => loc.toLowerCase() !== city.toLowerCase())
    );
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      const newWeatherData = await fetchAllWeatherData(locations);
      setWeatherData(newWeatherData);
    };

    fetchAllData();
  }, [locations]);

  useEffect(() => {
    saveLocations(locations);
  }, [locations]);

  return { weatherData, locations, addCity, deleteWeatherCard, setWeatherData };
};

export default useWeatherData;
