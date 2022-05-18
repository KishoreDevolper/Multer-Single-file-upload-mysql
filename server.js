const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/web");
global.__basedir = __dirname;
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
db.sequelize.sync();
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});
let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});