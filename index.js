const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");
const fs = require("fs");
const methodOverride = require('method-override')


//middleware
app.set("view engine", "ejs");
app.use(ejsLayouts);
//body-parser middleware
//mmakes req.body work
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

app.use('/dinosaurs', require('./controllers/dinosaurs.js'))
app.use('/prehistoric_creatures', require('./controllers/prehistoric_creatures.js'))

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// //Index Route
// //GET route index(READ)
// app.get("/dinosaurs", (req, res) => {
//   let dinosaurs = fs.readFileSync("./dinosaurs.json");
//   let dinoData = JSON.parse(dinosaurs);
//   res.render("index.ejs", { dinoData });
// });

// //NEW ROUTE
// app.get("/dinosaurs/new", (req, res) => {
//   res.render("new.ejs");
// });

// //SHOW ROUTE
// app.get("/dinosaurs/:idx", (req, res) => {
//   //get dinosaurs array
//   let dinosaurs = fs.readFileSync("./dinosaurs.json");
//   let dinoData = JSON.parse(dinosaurs);
//   //get array index fromm url parameter
//   let dinoIndex = parseInt(req.params.idx);
//   res.render("show.ejs", { myDino: dinoData[dinoIndex] });

//   // console.log(dinoData[dinoIndex])
// });

// // POST A NEW DINO
// app.post("/dinosaurs", (req, res) => {
//   //get dinosaurs array
//   let dinosaurs = fs.readFileSync("./dinosaurs.json");
//   let dinoData = JSON.parse(dinosaurs);

//   //add new dino to dinoData
//   dinoData.push(req.body);

//   //save updated dinoData to json
//   fs.writeFileSync("./dinosaurs.json", JSON.stringify(dinoData));

//   //redirect to GET /dinosaurs (index)
//   res.redirect("/dinosaurs");
// });

// app.get("/prehistoric_creatures", (req, res) => {
//   let oldDinos = fs.readFileSync("./prehistoric_creatures.json");
//   let olderDinoData = JSON.parse(oldDinos);
//   res.render("oldIndex.ejs", { olderDinoData: olderDinoData });
// });

// app.get("/prehistoric_creatures/new", (req, res) => {
//   res.render("old.ejs");
// });

// app.get("/prehistoric_creatures/:idx", (req, res) => {
//     //get dinosaurs array
//     let oldDinos = fs.readFileSync("./prehistoric_creatures.json");
//     let olderDinoData = JSON.parse(oldDinos);
//     //get array index fromm url parameter
//     let olderDinoIndex = parseInt(req.params.idx);
//     res.render("oldShow.ejs", { myOlderDino: olderDinoData[olderDinoIndex] });
  
//   });

// // POST A NEW DINO
// app.post("/prehistoric_creatures", (req, res) => {
//     //get dinosaurs array
//     let oldDinos = fs.readFileSync("./prehistoric_creatures.json");
//     let olderDinoData = JSON.parse(oldDinos);
  
//     //add new dino to dinoData
//     olderDinoData.push(req.body);
  
//     //save updated dinoData to json
//     fs.writeFileSync("./prehistoric_creatures.json", JSON.stringify(olderDinoData));
  
//     //redirect to GET /dinosaurs (index)
//     res.redirect("/prehistoric_creatures");
//   });

app.listen(8000, () => {
  console.log("Fridays music");
});
