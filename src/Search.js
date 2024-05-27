function Search(props){

    function searchInput(){
        let currentValue = document.querySelector('input[name=searchInput]').value;
        /*
        Requisição API
        */
    }

    return(
        <div className="search">
            <h2>Search the city that you want to know the weather below:</h2>
            <input placeholder={props.placeholder} onKeyUp={searchInput} type="text" name="searchInput"/>
        </div>        
    )
}

export default Search;