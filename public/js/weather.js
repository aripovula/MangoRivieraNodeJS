$(document).ready(function () {
  
  var context;
  var apiReadTime;
  let myPromise = new Promise((resolve, reject) => {
    console.log("in promise =");

    var apiKey       = 'e2633fdd11698cb204f35a082af5b6b1',
    url          = 'https://api.darksky.net/forecast/',
    locationData         = '25.8102247,-80.2101822',
    api_call = url + apiKey + "/" + locationData + "?extend=hourly&callback=?";
 
    // Call to the DarkSky API to retrieve JSON
    $.getJSON(api_call, function(forecast) {
    
      var open = "</span><i style='color:#FF69B4' class='wi ";
      var close = "'></i><span>";
    
      var forDetailed="";
      forDetailed = forDetailed + `Currently - &nbsp; &nbsp; &nbsp; ${forecast.currently.summary}&nbsp; &nbsp; &nbsp;  Temp.: ${forecast.currently.temperature} &nbsp; &nbsp; &nbsp;Feels like ${forecast.currently.apparentTemperature}&nbsp; &nbsp; &nbsp; Wind: ${forecast.currently.windSpeed} mph &nbsp; &nbsp; &nbsp;Humidity: ${forecast.currently.humidity} &nbsp; &nbsp; &nbsp;uv-Index: ${forecast.currently.uvIndex}\n`;  
      forDetailed = forDetailed + "\n";
      
      for(var i = 1; i < 6; i++) {
        forDetailed = forDetailed + `In ${i} hour(s) - &nbsp; &nbsp; &nbsp; ${forecast.hourly.data[i].summary}&nbsp; &nbsp; &nbsp;  Temp.: ${forecast.hourly.data[i].temperature} &nbsp; &nbsp; &nbsp;Feels like ${forecast.hourly.data[i].apparentTemperature}&nbsp; &nbsp; &nbsp; Wind: ${forecast.hourly.data[i].windSpeed} mph&nbsp; &nbsp; &nbsp; Humidity: ${forecast.hourly.data[i].humidity}&nbsp; &nbsp; &nbsp; uv-Index: ${forecast.hourly.data[i].uvIndex}\n`;  
        forDetailed = forDetailed + "\n";
      }
      
      for(var i = 1; i < 3; i++) {
        forDetailed = forDetailed + `In ${i} day(s) - &nbsp; &nbsp; &nbsp; ${forecast.daily.data[i].summary}&nbsp; &nbsp; &nbsp;  High: ${forecast.daily.data[i].temperatureHigh}&nbsp; &nbsp; &nbsp; Low ${forecast.daily.data[i].temperatureLow}&nbsp; &nbsp; &nbsp; Wind: ${forecast.daily.data[i].windSpeed} mph &nbsp; &nbsp; &nbsp;Humidity: ${forecast.daily.data[i].humidity}&nbsp; &nbsp; &nbsp;uv-Index: ${forecast.daily.data[i].uvIndex}\n`;  
        forDetailed = forDetailed + "\n";
      }

      context = {
        "detailed": forDetailed,
        "brief": `${open}wi-thermometer${close} ${forecast.currently.temperature}, ${open}wi-strong-wind${close} ${forecast.currently.windSpeed} mph, ${open}wi-humidity${close} ${forecast.currently.humidity}`
      }

      var dt = new Date($.now());;
      apiReadTime = dt.getHours() + ":" + dt.getMinutes();
      console.log("apiReadTime =" + apiReadTime);
      resolve("Success!"); 
    
    });
    
  });

  myPromise.then((successMessage) => {

    //console.log("detailed2 ="+context.detailed);
    //console.log("brief2 ="+context.brief);

    // var context = {
    //   "language": "Handlebars",
    //   "detailed": "Wind: 20 mph, Humidity: 78%, Temperature: 84",
    //   "brief": `${open}wi-strong-wind${close} 20 mph, ${open}wi-humidity${close} 78%, ${open}wi-thermometer${close} 84`
    // }

    var l1 = `<div class="boxed" data-toggle="tooltip" data-placement="bottom" title=`;
    var l2 = `"Miami Beach, Florida, USA\n\n ${context.detailed}`;
    var l3 = ` \nUpdated every 30 minutes. Last updated at ${apiReadTime}"`;
    var l4 = ` >Weather: ${context.brief}&deg;F. more ...`;
    var l5 = `</div>`;

    var html = l1 + l2 + l3 + l4 + l5;
    console.log("apiReadTime2 =" + apiReadTime);
    //console.log("html ="+html);
    $("#weather_placeholder").html(html);
    $('[data-toggle="tooltip"]').tooltip();
    //console.log("after HTML");
  });
});


