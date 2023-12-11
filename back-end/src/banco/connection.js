const sqlite3 = require("sqlite3");

const databaseInstance = new sqlite3.Database("./backend.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Conexão com o banco de dados SQLite estabelecida");
  }
});

async function queryExecutar(query, params = []) {
  return new Promise((resolve, reject) => {
    databaseInstance.run(query, params, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

async function queryBuscarVarios(query, params = []) {
  return new Promise((resolve, reject) => {
    databaseInstance.all(query, params, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

async function queryBuscarUm(query, params = []) {
  return new Promise((resolve, reject) => {
    databaseInstance.get(query, params, (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(row);
    });
  });
}

module.exports = { queryExecutar, queryBuscarUm, queryBuscarVarios };
