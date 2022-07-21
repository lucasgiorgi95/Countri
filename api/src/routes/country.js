const { Router } = require('express');
const {country,countryId} = require('../Controllers/countryControl')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', country)
router.get('/:id', countryId)

module.exports = router;
