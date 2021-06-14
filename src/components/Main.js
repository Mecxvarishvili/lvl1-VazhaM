import React from 'react';
import EightDayForecast from './EightDayForecast';
import Weather from './Weather';

const Main = () => {
    return (
        <main>
        <Weather />
        <EightDayForecast />
        </main>
    );
};

export default Main;