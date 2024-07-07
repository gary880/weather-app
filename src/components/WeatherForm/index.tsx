import React, { useRef } from "react";
import styles from "./index.module.css";
import searchSvg from "../../assets/search_plus.svg";

interface WeatherFormProps {
  onAddCity: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onAddCity }) => {
  const cityRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cityRef.current && cityRef.current.value) {
      onAddCity(cityRef.current.value);
      cityRef.current.value = "";
    }
  };

  return (
    <div className={styles.search_bar_container}>
      <form onSubmit={handleSubmit} className={styles.search_bar}>
        <input type="text" ref={cityRef} placeholder="Enter city name" />
        <button type="submit">
          <img src={searchSvg} alt="search_icon" width="24px" className={styles.search_icon} />
        </button>
      </form>
    </div>
  );
};

export default WeatherForm;
