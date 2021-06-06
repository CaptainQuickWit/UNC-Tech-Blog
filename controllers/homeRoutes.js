const router = require('express').Router();
const withAuth = require('../utils/auth');
//bring in auth later
//bring in models later 

//this code so far is mostly boiler plate code to build the skeleton of the website adding basic functionality before
//adding things like login/out and ORM

// this renders the main page when user first gets to website
/*
router.get('/login', (req, res) => {
  //add sessions later 
  console.log("it worked");
  res.render('login');
});
*/

router.get('/newpost', (req,res) => {
  
    
    res.render('newpost', {logged_in: req.session.logged_in});
    return;

  
});

router.get('/dashboard', (req,res) => {
  if (req.session.logged_in) {
    
    res.render('dashboard', {logged_in: req.session.logged_in});

      
    
    
    return;
  }
  //{logged_in: false}
  //res.render('login');
  res.redirect('/');
});

/*
router.get('/dashboard', (req, res) => {
  console.log('redirected to dashboard ', req.session.logged_in);
  if (req.session.logged_in) {
    res.render('dashboard', {logged_in: req.session.logged_in});
    return;
  }
  //{logged_in: false}
  console.log("req.session.logged_in: " + req.session.logged_in + "you were not logged in and redirected to home page");
  res.redirect('/');
}); */


router.get('/', (req, res) => {
  //add sessions later 
  console.log("it worked");
  res.render('home', {logged_in: req.session.logged_in});
});

// RENDERS meshboard.handlebars
router.get('/blogpost', withAuth, async (req, res) => {
  console.log('/this is the blogpost route. Logged in: ', req.session.logged_in);
  try {
    // Get all posts and JOIN with  data
    const postData = await Post.findAll({
      // attributes: { exclude: ['call_description', 'offer_description'] },
      include: [
        {
          model: Member,
          attributes: ['username'],
        },
      ],
    });
    // Serialize data so the template can read it. This is the "posts" we use at meshboard.handlebars. 
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('home', {
      //posts,
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

router.post('/dashboard', (req,res) => {
  if (req.session.logged_in) {
    
    
    return;
  }
  //{logged_in: false}
  res.render('login');
});



module.exports = router; 