import { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    // console.log(country)
    // console.log(country.name.common)
    const {name,flags,area,capital,timezones,population} = country
    // const [timezones[0]] = country
    const [visited,setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className="box">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" srcset="" />
            <h5>Capital: {capital}</h5>
            <h5>Area: {area}</h5>
            <h5>Timezones: {timezones[0]}</h5>
            <p>Population: {population}</p>
            <button onClick={handleVisited}>Visited</button>
            {visited ? "i have visited this country" : "i want to go"}
        </div>
    );
};

export default Country;