let url = "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast";

$(document).ready(function(){ 
    GetWeather();
});

function GetWeather(){
    fetch(url)
    .then(response => response.json()) 
    .then(function(data){
        let udata = data.items[0]

        let period1North = `${udata.periods[0].regions.north}`
        let period1South = `${udata.periods[0].regions.south}`
        let period1East = `${udata.periods[0].regions.east}`
        let period1West = `${udata.periods[0].regions.west}`
        let period1Central = `${udata.periods[0].regions.central}`

        let period2North = `${udata.periods[1].regions.north}`
        let period2South = `${udata.periods[1].regions.south}`
        let period2East = `${udata.periods[1].regions.east}`
        let period2West = `${udata.periods[1].regions.west}`
        let period2Central = `${udata.periods[1].regions.central}`

        let period3North = `${udata.periods[2].regions.north}`
        let period3South = `${udata.periods[2].regions.south}`
        let period3East = `${udata.periods[2].regions.east}`
        let period3West = `${udata.periods[2].regions.west}`
        let period3Central = `${udata.periods[2].regions.central}`

        $('#north1').text(`${period1North}`);
        $('#south1').text(`${period1South}`);
        $('#east1').text(`${period1East}`);
        $('#west1').text(`${period1West}`);
        $('#central1').text(`${period1Central}`);

        $('#north2').text(`${period2North}`);
        $('#south2').text(`${period2South}`);
        $('#east2').text(`${period2East}`);
        $('#west2').text(`${period2West}`);
        $('#central2').text(`${period2Central}`);

        $('#north3').text(`${period3North}`);
        $('#south3').text(`${period3South}`);
        $('#east3').text(`${period3East}`);
        $('#west3').text(`${period3West}`);
        $('#central3').text(`${period3Central}`);
    });
}

    
