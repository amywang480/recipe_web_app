var express = require("express");
var router = express.Router();
const http = require('https');
const apiKey = process.env.API_KEY;

router.get('/', async (req, res) => {
    var id = req.query.id;
    var url = "https://api.spoonacular.com/recipes/" + id + "/ingredientWidget.json?apiKey=" + apiKey;

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