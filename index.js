var w;
var input = document.getElementById('input');
var button = document.getElementById('button');



function renderWeather() {
    city = input.value;
    console.log(city);
    weather.getWeather().then (function (result) {


        var weatherInfo = '<div class="box"><img src="http:' + result.current.condition.icon +
            '">' + '<div class="weather"><h1>' + result.current.temp_c + '&degC </h1></div>' +
            '<div class="city"><h1>' + result.location.name + '</h1></div></div>'  ;

        console.log(weatherInfo);
        $('div').html("");
        $('div').append(weatherInfo);















    } )

}



