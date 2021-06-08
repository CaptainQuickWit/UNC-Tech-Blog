const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Member,Post} = require('../models');
//later bring in Comment
//const { Comment} = require('../models');

//bring in auth later
//bring in models later 

router.post('/editpost', (req,res) => {



  if (req.session.logged_in) {
    
    console.log("!!!!!rendering!!!!!!"); 
    
    res.render('editpost', {logged_in: req.session.logged_in});
    
    return;
  }

  res.redirect('/');
  
});

router.get('/editpost', (req,res) => {


  
  if (req.session.logged_in) {
   console.log("!!!!!rendering!!!!!!"); 
    res.render('editpost', {logged_in: req.session.logged_in});  
    return;
  }

  res.redirect('/');
  
});


router.get('/newpost', (req,res) => {
  

  if (req.session.logged_in) {
    
    res.render('newpost', {logged_in: req.session.logged_in});
      
        
      
      
    return;
  }
    
  res.redirect('/');
  
});

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with  data
    const postData = await Post.findAll({
      // attributes: { exclude: ['???', '???'] },
      include: [
        {
          model: Member,
          attributes: ['username','id'],
        },
      ],
    });
    // Serialize data so the template can read it. This is the "posts" we use at 
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('home', { //changed from dashboard to home
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// later add withAuth like this: router.get('/dashboard', withAuth, async (req, res) => {
router.get('/dashboard', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('login');
    return;
  }

  console.log('/this is the dashboard route. Logged in: ', req.session.logged_in);
  try {
    // Get all posts and JOIN with  data
    const postData = await Post.findAll({
      where: {
        member_id: req.session.member_id,
      },
      include: [
        {
          model: Member,
          attributes: ['username','id'],
        },
      ],
    });
    
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    //console.log("member_id: "+member_id);
    console.log("req.session.member_id: "+ req.session.member_id);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    const allPosts = postData.map((post) => post.get({ plain: true }));
    
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// RENDERS member.handlebars
router.get('/member', withAuth, async (req, res) => {
  console.log('/member route hit. Logged in: ', req.session.logged_in);
  try {
    // Find the logged in user based on the session ID
    const memberData = await Member.findByPk(req.session.member_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });
    const member = memberData.get({ plain: true });
    console.log(member),
      res.render('member', {
        ...member,
        logged_in: true
      });
  } catch (err) {
    res.status(500).json(err);
  }
});
// RENDERS "LOGIN" PAGE (login.handlebars)
router.get('/login', (req, res) => {
  console.log('you have entered the login route. Logged in: ', req.session.logged_in);
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  //{logged_in: false}
  res.render('login');
});

//this is for t/s delete when finished
router.post('/dashboard', (req,res) => {
  if (req.session.logged_in) {
    
    
    return;
  }
  //{logged_in: false}
  res.render('login');
});



module.exports = router; 