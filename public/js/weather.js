$(document).ready(function () {

  var open = "</span><i style='color:#FF69B4' class='wi ";
  var close = "'></i><span>";
  var context = {
    "language": "Handlebars",
    "detailed": "Wind: 50 mph, Humidity: 78%, Temperature: 84",
    "brief": `${open}wi-strong-wind${close}: 50 mph, ${open}wi-humidity${close} : 78%, ${open}wi-thermometer${close} 84`
  }

var l1 = `<span><h4 data-toggle="tooltip" data-placement="bottom" title=`;
var l2 = `"Miami Beach, Florida, USA\n\n ${context.detailed}&deg;F\nThird line?:`;
var l3 = ` \nUpdated every 30 minutes. Last updated at ____"`;
var l4 = ` >Weather: ${context.brief}&deg;F. More ...`;
var l5 = `</h4></span>`;

var html = l1 + l2 + l3 + l4 + l5;

$("#weather_placeholder").html(html);
});