const express = require("express");
require("./db");
const app = express();
const expEjsLayouts = require("express-ejs-layouts");
const PatientRoute = require("./router/patient.routes");


app.use(express.static(__dirname+'/public'))
app.use(expEjsLayouts);
app.set('layout', './layouts/layout');
app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended : false}))  
app.use(express.json());


app.get("/", (req, res) => {
    res.render("home")
})

app.use("/patient", PatientRoute)



const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log("Server started at PORT : " , PORT))