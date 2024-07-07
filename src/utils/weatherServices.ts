import axios from 'axios';
import { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

export const getWeatherData = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export const fetchWeatherData = async (city: string): Promise<WeatherData | null> => {
  const data = await getWeatherData(city);
  if (data) {
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      main: data.weather[0].main,
      icon: data.weather[0].icon,
      id: data.id,
    };
  }
  return null;
};

export const fetchAllWeatherData = async (cities: string[]): Promise<WeatherData[]> => {
    const weatherDataPromises = cities.map(city => fetchWeatherData(city));
    const weatherDataArray = await Promise.all(weatherDataPromises);
    return weatherDataArray.filter(data => data) as WeatherData[];
  };
  
