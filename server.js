const express = require("express");
const bodyParser= require("body-parser");
const cors = require("cors");

const app= express();

app.use(cors());
// parse requests of content-type - application/json
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://domaine-a.localhost');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
// parse requests of content type : application/json 
// autrement dit elle transforme tout les données en fichier JSON
app.use(bodyParser.json());

// assure le format urlCode 
app.use(bodyParser.urlencoded({extended:true}));

//Simple ROUTE 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
require("./app/models/model"); 
require("./app/routes/routes")(app);
  
// set port , listen for requests 
app.listen(3000, ()=> {
    console.log("server is running on Port 3000");
})