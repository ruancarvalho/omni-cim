const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

const db = require("./models");
// db.sequelize.sync();

// Use only if needed
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Simple endpoint to test
 */
app.get("/", (req, res) => {
  res.json({ message: "OmniCIM Server" });
});

/**
 * Application Endpoints
 */
require("./routes/customer.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Omni CIM Server is running on port ${PORT}.`);
});