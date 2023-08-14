export type SearchBarProps = {
    getCity: (city: string) => void;
    shake?: boolean;
};

export type CityResult = {
    results: City[];
};

export type City = {
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    country_code: string;
    timezone: string;
    population: number;
    id: number;
};

export type CurrentWeather = {
    current_weather: Weather;
};

export type Weather = {
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: boolean;
    time: string;
};

export type CardProps = {
    sendCity: (city: string) => void;
};

export type BackgroundProps = {
    cityName?: string;
};

export type ButtonProps = {
    children?: React.ReactNode;
    type?: "primary" | "regular";
    onClick?: () => void;
    customClass?: string;
};

export type ToggleButtonProps = {
    text: string | undefined | number;
    children: React.ReactNode;
    enable?: boolean;
};
