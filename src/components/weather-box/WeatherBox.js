import React from 'react'
import './weather-box.scss'

const WeatherBox = props => {

    return (
        <div className="weather-box" >
            <div className="location" >
                Urubici,BR
            </div>
            <div className="weather-information" >
                <div className="temperature orange " >
                    19<sup>o</sup>
                </div>
                <div className="detais-wrapper" >
                    <div className="info-wrapper" >
                        <div className="info-detail" >
                            <span className="property" >Humidity</span>
                            <span className="value" >75<span className="unity" >%</span></span>
                        </div>
                        <div className="info-detail" >
                            <span className="property" >Pressure</span>
                            <span className="value" >892<span className="unity" >hPa</span></span>
                        </div>
                    </div>
                    <div className="update-time" >
                        Updated at 02:48:27 PM
                    </div>
                </div>
            </div>
        </div>
    )


}

export default WeatherBox