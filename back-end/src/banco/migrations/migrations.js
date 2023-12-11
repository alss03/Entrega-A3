const sqlite3 = require("sqlite3");
const execute = require("../connection").queryExecutar;

const databaseFile = "./backend.db";

async function runMigration(db, migration) {
  return new Promise((resolve, reject) => {
    db.run(migration, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

const inserts = [
  `
    INSERT OR IGNORE INTO  usuario (id, usuario, nome, email, senha) VALUES
    (1, 'user1', "teste", 'user1@gmail.com', '123123'),
    (2, 'user2', "teste", 'user2@gmail.com', '123123'),
    (3, 'user3', "teste", 'user3@gmail.com', '123123'),
    (4, 'user4', "teste", 'user4@gmail.com', '123123'),
    (5, 'user5', "teste", 'user5@gmail.com', '123123'),
    (6, 'user6', "teste", 'user6@gmail.com', '123123'),
    (7, 'user7', "teste", 'user7@gmail.com', '123123'),
    (8, 'user8', "teste", 'user8@gmail.com', '123123'),
    (9, 'user9', "teste", 'user9@gmail.com', '123123'),
    (10, 'user10', "teste", 'user10@gmail.com', '123123');
  `,
  `
    INSERT OR IGNORE INTO  plataforma (id, nome, descricao)
    VALUES
    (1, "Steam", "descricao_teste"),
    (2, "Origin", "descricao_teste"),
    (3, "Epic Games", "descricao_teste"),
    (4, "Battle.net", "descricao_teste"),
    (5, "Uplay", "descricao_teste"),
    (6, "GOG", "descricao_teste"),
    (7, "Xbox", "descricao_teste"),
    (8, "PlayStation", "descricao_teste"),
    (9, "Nintendo", "descricao_teste"),
    (10, "Mobile", "descricao_teste"),
    (11, "Web", "descricao_teste"),
    (12, "Other", "descricao_teste");
  `,
  `
    INSERT OR IGNORE INTO  jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES
    (1,"The Witcher 3: Wild Hunt", "RPG", 5, 1, 1),
    (2,"The Elder Scrolls V: Skyrim", "RPG", 5, 2, 2),
    (3,"Grand Theft Auto V", "Action", 5, 3, 3),
    (4,"The Witcher 2: Assassins of Kings", "RPG", 5, 4, 4),
    (5,"The Witcher", "RPG",5, 5, 5),
    (6,"The Elder Scrolls IV: Oblivion", "RPG", 4, 6, 6),
    (7,"The Elder Scrolls III: Morrowind", "RPG", 3, 6, 7),
    (8,"Grand Theft Auto: San Andreas", "Action", 2, 7, 8),
    (9,"Grand Theft Auto: Vice City", "Action",5, 7, 9),
    (10,"Grand Theft Auto III", "Action",5, 7, 10);
  `,
  `
    INSERT OR IGNORE INTO categoria (id, nome) VALUES
    (1,  "RPG"),
    (2,  "Ação"),
    (3,  "Jogando"),
    (4,  "Zerado"),
    (5, "RPG"),
    (6, "Tiro em primeira pessoa"),
    (7,  "Terror");
  `,
];

async function insertData() {
  try {
    for (let q of inserts) {
      await execute(q);
    }

    for (let q of inserts) {
      await execute(q);
      console.log("inserção concluída:", q);
    }
  } catch (e) {
    console.log("Failed to insert fixtures. Probably already inserted.");
  }
}

const migrations = [
  `CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario VARCHAR(12) NOT NULL,
    email VARCHAR(120) NOT NULL,
    senha VARCHAR(120) NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS plataforma (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(32) NOT NULL,
    descricao TEXT
  )`,
  `CREATE TABLE IF NOT EXISTS categoria (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(32) NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS jogo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(60) NOT NULL,
    descricao TEXT,
    nota INT NOT NULL,
    fk_plataforma INTEGER NOT NULL,
    fk_usuario INTEGER NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_plataforma) REFERENCES plataforma(id)
  )`,
  `CREATE TABLE IF NOT EXISTS jogo_categoria (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fk_jogo INTEGER NOT NULL,
    fk_categoria INTEGER NOT NULL,
    FOREIGN KEY (fk_jogo) REFERENCES jogo(id),
    FOREIGN KEY (fk_categoria) REFERENCES categoria(id)
  )`,
];

async function runMigrations() {
  const db = new sqlite3.Database(databaseFile);

  try {
    for (const migration of migrations) {
      await runMigration(db, migration);
      console.log("Migração concluída:", migration);
    }
  } catch (error) {
    console.error("Erro ao executar migração:", error);
  } finally {
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Conexão com o banco de dados fechada");
    });
  }
}


async function init() {
  try {
    await runMigrations();
    await insertData();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { init };
