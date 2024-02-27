const db = require("./models");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const managerRoutes = require("./routes/manager");
const brunchRoutes = require("./routes/branch");
const accountRoutes = require("./routes/account");
const customerRoutes = require("./routes/customer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/managers", managerRoutes);
app.use("/branches", brunchRoutes);
app.use("/accounts", accountRoutes);
app.use("/customers", customerRoutes);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(8000, () => {
    console.log("server is running on port 8000");
  });
});
