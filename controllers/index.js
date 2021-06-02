const api = require('./api');
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes);
router.use('/api', api);
module.exports = router;