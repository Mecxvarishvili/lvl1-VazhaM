import React, { useState } from 'react';

const Modal = (props) => {
    
    const [data, setData] = useState({})

    function getAPi() {
        fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${props.search}&key=f635fd423c694871a7bc42d487175b7d&hours=8`)
        .then(response => response.json())
        .then((weather) => setData(weather))
      }

      useState(() => {
          getAPi()
      })

    const [cl, setCl] = useState('modal-deactive')

    function modalActive() {
        setCl("modal-active")
    }

    function modalDisable() {
        setCl("modal-deactive")
    }

    return (
        <div className="modal">
            <button onClick={modalActive}>Hourly Forecast</button>
            <div className={cl}>
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
                                           <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                           <span>25&#176;C </span>
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