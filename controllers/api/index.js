const memberRoutes = require('./memberRoutes');
const router = require('express').Router();

router.use('/members', memberRoutes);

module.exports = router;