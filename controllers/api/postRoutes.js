const router = require('express').Router();


const { Post } = require('../../models');
var varPostId;
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
/*
let varPostID;
router.post('/editpost', (req,res) => {



  if (req.session.logged_in) {
    
    console.log("!!!!!rendering!!!!!!"); 
    varPostID = req.body.postid;
    console.log("varpostid=====>" + varPostID); 
    res.render('editpost', {logged_in: req.session.logged_in});
    
    return;
  }

  res.redirect('/');
  
});*/


router.post('/edit/', async (req, res) => {
  //res.render('editpost');
  varPostId = req.body.postid;
  console.log("varpostid====>"+varPostId);
  res.render('editpost');
});


router.put('/edit/', async (req, res) => {
  //res.render('editpost');

  try {
    Post.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        post_content: req.body.content,
        
        
        
        
      },
      {
        // Gets a book based on the book_id given in the request parameters
        where: {
          id: varPostId,
        },
      }
    )
      .then((updatedPost) => {
        
        res.json(updatedPost);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  

});


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
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!entered the api/post route !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
   
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"); 

  try {
    const newPost = await Post.create({
      title: req.body.title,
      post_content: req.body.content,
      //member_username: req.member_username,
      member_id: req.session.member_id,
      member_username: req.session.username,
      
    });
    //res.status(200);
  // Set up sessions later with a 'loggedIn' variable set to `true` 
  // the code for the sessions will go here
  } catch (err) {
    console.log("your code failed ==> /controlers/api/postRoutes line 33 or close");
    console.log(err);
    res.status(500).json(err);
  }
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!made it past the try catch  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
   
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"); 

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
  res.redirect('/dashboard');
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
