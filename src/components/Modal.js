import React, { useState } from 'react';
import Api_Key from './Api_Key';

const Modal = (props) => {
    
    const [data, setData] = useState({})

    function getAPi() {
        fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${props.search}&key=${ Api_Key}&hours=8`)
        .then(response => response.json())
        .then((weather) => setData(weather))
      }

      useState(() => {
          getAPi()
      })

    const [clas, setClas] = useState('modal-deactive')

    function modalActive() {
        setClas("modal-active")
    }

    function modalDisable() {
        setClas("modal-deactive")
    }

    return (
        <div className="modal">
            <button onClick={modalActive}>Hourly Forecast</button>
            <div className={clas}>
                <div className="modal-container">
                    <div className="mheader">
                        <div>Hourly Forecas</div>
                        <button onClick={modalDisable}>&#10006;</button>
                    </div>
                        {(typeof data.data != 'undefined') ?
                        <div className="mfooter">
                            {data.data.map(data => {
                                return (
                                    <div>
                                       <div className="day">{data.datetime}</div>
                                       <div className="weather">
                                           <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt=""/>
                                           <span>{data.temp}&#176;C </span>
                                       </div>
                                       <div className="dayinfo">{data.weather.description}</div>
                                   </div>
                                )
                            })}
                        </div>
                        : <div className="lds-facebook"><div></div><div></div><div></div></div>
                        }
                    
                    {/* 
                    <div className="mfooter">
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                    </div>  */}
                </div>
            </div>
        </div>
    );
};

export default Modal;