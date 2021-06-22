import React from 'react';
import Error from './Error';

const Main = (props) => {
    const data = props.data
    return (
        <Error data={props.error}>
            <div className="cont">
                {data.map((data, index) => {
                    return (
                    <div className="box" key={index}>
                        <div className="inbox">
                            <img src={data.artworkUrl100} alt="" />
                            <div className="about">
                                <div className="track">{data.trackName}</div>
                                <div className="artist">{data.artistName}</div>
                            </div>
                        </div>
                        <audio controls src={data.previewUrl}></audio>
                    </div>
                    )
                })}
            </div>
        </Error>
    );
};

export default Main;