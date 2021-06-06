const memberRoutes = require('./memberRoutes');
const postRoutes = require('./postRoutes');
const commmentRoutes = require('./commentRoutes');
const router = require('express').Router();

router.use('/members', memberRoutes);
router.use('/post', postRoutes);
//router.use('/comment',commmentRoutes);

module.exports = router;