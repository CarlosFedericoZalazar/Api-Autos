import {
  getCarsService,
  getCarByIdService,
  getCarsByMarcaService,
  createCarService,
  updateCarService,
  deleteCarService,
} from "../services/cars_service.js";

// =========================
// GET ALL
// =========================
export const getCars = async (req, res, next) => {
  try {
    const data = await getCarsService();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

// =========================
// GET BY ID
// =========================
export const getCarById = async (req, res, next) => {
  try {
    const data = await getCarByIdService(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

// =========================
// GET BY MARCA
// =========================
export const getCarsByMarca = async (req, res, next) => {
  try {
    const { marca, motor } = req.params;
    const data = await getCarsByMarcaService(marca, motor);

    if (!data.length) {
      return res.status(404).json({ message: "No se encontraron autos" });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};

// =========================
// CREATE
// =========================
export const createCar = async (req, res, next) => {
  try {
    const data = await createCarService(req.body);
    res.status(201).json({ message: "Auto creado", auto: data });
  } catch (error) {
    next(error);
  }
};

// =========================
// UPDATE
// =========================
export const updateCar = async (req, res, next) => {
  try {
    const data = await updateCarService(req.params.id, req.body);
    res.json({ message: "Auto actualizado", auto: data });
  } catch (error) {
    next(error);
  }
};

// =========================
// DELETE
// =========================
export const deleteCar = async (req, res, next) => {
  try {
    await deleteCarService(req.params.id);
    res.json({ message: "Auto eliminado" });
  } catch (error) {
    next(error);
  }
};
