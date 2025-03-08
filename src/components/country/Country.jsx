import { useState } from 'react';
import './country.css'
const Country = ({country,  handleVisitedCountry, handleVisitedFlag}) => {
    // console.log(country)
    // console.log(country.name.common)
    const {name,flags,area,capital,timezones,population} = country
    // const [timezones[0]] = country
    const [visited,setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <div className= {`box ${visited ? "visited-container" : "non-visited-container"}`}>
            <h3 style={{color: visited ? "green" : "red"}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" srcset="" />
            <h5>Capital: {capital}</h5>
            <h5>Area: {area}</h5>
            <h5>Timezones: {timezones[0]}</h5>
            <p>Population: {population}</p>
            <button onClick={()=> handleVisitedFlag(country.flags.png)}>flag</button>
            <br />
            <button onClick={handleVisited}>Visited</button> <br />
            {/* <button onClick={() => {handleVisited; handleVisitedCountry(country.name.common)}}>Visited</button> */}
            {visited ? "i have visited this country" : "i want to go"}
            <br />
            <button onClick={() => handleVisitedCountry(country.name.common)}>Mark Visited</button>
        </div>
    );
};

export default Country;