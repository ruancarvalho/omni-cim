
const model = require("../models");
const Customer = model.Customer;
const Op = model.Sequelize.Op;

/**
 * Create and Save a new Customer data
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const newCustomer = {
    name: req.body.name,
  };

  Customer.create(newCustomer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    });
};

/**
 * Gets all customers
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = (req, res) => {
  Customer.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};