var express =require("express");
var app =express();

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>company has 12 offices</li>"+
                    " <li>it is a multinational company</li>"+
                    " <li>do join</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
