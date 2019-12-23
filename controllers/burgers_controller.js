var express = require("express");
var db = require("../models");


var router = express.Router();
////////////////////////////////

router.get("/", function (req, res) {
    db.Burger.findAll().then(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
////////////////////////////////


router.post("/api/burgers", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (data) {
        res.json(data);
    });
    
    
})
////////////////////////////////


router.put("/api/burgers/:id", function(req, res) {
  
    db.Burger.update(
        {
            devoured: req.body.devoured
    },
        {
          where: {
            id: req.params.id
          }
        })
        .then(function(dbBurger) {
          res.json(dbBurger);
        });
   

});

////////////////////////////////


router.delete("/api/burgers/:id", function(req, res) {
   

    db.Burger.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbBurgert) {
          res.json(dbBurger);
        });
});

////////////////////////////////


module.exports = router;