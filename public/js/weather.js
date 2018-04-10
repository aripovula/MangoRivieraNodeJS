Handlebars.registerPartial("partialTemplate_orAnyNameYouGive", '{{language}} is {{adjective}}. You are reading this article on {{website22}} <a href="/index2.html">otherpage</a>');

var context = {
  "language": "Handlebars",
  "adjective": "awesome"
}

//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(context);
//html = 'My name is Ritesh Kumar . I am a developer.'

$(document.body).append(html);