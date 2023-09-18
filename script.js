
const weatherAPIURL = "https://api.openweathermap.org"
const weatherAPIKey = "e4e71f36d86d2752757d45a1af59f34a"


let searchInput = $("#search-input")
let searchForm = $("#search-form");


function fetchCoord(search){
    let queryURL = `${weatherAPIURL}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherAPIKey}`
    console.log(queryURL);
    fetch(queryURL).then(function(data){
        return data.json()
    }).then(function(response){
        console.log(response);
    })


}

function submitSearchForm(event){



    event.preventDefault();
    let search = searchInput.val().trim()

    fetchCoord(search);

}


searchForm.on("submit", submitSearchForm);










