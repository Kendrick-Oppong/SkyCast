import { WeatherApiResponse } from "@/types/weatherTypes";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const api_key = import.meta.env.VITE_WEATHER_API;

async function getWeatherData(): Promise<WeatherApiResponse> {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=Kumasi`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message || error.message);
    }
    throw error;
  }
}

export const useFetchWeatherData = () => {
  return useQuery({ queryKey: ["weatherData"], queryFn: getWeatherData });
};
