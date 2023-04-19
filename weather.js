console.log("Weather");


let weath = require('weather-js');

weath.find({search:'San Francisco, CA', degreetype: 'F'}, function(error, result) {
    if(error)
    {
        console.log(error);
    }

    console.log(JSON.stringify(result, null, 2));
})