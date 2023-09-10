const router = require('express').Router();
const recetas = require('./recetas')
const dietas = require('./dietas')

router.use("/recetas", recetas)

router.use("/dietas", dietas)


module.exports = router;