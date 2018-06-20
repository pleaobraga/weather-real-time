import React from 'react'
import './weather-box.scss'

const WeatherBox = props => {

    return (
        <div className="weather-box" >
            <div className="location" >
                Urubici,BR
            </div>
            <div className="weather-information" >
                <div className="temperature" >
                    19
                </div>
                <div className="detais-wrapper" >
                    <div className="info-wrapper" >
                        <div className="info-detail" >
                            Humidity
                            75%
                        </div>
                        <div className="info-detail" >
                            Pressure
                            892hPa
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