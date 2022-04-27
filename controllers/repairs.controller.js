const { Repair } = require('../models/repairs.models')

const getAllRepair = async (req, res) => {
  try {
    const repairs = await Repair.findAll();

    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRepair = async (req, res) => {
  try {
    const { date, estatus, userId } = req.body;

    const newRepair = await Repair.create({ date, estatus, userId });


    res.status(201).json({ newRepair });
  } catch (error) {
    console.log(error);
  }
};

const getRepairById = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, status } = req.body;

    const repair = await Repair.findOne({ where: { id } });

    await repair.update({ date, status });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    await repair.update({ status: 'deleted' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRepair,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
};
