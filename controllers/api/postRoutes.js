const router = require('express').Router();
const { Card } = require('../../models');



router.post('/', withAuth, async (req, res) => {
  
    try {
    const postData = await Post.create({
      ...req.body,
      member_id: req.session.member_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        member_id: req.session.member_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'post not found, may be an issue with id entered in url' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
