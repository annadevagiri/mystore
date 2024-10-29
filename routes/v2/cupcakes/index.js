const { getCupcakes, getCupcakesById, addNewCupcake, updateCupcake, deleteCupcake } = require("../../../controllers/cupcakes");
const express = require('express');
const router = express.Router();

router.get('/v2/cupcakes', getCupcakes);
router.get('/v2/cupcakes/:id', getCupcakesById);
router.post('/v2/cupcakes', addNewCupcake);
router.put('/v2/cupcakes/:id', updateCupcake);
router.delete('/v2/cupcakes/:id', deleteCupcake);

module.exports = router;