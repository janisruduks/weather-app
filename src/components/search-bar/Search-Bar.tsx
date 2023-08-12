"use client";
import "./styles.css";
import { useState, useRef } from "react";

import Button from "../button/Button";

type SearchBarProps = {
    getCity: (city: string) => void;
};

const SearchBar = ({ getCity }: SearchBarProps) => {
    const [searchCity, setSearchCity] = useState<string>("");

    const sendCity = (city: string) => {
        getCity(city);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCity(e.target.value);
    };

    const onButtonClick = () => {
        sendCity(searchCity);
    };

    return (
        <div>
            <div className="search-bar-wrapper">
                <div className="search-bar-input-container">
                    <input
                        type="text"
                        className="search-bar-input box__shadow"
                        placeholder="Search for city"
                        onChange={onInputChange}
                    />
                    <Button
                        customClass="search-bar-button"
                        onClick={onButtonClick}
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;