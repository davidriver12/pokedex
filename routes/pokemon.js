const express = require('express')
const router = express.Router()
const https = require("https");
const ColorThief = require('colorthief');

router.use(express.json());
router.use(express.static("public"));

/*
router.get('/', (req, res) => {
    var allPokemonList = [];
    for (let x = 1; x<=151; x++){
        var options = {
            "method": "GET",
            "hostname": "pokeapi.co",
            "port": null,
            "path": `/api/v2/pokemon/${x}`,
            "headers": {}
        };
        https.get(options, (response) => {
            if (response.statusCode == 200) {
                var chunks = [];
                response
                    .on("data", (chunk) => {
                        chunks.push(chunk);
                    })
                    .on("end", function(){
                        var body = Buffer.concat(chunks);
                        var singlePokemonObject = JSON.parse(body);
                        allPokemonList.push(singlePokemonObject);
                        console.log(allPokemonList);
                    })
                    .on("error",(e) => {
                        response.write("Error on process");
                        console.log(`Error ${e.message}`);
                    });
                } else {
                    res.write("Connection failed");
                    res.send();
                }
        })
    }
})
*/

router.get('/', (req, res) => {
    var allPokemonList = [];
    for (let x = 1; x<=151; x++){
        allPokemonList.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${x}.png`)
    }
    res.render("index", {allPokemonList});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    var options = {
        "method": "GET",
        "hostname": "pokeapi.co",
        "port": null,
        "path": `/api/v2/pokemon/${id}`,
        "headers": {}
    };
    
    https.get(options, (response) => {
        if (response.statusCode == 200) {
            var chunks = [];
            response
                .on("data", (chunk) => {
                    chunks.push(chunk);
                })
                .on("end", function(){
                    var body = Buffer.concat(chunks);
                    var pokemonObject = JSON.parse(body);
                    if (pokemonObject.abilities.length == 0){
                        pokemonObject.abilities[0] = {"ability" : { "name": "None"}}
                        pokemonObject.abilities[1] = {"ability" : { "name": "None"}}
                    } else if(pokemonObject.abilities.length == 1) {
                        pokemonObject.abilities[1] = {"ability" : { "name": "None"}}
                    }
                    pokemonObject.typeImg1 = "../images/types/" + pokemonObject.types[0].type.name + ".png";
                    if(pokemonObject.types.length >1 ){
                        pokemonObject.typeImg2 = "../images/types/" + pokemonObject.types[1].type.name + ".png";
                    } else {
                        pokemonObject.types[1] = { "type" : { "name" : "none"}};
                        pokemonObject.typeImg2 = "../images/types/" + pokemonObject.types[1].type.name + ".png";
                    }
                    const sprite = pokemonObject.sprites.other["official-artwork"].front_default;
                    ColorThief.getColor(sprite)
                        //.then(color => {console.log([`rgb(${color[0]},${color[1]}, ${color[2]}`])})
                        .then(color => { pokemonObject.color = `background-color: rgb(${color[0]},${color[1]}, ${color[2]})`; /*console.log(pokemonObject.color)*/ })
                        .catch(err => { console.log(err) })
                    //console.log(JSON.parse(body));
                    res.render("pokemon", {pokemonObject});
                })
                .on("error",(e) => {
                    response.write("Error on process");
                    console.log(`Error ${e.message}`);
                });
            } else {
                res.write("Connection failed");
                res.send();
            }
    })
})

module.exports = router;