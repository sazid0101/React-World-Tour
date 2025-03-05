import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import "./countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

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
            <div className="grid-container">
            {
                countries.map(country => <Country country = {country} handleVisitedCountry = {handleVisitedCountry}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;