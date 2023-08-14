'use client'
import { useState } from 'react';

import Background from "@/components/Background/Background";
import Card from "@/components/card/Card";

export default function Home() {
  const  [cityName, setCityName] = useState('weather app');

  const handleInputData = (city: string) => {
    setCityName(city);
  }

  return (
    <main className='app-wrapper'>
      <Background cityName={cityName} />
      <Card sendCity={handleInputData}/>
    </main>
  )
}
