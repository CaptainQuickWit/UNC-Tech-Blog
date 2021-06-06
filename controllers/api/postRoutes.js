const router = require('express').Router();
const { Card } = require('../../models');

const { Post } = require('../../models');

/*
router.post('/', withAuth, async (req, res) =>
router.post('/', async (req, res) => {
    try {
    const postData = await Post.create({
      ...req.body,
      member_id: req.session.member_id,
      rrfrf
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});*/

router.post('/', async (req, res) => {
  /*
  this code tests to ensure route is working and front end is sending the data afor the blog
  try {
  //console.log(req);
  console.log(req.body);
  //res.render('newpost', {logged_in: req.session.logged_in});
  res.redirect('/newpost');
  } catch (err) {
  res.status(500).json(err);
  }*/
  

  try {
    const newPost = await Post.create({
      title: req.body.title,
      post_content: req.body.content,
      //member_username: req.member_username,
      member_id: req.session.member_id,
      member_username: req.session.username,
      
    });
  // Set up sessions later with a 'loggedIn' variable set to `true` 
  // the code for the sessions will go here
  } catch (err) {
    console.log("your code failed ==> /controlers/api/postRoutes line 33 or close");
    console.log(err);
    res.status(500).json(err);
  }

  const postData = await Post.findOne({ where: { 
    title: req.body.title,
    post_content: req.body.content 
  } });

    if (!postData) {
      res
        .status(400)
        .json({ message: 'looks like the post data wasnt stored in the mysql database ' });
      return;
    }
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
  console.log(JSON.stringify(postData));
  console.log(req.session.username);
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
  res.redirect('/newpost');
});


router.delete('/:id', async (req, res) => {
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
