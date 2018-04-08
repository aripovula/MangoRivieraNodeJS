var menuline1a = '<img src="/static/images/menu.jpg" alt="Mango Riviera Resort">';
var menuline1b = '<div><span style="font-size:26px; font-family: Chalkduster, Helvetica, sans-serif;"> Welcome to Mango Riviera</span> ';
var menuline1c = '<img style="max-width:50px;" src="/static/images/sun.png" alt="logo"> &nbsp;&nbsp;&nbsp;';
var menuline2a = '<span><a class="lists" href="#" data-toggle="tooltip" data-placement="bottom" title="Palm Bay, Florida, USA\n {{currentpage}}&deg;F\nThird line?">{{currentpage}}&deg;F: details ?</a>&nbsp;&nbsp;&nbsp;</span>';
var menuline2b = '<a class="lists" href="/about.hbs">&nbsp About</a> &nbsp &nbsp <a class="lists" href="/index3.html">Virtual tour</a></div>';

Handlebars.registerPartial("partialTemplate_MENU", menuline1a + menuline1b + menuline1c + menuline2a + menuline2b);

var template = $('#menu_partial_template').html();

var templateScript = Handlebars.compile(template);

var htmlMenu = templateScript();

$("#menu_placeholder").html(htmlMenu);
