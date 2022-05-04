var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.get("/",async function(req, res){
   var resul = await usuario.findAll(req.body);
  res.json(resul);
});

app.get("/:id", async function(req, res){
  var mostrar = await usuario.findOne( {where: {id:req.params.id} });
    res.json(mostrar);
});

app.post("/",function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", function(req, res){
  var mudar = usuario.update(req.body, {where: {id: req.params.id} });
  res.json(mudar)
});

app.delete("/:id", function(req, res){
  var deletar = usuario.destroy({where: {id: req.params.id} })
  res.json(deletar)
});

app
app.listen(3000, function(){
  console.log("Eba")
});