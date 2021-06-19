import React, { useState } from 'react';


const EightDayForecast = (props) => {
    
    const [data, setData] = useState({})

    function getAPi() {
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${props.search}&key=f635fd423c694871a7bc42d487175b7d&days=8`)
        .then(response => response.json())
        .then((weather) => setData(weather))
      }

      useState(() => {
          getAPi()
      })

      

    return (
        <div className="eightforces">
            <div className="eightday">8-day Forecast</div>
                {(typeof data.data != 'undefined') ?
                <div className="eightresult">
                    {data.data.map(data => {
                        return (
                            <div>
                                <div className="day">{data.datetime}</div>
                                <div className="weather">
                                    <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`}/>
                                    <div>{data.max_temp} / {data.min_temp}&#176;C</div>
                                </div>
                                <div className="dayinfo">{data.weather.description}</div>
                            </div>
                        )
                    })}
                </div>
                : <div className="eightdayload"><div className="lds-facebook"><div></div><div></div><div></div></div></div>
                }
                {/* <div>
                    <div className="day">Sat, Jun 12</div>
                    <div className="weather">
                        <img src="https://library.kissclipart.com/20180927/xze/kissclipart-cloud-icon-clipart-computer-icons-cloud-computing-5d092e503d924f00.png" alt=""/>
                        <span> 23 / 15 &#176;C </span>
                    </div>
                    <div className="dayinfo">scattered clouds</div>
                </div> */}
        </div>
    );
};

export default EightDayForecast;