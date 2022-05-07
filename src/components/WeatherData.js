import React from "react"

function WeatherData (props) {
    return (
        <>
            <p>
                <span>conditions: </span>
                {props.conditions}
            </p>
            <p>
                <span>time: </span>
                {props.time}
            </p>
        </>
    )
}

export default WeatherData;

// you can only return one top level element from a React component, that's why you need to wrap elements in a div or <> (a fragment)