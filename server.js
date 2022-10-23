const express = require("express")
const app = express()

app.use(express.json());
app.use(express.static("public"));
app.engine("ejs",require("ejs").renderFile);
app.set("view engine","ejs");

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.redirect('/pokemon');
});

const pokemonRouter = require('./routes/pokemon')

app.use('/pokemon', pokemonRouter)

app.listen(3000);