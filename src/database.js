const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

// Local
const sequelize = new Sequelize(
  `postgres://postgres:42875917k@localhost:5432/food`,
  {
    logging: false,
    native: false,
  }
);

//  Deploy
// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false,
//   native: false,
// });

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Modelos
const {Dietas, Recetas} = sequelize.models;

// Relacion de tablas

Dietas.belongsToMany(Recetas, { through: "DietasRecetas" });
Recetas.belongsToMany(Dietas, { through: "DietasRecetas" });



module.exports = { sequelize, ...sequelize.models };

