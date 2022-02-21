const express = require("express");

const router = express.Router();

const allPokemon = require("../data");

// Mostra a lista de pokemonst
router.get("/pokemon-list", (req, res) => {
  return res.status(200).json(allPokemon);
});

// Buscar um pokemon especifico pelo ID
router.get("/selected-pokemon/:id", (req, res) => {
  const { id } = req.params;

  const searchSpecificPokemon = allPokemon.find(
    (element) => element.id.toString() === id
  );

  return res.status(200).json(searchSpecificPokemon);
});

// Adiciona um novo Pokemon
router.post("/add-new-pokemon", (req, res) => {
  const idGenerator = Math.floor(Math.random() * (1000 - 2000 + 1) + 2000);

  const newPokemonList = {
    id: idGenerator,
    ...req.body,
  };

  allPokemon.push(newPokemonList);

  console.log(newPokemonList);

  return res.status(201).json(newPokemonList);
});

// Atualiza um Pokemon
router.patch("/edit-pokemon/:id", (req, res) => {
  const { id } = req.params;

  const pokemonEdit = allPokemon.find(
    (element) => element.id.toString() === id
  );

  allPokemon[allPokemon.indexOf(pokemonEdit)] = {
    ...pokemonEdit,
    ...req.body,
  };

  console.log(pokemonEdit);

  return res
    .status(200)
    .json(allPokemon.find((element) => element.id.toString() === id));
});

// Deleta pokemon especifico pelo ID
router.delete("/delete-pokemon/:id", (req, res) => {
  const { id } = req.params;

  const pokemonToDelete = allPokemon.find(
    (element) => element.id === Number(id)
  );

  allPokemon.splice(allPokemon.indexOf(pokemonToDelete), 1);

  return res.status(200).json(pokemonToDelete);
});

module.exports = router;
