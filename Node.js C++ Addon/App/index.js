//https://scotch.io/tutorials/use-ejs-to-template-your-node-application
const http = require('http');
var express=require('express');
var app=express();
var fs=require('fs');
const hostname = '127.0.0.1';
const port = 3000;



app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function(req, res) {
    //res.sendFile('App/public/home/home-user-input.html');
    res.sendFile('public/home/home-user-input.html', { root: __dirname });
});
//lkj
app.get('/launch', function(req, res) {
    temp1="chris";
    res.render('launch.ejs',{myVar:temp1});
    console.log("User hit the launch button!");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/*app.get('/myForm', function(req, response) {
   var myText;
   var acceleration = req.query.initial_acceleration;
   var hoverAlt = req.query.initial_hoveringAlt;
   var hoverCount = req.query.hover_count;
   var weight = req.query.initial_weight;

   myText='START\n'+'Acceleration:' + acceleration+"\nHover Altitude:"+hoverAlt+
       "\nHover Time:"+hoverCount+"\nShips weight:"+weight+'\nEND\n';


   fs.appendFile('myData.txt',myText , function (err) {
       if (err) throw err;
       console.log('Updated!');
   });
   fs.readFile('data.json', function (err, data) {
        var json = JSON.parse(data);
        json.push('acceleration: ' + acceleration);

        fs.writeFile("data.json", JSON.stringify(json));
        console.log('Updated!');
    });


});*/

//This has to be last because order matters
app.get('*',function (req,res){

    res.send("ERROR 404");

});