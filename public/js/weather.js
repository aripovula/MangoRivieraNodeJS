$(document).ready(function () {


  
  var open = "</span><i style='color:#FF69B4' class='wi ";
  var close = "'></i><span>";
  var context = weatherReport();
  console.log("detailed2 ="+context.detailed);
  console.log("brief2 ="+context.brief);

  // var context = {
  //   "language": "Handlebars",
  //   "detailed": "Wind: 20 mph, Humidity: 78%, Temperature: 84",
  //   "brief": `${open}wi-strong-wind${close} 20 mph, ${open}wi-humidity${close} 78%, ${open}wi-thermometer${close} 84`
  // }

var l1 = `<div class="boxed" data-toggle="tooltip" data-placement="bottom" title=`;
var l2 = `"Miami Beach, Florida, USA\n\n ${context.detailed}&deg;F\nThird line?:`;
var l3 = ` \nUpdated every 30 minutes. Last updated at ____"`;
var l4 = ` >Weather: ${context.brief}&deg;F. more ...`;
var l5 = `</div>`;

var html = l1 + l2 + l3 + l4 + l5;

$("#weather_placeholder").html(html);
});

function weatherReport() {

  var context;

  var apiKey       = 'e2633fdd11698cb204f35a082af5b6b1',
   url          = 'https://api.darksky.net/forecast/',
   lati         = '25.8102247',
   longi        = '-80.2101822',
   api_call     = url + apiKey + "/" + lati + "," + longi + "?extend=hourly&callback=?";



// Call to the DarkSky API to retrieve JSON
$.getJSON(api_call, function(forecast) {

  var open = "</span><i style='color:#FF69B4' class='wi ";
  var close = "'></i><span>";

  context = {
    "language": "Handlebars",
    "detailed": "Wind: 20 mph, Humidity: 78%, Temperature: 84",
    "brief": `${open}wi-strong-wind${close} ${forecast.currently.windSpeed} mph, ${open}wi-humidity${close} ${forecast.currently.humidity}%, ${open}wi-thermometer${close} ${forecast.currently.temperature}`
  }
     console.log('forecast = '+forecast.hourly.data[1].time);
     console.log('forecast = '+forecast.currently.temperature);
     console.log("detailed ="+context.detailed);
     console.log("brief ="+context.brief);
});

  return context;
}
