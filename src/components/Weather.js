import React from 'react';
import Modal from './Modal';

const Weather = (props) => {
    const data = props.data[0]
    return (
        <div className="mweather">
            <div className="clock">{data.ob_time}</div>
            <div className="cityname">{data.city_name}, {data.country_code}</div>
            <div className="degrees">
                <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} />
                <div> {data.temp}&#176;C</div>
            </div>
            <div className="feelslike">Feels Like {data.app_temp}&#176;C. {data.weather.description}.</div>
            <div className="about">
                <div>{data.wind_spd}m/s {data.wind_cdir}</div>
                <div>Humidity: {data.rh}%</div>
                <div>UV: {data.uv}</div>
                <div>Dew Point: {data.dewpt}</div>
                <div>Visibility: {data.vis}km</div>
            </div>
            <Modal search={props.search}/>
        </div>
    );
};

export default Weather;