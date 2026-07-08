const { sql } = require("../config/db");

// Get All Cars (Soft Delete)
const getAllCars = async () => {
  const result = await sql.query(`
        SELECT *
        FROM Cars
        WHERE DeletedAt IS NULL
        ORDER BY CarId DESC
    `);

  return result.recordset;
};

// Get Car By Id (Soft Delete)
const getCarById = async (id) => {
  const request = new sql.Request();

  request.input("CarId", sql.Int, id);

  const result = await request.query(`
        SELECT *
        FROM Cars
        WHERE CarId = @CarId
        AND DeletedAt IS NULL
    `);

  return result.recordset[0];
};

// Create Car
const createCar = async (data) => {
  const request = new sql.Request();

  request.input("LicensePlate", sql.VarChar(20), data.LicensePlate);
  request.input("Brand", sql.VarChar(100), data.Brand);
  request.input("Model", sql.VarChar(100), data.Model);
  request.input("Note", sql.NVarChar(500), data.Note);

  const result = await request.query(`
        INSERT INTO Cars
        (
            LicensePlate,
            Brand,
            Model,
            Note
        )
        OUTPUT INSERTED.*
        VALUES
        (
            @LicensePlate,
            @Brand,
            @Model,
            @Note
        )
    `);

  return result.recordset[0];
};

// Update Car
const updateCar = async (id, data) => {
  const request = new sql.Request();

  request.input("CarId", sql.Int, id);
  request.input("LicensePlate", sql.VarChar(20), data.LicensePlate);
  request.input("Brand", sql.VarChar(100), data.Brand);
  request.input("Model", sql.VarChar(100), data.Model);
  request.input("Note", sql.NVarChar(500), data.Note);

  const result = await request.query(`
        UPDATE Cars
        SET
            LicensePlate = @LicensePlate,
            Brand = @Brand,
            Model = @Model,
            Note = @Note,
            UpdatedAt = GETDATE()
        OUTPUT INSERTED.*
        WHERE CarId = @CarId
        AND DeletedAt IS NULL
    `);

  return result.recordset[0];
};

// Soft Delete Car
const deleteCar = async (id) => {
  const request = new sql.Request();

  request.input("CarId", sql.Int, id);

  const result = await request.query(`
        UPDATE Cars
        SET
            DeletedAt = GETDATE()
        OUTPUT INSERTED.*
        WHERE CarId = @CarId
        AND DeletedAt IS NULL
    `);

  return result.recordset[0];
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
