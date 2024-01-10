const express = require('express');
const router = express.Router();

const controller = require('../CreateFields.js');
console.log("Entered getPicklistValues");
router.get('/picklist-values', controller.getPicklistValues);
// console.log("router:" + router.toString);
module.exports = router;
console.log("module.exports:" + module.exports.log);
