let url = "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast";

fetch(url)
.then(response => response.json()) 
.then(function(data){
    let udata = data.results[0];

    let period1 = `${udata.periods[0].time}`;
    let period2 = `${udata.periods[1].time}`;
    let period3 = `${udata.periods[2].time}`;
    let region1 = `${udata.periods[0].regions}`;
    let region2 = `${udata.periods[1].regions}`;
    let region3 = `${udata.periods[2].regions}`;

    
});
    

