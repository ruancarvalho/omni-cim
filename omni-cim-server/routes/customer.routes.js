module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  router.post("/", customers.create);
  router.get("/", customers.findAll);
  // router.get("/:id", customers.findOne);
  // router.put("/:id", customers.update);
  // router.delete("/:id", customers.delete);
  // router.delete("/", customers.deleteAll);

  app.use('/api/customers', router);
};