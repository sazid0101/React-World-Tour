import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import "./countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() =>{
        fetch("https://restcountries.com/v3.1/all")
        .then(Response => Response.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = (country) =>{
        // console.log("added")
        // console.log(country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlag = flag =>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Country: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country}</li>)
                    }
                </ul>
            </div>
            <div className="img-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className="grid-container">
            {
                countries.map(country => <Country 
                    country = {country} 
                    handleVisitedCountry = {handleVisitedCountry} 
                    handleVisitedFlag = {handleVisitedFlag}>
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;