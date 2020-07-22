var express = require("express");
var router = express.Router();
const http = require('https');

var url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&apiKey=key&number=100';

router.get('/', async (req, res) => {
    http.get(url, function (result) {
        var body = '';

        result.on('data', function (chunk) {
            body += chunk;
        });

        result.on('end', function () {
            var response = JSON.parse(body);
            res.send(response);
        });

    }).on('error', function (e) {
        console.log("Got an error: ", e);
    });
});

module.exports = router;
