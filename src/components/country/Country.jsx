const Country = ({country}) => {
    // console.log(country)
    // console.log(country.name.common)
    const {name} = country
    return (
        <div>
            <h4>Name:  {name.common}</h4>
        </div>
    );
};

export default Country;