var express = require("express");
var app = express();
var { usuario } = require("./models");
var { empresa } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.get("/usuario",async function(req, res){
   var resul = await usuario.findAll(req.body);
  res.json(resul);
});

app.get("/usuario/:id", async function(req, res){
  var mostrar = await usuario.findOne( {where: {id:req.params.id} });
    res.json(mostrar);
});

app.post("/usuario",function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuario/:id", function(req, res){
  var mudar = usuario.update(req.body, {where: {id: req.params.id} });
  res.json(mudar);
});

app.delete("/usuario/:id", function(req, res){
  var deletar = usuario.destroy({where: {id: req.params.id} });
  res.json(deletar);
});


app.get("/empresa",async function(req, res){
   var resul = await empresa.findAll(req.body);
  res.json(resul);
});

app.get("/empresa/:id", async function(req, res){
  var mostrar = await empresa.findOne( {where: {id:req.params.id} });
    res.json(mostrar);
});

app.post("/empresa",function(req, res){
  var resultado = empresa.create(req.body);
  res.json(resultado);
});

app.put("/empresa/:id", function(req, res){
  var mudar = empresa.update(req.body, {where: {id: req.params.id} });
  res.json(mudar);
});

app.delete("/empresa/:id", function(req, res){
  var deletar = empresa.destroy({where: {id: req.params.id} });
  res.json(deletar);
});


app.listen(3000, function(){
  console.log("Eba");
});