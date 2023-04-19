console.log("Weather");


let weath = require('weather-js');

let myWeath;

weath.find({search:'San Francisco, CA', degreetype: 'F'}, function(error, result) {
    if(error)
    {
        console.log(error);
    }
    console.log("Température : ", result[0].current['temperature'] + "\nEtat du ciel : " + result[0].current['skytext']);
});