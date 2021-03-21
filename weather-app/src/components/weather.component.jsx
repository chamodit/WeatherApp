import React from "react";
import "./weather.style.css";

const Weather= (props) => {
    return(

        <div className="container text-light">
            <div className="Card">
                <h1 className="text-white py-3">{props.cityname}</h1>

                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}/>
                </h5>

                {props.celsius?(
                    <h1 className="py-2">{props.celsius}&deg;c</h1>
                ):null}

                {/**Show max and min temp */}
                {minmaxTemp(props.temp_min, props.temp_max)}

                <h4 className="py-3">
                    {props.description.charAt(0).toUpperCase() +
                    props.description.slice(1)}
                </h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max) {
    if(min&&max){
        return(
            <h3>
                <span className="px-4">{min}&deg;c</span>
                <span className="px-4">{max}&deg;c</span>
            </h3>
        );
    }
}

export default Weather;