import React, { useState } from 'react';

const Modal = () => {
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
                        <div>Sunday, June 13</div>
                        <button onClick={modalDisable}>&#10006;</button>
                    </div>
                    <div className="mfooter">
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                         <div>
                            <div className="day">2PM</div>
                            <div className="weather">
                                <img src="https://img.icons8.com/emoji/452/sun-emoji.png" alt=""/>
                                <span>25&#176;C </span>
                            </div>
                            <div className="dayinfo">Clear sky</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Modal;