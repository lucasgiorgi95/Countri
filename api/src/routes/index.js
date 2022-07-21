const { Router } = require('express');
const axios = require('axios')
const {Country, Activity} = require('../db.js')
const country = require('./country')
const activity = require('./activity')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/country', country)
router.use('/activity', activity)


module.exports = router;
