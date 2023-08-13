"use client";
import "./styles.css";

import { TiWeatherPartlySunny, TiWeatherWindy } from "react-icons/ti";
import { TbTemperatureCelsius, TbBrandGithub } from "react-icons/tb";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

import Button from "../button/Button";
import ToggleButton from "../toggle-button/ToggleButton";
import SearchBar from "../search-bar/Search-Bar";

type CityResult = {
    results: City[];
};

type City = {
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    country_code: string;
    timezone: string;
    population: number;
    id: number;
};
type CurrentWeather = {
    current_weather: Weather;
};

type Weather = {
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: boolean;
    time: string;
};

const Card = () => {
    const [cityData, setCityData] = useState<City>();
    const [weatherData, setWeatherData] = useState<Weather>();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorShake, setErrorShake] = useState<boolean>(false);

    const handleInputData = (city: string) => {
        setErrorShake(false);
        getCities(city);
    };

    const getCities = async (city: string) => {
        if (city === "") return;
        const cities = axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
        );
        cities.then((res) => {
            const result: CityResult = res.data;
            if (result.results === undefined) return setErrorShake(true);
            setCityData(result.results[0]);
            getWeather(result.results[0].latitude, result.results[0].longitude);
        });
    };

    const getWeather = async (latitude: number, longitude: number) => {
        const weather = axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        weather.then((res) => {
            const result: CurrentWeather = res.data;
            console.log(result.current_weather);
            setWeatherData(result.current_weather);
        });
        setLoading(true);
    };

    return (
        <main className="card-box box__shadow">
            <div className="card__title">
                <h1>Weather app demo</h1>
            </div>
            <div className="card__padding">
                <SearchBar shake={errorShake} getCity={handleInputData} />
                <div className="card__menu">
                    <ToggleButton
                        text={weatherData?.temperature + "°C"}
                        enable={loading}
                    >
                        <TbTemperatureCelsius size="1.5rem" />
                    </ToggleButton>
                    <ToggleButton
                        text={weatherData?.winddirection + "°"}
                        enable={loading}
                    >
                        <TiWeatherPartlySunny size="1.5rem" />
                    </ToggleButton>
                    <ToggleButton
                        text={weatherData?.windspeed + "Km/h"}
                        enable={loading}
                    >
                        <TiWeatherWindy size="1.5rem" />
                    </ToggleButton>
                </div>
                <hr />
                <div className="card__content">
                    {loading ? (
                        <div>
                            <h1>Weather in {cityData?.name}</h1>
                            <p>
                                Today in {cityData?.name} it is{" "}
                                {weatherData?.temperature}°C
                            </p>
                            <p>
                                wind is blowing at {weatherData?.windspeed}Km/h
                            </p>
                            <p>from {weatherData?.winddirection}° direction.</p>
                        </div>
                    ) : (
                        <p>No data availabe, search for city.</p>
                    )}
                </div>
                <hr />
                <div className="card__content__buttons">
                    <Button>
                        <TbBrandGithub size="1.3rem" />
                        <Link
                            href="https://github.com/janisruduks/weather-app"
                            target="__blank"
                        >
                            Star on GitHub
                        </Link>
                    </Button>
                    <Button>
                        <TbBrandGithub size="1.3rem" />
                        <Link
                            href="https://github.com/janisruduks?tab=repositories"
                            target="__blank"
                        >
                            Checkout other projects
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default Card;
