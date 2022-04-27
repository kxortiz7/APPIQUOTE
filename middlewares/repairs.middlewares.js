const { Repair } = require('../models/repairs.models')

const repairExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'No post found with the given id',
      });
    }

    req.repair = repair;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { repairExists };
