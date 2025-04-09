const express = require('express')
const router = express.Router();
const controller = require("../controller/Training.controller")

router.post('/training/batch', controller.trainingBatch);

module.exports = router;