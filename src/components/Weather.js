import React from 'react';
import Modal from './Modal';

const Weather = () => {
    return (
        <div className="mweather">
            <div className="clock">12:44pm, Jun 12</div>
            <div className="cityname">London, GB</div>
            <div className="degrees">
                <img src="https://img.pngio.com/cloud-sun-sunny-weather-icon-weather-icons-png-512_512.png" alt=""/>
                <div> 22&#176;C</div>
            </div>
            <div className="about">Feels Like 21&#176;C. Few clouds. Light air</div>
            <Modal />
        </div>
    );
};

export default Weather;