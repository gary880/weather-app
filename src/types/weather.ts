export interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  main:string;
  icon: string;
  id: number;
}

export interface WeatherCardProps {
  data: WeatherData;
  onDelete: () => void;
}

export enum WeatherCondition {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
  Snow = "Snow",
  Thunderstorm = "Thunderstorm",
  Drizzle = "Drizzle",
  Mist = "Mist",
  Smoke = "Smoke",
  Haze = "Haze",
  Dust = "Dust",
  Fog = "Fog",
  Sand = "Sand",
  Ash = "Ash",
  Squall = "Squall",
  Tornado = "Tornado",
}

export const getWeatherConditionColor = (
  condition: WeatherCondition
): string => {
  switch (condition) {
    case WeatherCondition.Clear:
      return "#FFD700"; // Gold
    case WeatherCondition.Clouds:
      return "#B0C4DE"; // LightSteelBlue
    case WeatherCondition.Rain:
      return "#00BFFF"; // DeepSkyBlue
    case WeatherCondition.Snow:
      return "#FFFFFF"; // White
    case WeatherCondition.Thunderstorm:
      return "#778899"; // LightSlateGray
    case WeatherCondition.Drizzle:
      return "#4682B4"; // SteelBlue
    case WeatherCondition.Mist:
    case WeatherCondition.Fog:
      return "#696969"; // DimGray
    case WeatherCondition.Smoke:
    case WeatherCondition.Haze:
    case WeatherCondition.Dust:
    case WeatherCondition.Sand:
    case WeatherCondition.Ash:
      return "#A9A9A9"; // DarkGray
    case WeatherCondition.Squall:
    case WeatherCondition.Tornado:
      return "#808080"; // Gray
    default:
      return "#D3D3D3"; // LightGray
  }
};
