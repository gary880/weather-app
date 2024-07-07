import React from "react";
import {
  WeatherCardProps,
  WeatherCondition,
  getWeatherConditionColor,
} from "../../types/weather";
import styles from "./index.module.css";

const WeatherCard: React.FC<WeatherCardProps> = ({ data, onDelete }) => {
  const condition = data.main as WeatherCondition;
  const backgroundColor = getWeatherConditionColor(condition);
  
  return (
    <div
      className={styles.weather_card}
      style={{ backgroundColor: backgroundColor }}
    >
      <button className={styles.delete_button} onClick={onDelete}>
        X
      </button>
      <img
        loading="lazy"
        alt="weather_pic"
        width="100px"
        height="100px"
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
      />
      <p className={styles.card_temperature}>{data.temperature.toFixed(0)}°C</p>
      <p className={styles.card_desc}>{data.description}</p>
      <h2 className={styles.card_location}>{data.city}</h2>
    </div>
  );
};

export default WeatherCard;
