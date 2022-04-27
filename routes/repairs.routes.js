const express = require('express');

// Middlewares
const { repairExists } = require('../middlewares/repairs.middlewares');


// Controller
const {
  getAllRepair,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controllers/repairs.controller');

const router = express.Router();

router.route('/').get(getAllRepair).post(createRepair);

router
  .use('/:id', repairExists)
  .route('/:id')
  .get(getRepairById)
  .patch(updateRepair)
  .delete(deleteRepair);

module.exports = { repairRouter: router };
