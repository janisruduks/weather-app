"use client";
import "./styles.css";

import { useState } from "react";

import Button from "../button/Button";

type SearchBarProps = {
    getCity: (city: string) => void;
    shake?: boolean;
};

const SearchBar = ({ getCity, shake }: SearchBarProps) => {
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            sendCity(searchCity);
        }
    }

    return (
        <div>
            <div className={`search-bar-wrapper ${shake ? ' shake-element' : ''}`} >
                <div className="search-bar-input-container">
                    <input
                        type="text"
                        className="search-bar-input"
                        placeholder="Search for city"
                        onChange={onInputChange}
                        onKeyDown={handleKeyDown}
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