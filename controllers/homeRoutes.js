const router = require('express').Router();
//bring in auth later
//bring in models later 

//this code so far is mostly boiler plate code to build the skeleton of the website adding basic functionality before
//adding things like login/out and ORM

// this renders the main page when user first gets to website
router.get('/login', (req, res) => {
  //add sessions later 
  console.log("it worked");
  res.render('login');
});

router.get('/', (req, res) => {
  //add sessions later 
  console.log("it worked");
  res.render('home');
});

module.exports = router; 