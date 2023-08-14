"use client";
import { useState } from "react";

import Background from "@/components/Background/Background";
import Card from "@/components/card/Card";
import Header from "@/components/header/Header";

export default function Home() {
    const [cityName, setCityName] = useState("weather app");

    const handleInputData = (city: string) => {
        setCityName(city);
    };

    return (
        <main>
          <div className="app-container">
            <Header />
            <div className="app-wrapper">
                <Background cityName={cityName} />
                <Card sendCity={handleInputData} />
            </div>
          </div>
        </main>
    );
}