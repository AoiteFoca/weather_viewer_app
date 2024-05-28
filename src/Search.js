function Search(props){

    function searchInput(e) {
        e.preventDefault();
        let currentValue = document.querySelector('input[name=searchInput]').value;
        /*
        Requisição API
        */
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&APPID=${process.env.REACT_APP_API_KEY}`; //API requisition
        fetch(url).then(response => response.json()).then(data => {
            const { main, name, sys, weather } = data;
            if (sys != undefined) //if the input is a registered city
                console.log(sys.country);
            if (weather != undefined)
                console.log(weather[0]['description']);
        })
    }

    return(
        <div className="search">
            <h2>Search the city that you want to know the weather below:</h2>
            <form onSubmit={(e) => searchInput(e)}>
                <input placeholder={props.placeholder} type="text" name="searchInput" />
                <input type="submit" value="Search the city!" />
            </form>
        </div>
    )
}

export default Search;