const express = require('express');
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const port = 3000;

app.post('/utilisateur/add', (req, res) => {

	let id = uuidv4();

	let usersjson = fs.readFileSync("users.json","utf-8");
	let users = JSON.parse(usersjson);
	
	let user = {
		"token": id,
		"nom": req.query.nom,
		"prenom": req.query.prenom,
		"role": req.query.role,
		"created_at": Date.now(),
		"updated_at": Date.now()
	}

	users.users.push(user);
	usersjson = JSON.stringify(users);
	fs.writeFileSync("users.json",usersjson,"utf-8");
	res.send('Utilisateur ajouté')
})

app.put('/utilisateur/update', (req, res) => {


  let usersjson = fs.readFileSync("users.json","utf-8");
  let users = JSON.parse(usersjson);

  const index = users.users.findIndex((el) => el.token === req.query.token)
  users.users[index].nom = req.query.nom;
  users.users[index].prenom = req.query.prenom;
  users.users[index].role = req.query.role;
  users.users[index].updated_at = Date.now();

  usersjson = JSON.stringify(users);
  fs.writeFileSync("users.json",usersjson,"utf-8");

  res.send('Utilisateur modifié')
})

app.delete('/utilisateur/delete', (req, res) => {


  let usersjson = fs.readFileSync("users.json","utf-8");
  let users = JSON.parse(usersjson);

  const index = users.users.findIndex((el) => el.token === req.query.token)
  users.users.splice(index, 1);

  usersjson = JSON.stringify(users);
  fs.writeFileSync("users.json",usersjson,"utf-8");

  res.send('Utilisateur supprimé')
})

app.get('/utilisateur/get', (req, res) => {


  let usersjson = fs.readFileSync("users.json","utf-8");

  res.send(usersjson)
})

app.post('/produit/add', (req, res) => {
	let id = uuidv4();

	let produitsjson = fs.readFileSync("produits.json","utf-8");
	let produits = JSON.parse(produitsjson);

  let produit = {
    "token": id,
    "nom": req.query.nom,
    "description": req.query.description,
    "prix": req.query.prix,
    "stock": req.query.stock,
    "reference": req.query.reference,
    "created_at": Date.now(),
    "updated_at": Date.now()
  }

  produits.produits.push(produit);
  produitsjson = JSON.stringify(produits);
  fs.writeFileSync("produits.json",produitsjson,"utf-8");
  res.send('Produit ajouté')
})

app.put('/produit/update', (req, res) => {

  let produitsjson = fs.readFileSync("produits.json","utf-8");
  let produits = JSON.parse(produitsjson);

  const index = produits.produits.findIndex((el) => el.token === req.query.token)
  produits.produits[index].nom = req.query.nom;
  produits.produits[index].description = req.query.description;
  produits.produits[index].prix = req.query.prix;
  produits.produits[index].stock = req.query.stock;
  produits.produits[index].reference = req.query.reference;
  produits.produits[index].updated_at = Date.now();

  produitsjson = JSON.stringify(produits);
  fs.writeFileSync("produits.json",produitsjson,"utf-8");

  res.send('Produit modifié')
})

app.delete('/produit/delete', (req, res) => {

  let produitsjson = fs.readFileSync("produits.json","utf-8");
  let produits = JSON.parse(produitsjson);

  const index = produits.produits.findIndex((el) => el.token === req.query.token)

  produits.produits.splice(index, 1);
  produitsjson = JSON.stringify(produits);
  fs.writeFileSync("produits.json",produitsjson,"utf-8");

  res.send('Produit supprimé')
})

app.get('/produit/get', (req, res) => {


  let produitsjson = fs.readFileSync("produits.json","utf-8");

  res.send(produitsjson)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})