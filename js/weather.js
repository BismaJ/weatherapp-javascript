function getweather(){
    var city = document.getElementById("search").value;
    var units = document.getElementById("units").value;
    var key = "e5b070eeadc692d15fa76c9a870c1475";

    fetch("http://api.weatherstack.com/current?access_key="+key+"&query="+city+"&units="+units)
    .then(a => a.json())
    .then(response => {
        document.getElementById("image").src=response.current.weather_icons[0];
        document.getElementById("output").innerHTML = "<h2>"+response.current.weather_descriptions[0]+"</h2>Temperature:"+response.current.temperature+"<br>Feels like: "+response.current.feelslike+"<br>UV index: "+response.current.uv_index+"<br>Humidity: "+response.current.humidity+"<br>Cloud cover: "+response.current.cloudcover;

        document.getElementById("standard-weather").style.display = "none"
    })
}
