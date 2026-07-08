const express = require("express");

const router = express.Router();

const carController = require("../controllers/carController");

// GET ALL
router.get("/", carController.getCars);

// GET BY ID
router.get("/:id", carController.getCar);

// CREATE
router.post("/", carController.addCar);

// UPDATE
router.put("/:id", carController.editCar);

// DELETE
router.delete("/:id", carController.removeCar);

module.exports = router;
