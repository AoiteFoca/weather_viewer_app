import { useState } from 'react';

function Search(props) {

    const [city, setCity] = useState("");

    function searchInput(e) {
        e.preventDefault();
        let currentValue = document.querySelector('input[name=searchInput]').value;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`; //API requisition
        //A mudança da temperastura para Celsius é feita através do parametro units=metric;
        
        fetch(url).then(response => response.json()).then(data => {
            const { main, name, sys, weather } = data;
            if (sys != undefined) { //if the input is a registered city

                if (weather != undefined) {
                    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
                    setCity(`
                    <div class="containerCity">
                    <p>Temperature: ${main.temp} ºC</p>
                    <p>Country: ${sys.country}</p>
                    <p>City: ${name}</p>
                    <p>${weather[0]['description']}</p>
                    <img src="${icon}" />
                    </div>
                    `);
                }
            } else {
                setCity("");
            }
        })
    }

    return (
        <div className='searchWraper'>
            <div className="search">
                <h2>Search the city that you want to know the weather below:</h2>
                <form onSubmit={(e) => searchInput(e)}>
                    <input placeholder={props.placeholder} type="text" name="searchInput" />
                    <input type="submit" value="Search the city!" />
                </form>
            </div>

            {
                (city != "") ?
                    <div dangerouslySetInnerHTML={{ __html: city }} /> :
                    <div style={{textAlign:'center',paddingTop:'10px'}}>Search For Anything</div>
            }
        </div>
    )
}

export default Search;