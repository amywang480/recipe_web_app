var express = require("express");
var router = express.Router();
const http = require('https');
const apiKey = process.env.API_KEY;

router.get('/', async (req, res) => {
    var params = Object.values(req.query);

    var searchIngredients = "";
    var url = "";

    for (var i = 0; i < params.length; i++) {
        searchIngredients += "+" + params[i] + ",";
    }

    searchIngredients = searchIngredients.substring(1, searchIngredients.length - 1);
    console.log("search ", searchIngredients);

    url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
        searchIngredients + "&apiKey=" + apiKey + "&number=50";

    http.get(url, function (result) {
        var body = "";

        result.on("data", function (chunk) {
            body += chunk;
        });

        result.on("end", function () {
            var response = JSON.parse(body);
            res.send(response);
        });

    }).on("error", function (e) {
        console.log("Got an error: ", e);
    });
});

module.exports = router;
