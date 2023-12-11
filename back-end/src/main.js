const express = require("express");
const app = express();
const cors = require('cors');
const migrations = require("./banco/migrations/migrations");
const rotasUsuario = require("./rotas/usuario-rotas");
const rotasJogo = require("./rotas/jogo-rotas");
const rotasPlataforma = require("./rotas/plataforma-rotas");
const rotasCategoria = require("./rotas/categoria-rotas");

// migrations.init();

app.use(express.json());
app.use(cors());
app.use(rotasUsuario);
app.use(rotasJogo);
app.use(rotasPlataforma);
app.use(rotasCategoria);

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
