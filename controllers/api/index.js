const memberRoutes = require('./memberRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const router = require('express').Router();

router.use('/members', memberRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);


module.exports = router;