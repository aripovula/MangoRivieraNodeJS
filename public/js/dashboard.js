
$.get("/dashboard.html", function(data){
    console.log("data="+data);
    Handlebars.registerPartial("dashboard", data);

    var template = $('#dashboard-partial').html();

    var templateScript = Handlebars.compile(template);

    var html = templateScript();

    $("#dashboard_placeholder").html(html);

});