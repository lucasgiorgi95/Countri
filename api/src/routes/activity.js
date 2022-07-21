const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {activity, activityPost} =require('../Controllers/activityControl')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', activity)
router.post('/', activityPost)

module.exports = router;
