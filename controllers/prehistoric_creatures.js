const express = require('express')
const router = express.Router();
const fs = require('fs');
const { route } = require('./dinosaurs');

router.get("/", (req, res) => {
    let oldDinos = fs.readFileSync("./prehistoric_creatures.json");
    let olderDinoData = JSON.parse(oldDinos);
    res.render("prehistoric_creatures/oldIndex.ejs", { olderDinoData: olderDinoData });
  });


//old.ejs Route
router.get("/old", (req, res) => {
    res.render("prehistoric_creatures/old.ejs");
});

//GET UPDATE FORM
router.get('/edit/:idx', (req, res) => {
    let oldDinos = fs.readFileSync("./prehistoric_creatures.json");
    let olderDinoData = JSON.parse(oldDinos)

    res.render('prehistoric_creatures/edit.ejs', {creatureId: req.params.idx, creature: olderDinoData[req.params.idx]})
})

//UPDATE A CREATURE

 //Oldshow ROUTE 
router.get("/:idx", (req, res) => {
      //get dinosaurs array
      let oldDinos = fs.readFileSync("./prehistoric_creatures.json");
      let olderDinoData = JSON.parse(oldDinos);
      //get array index fromm url parameter
      let olderDinoIndex = parseInt(req.params.idx);
      res.render("prehistoric_creatures/oldShow.ejs", { myOlderDino: olderDinoData[olderDinoIndex] });
    
    });
  
  // POST A NEW DINO
  router.post("/", (req, res) => {
      //get dinosaurs array
      let oldDinos = fs.readFileSync("./prehistoric_creatures.json");
      let olderDinoData = JSON.parse(oldDinos);
    
      //add new dino to dinoData
      olderDinoData.push(req.body);
    
      //save updated dinoData to json
      fs.writeFileSync("./prehistoric_creatures.json", JSON.stringify(olderDinoData));
    
      //redirect to GET /dinosaurs (index)
      res.redirect("/prehistoric_creatures");
    });

    router.delete('/:idx', (req, res) => {
        let oldDinos = fs.readFileSync("./prehistoric_creatures.json");
        let olderDinoData = JSON.parse(oldDinos);

        //remove the deleted creature from the creature array
        olderDinoData.splice(req.params.idx, 1)

        //save the new dinosaurs to the json file
        fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(olderDinoData))

        res.redirect('/prehistoric_creatures')
    })



module.exports = router