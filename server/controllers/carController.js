const carModel = require("../models/carModel");

// GET ALL
const getCars = async (req, res) => {
  try {
    const cars = await carModel.getAllCars();

    res.json(cars);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET BY ID
const getCar = async (req, res) => {
  try {
    const car = await carModel.getCarById(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.json(car);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE
const addCar = async (req, res) => {
  try {
    const car = await carModel.createCar(req.body);

    res.status(201).json({
      message: "Car created successfully",
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE
const editCar = async (req, res) => {
  try {
    const car = await carModel.updateCar(req.params.id, req.body);

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.json({
      message: "Car updated successfully",
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE
const removeCar = async (req, res) => {
  try {
    const car = await carModel.deleteCar(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.json({
      message: "Car deleted successfully",
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCars,
  getCar,
  addCar,
  editCar,
  removeCar,
};
