const express = require("express");

const PORT = 4000;

// Importing all the pokemon for our data file
const allPokemon = require("./data");

const app = express();
app.use(express.json());

// -- Define your route listeners here! --
const pokemonRouter = require("./routes/pokemon");
app.use("/", pokemonRouter);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
