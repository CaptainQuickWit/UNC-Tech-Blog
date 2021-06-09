const router = require('express').Router();


const { Post } = require('../../models');
var varPostId;

router.post('/edit/', async (req, res) => {
  //res.render('editpost');
  
  req.session.postId = req.body.postid;
  

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
          id: req.session.postId
          
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


router.post('/delete/', async (req, res) => {
  console.log("%%%%%%you entered the delete route%%%%%%%");
  console.log("%%%%%%req.session.postId: "+req.session.postId);
  try {
    const postData = await Post.destroy({
      where: {
        id: req.session.postId,
        //member_id: req.session.member_id,
      },
    }); 
    
    if (!postData) {
      res.status(404).json({ message: 'post not found in the database' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;
