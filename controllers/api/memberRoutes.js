//!!!BOILER PLATE CODE!!!!!!!!



const router = require('express').Router();
const { Member } = require('../../models');
//add this line later <here>: const withAuth = require('../../utils/auth');

// create a new account with the member model
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newMember = await Member.create({
      username: req.body.username,
      password: req.body.password,
      
    });

  // Set up sessions later with a 'loggedIn' variable set to `true` 
  // the code for the sessions will go here
    
  } catch (err) {
    console.log("your code failed ==> /controlers/api/memberRoutes line 13 or close");
    console.log(err);
    res.status(500).json(err);
  }
  
  res.status(200);
});

// login to the blog
router.post('/login', async (req, res) => {
  try {
    const memberData = await Member.findOne({ where: { username: req.body.username } });

    if (!memberData) {
      res
        .status(400)
        .json({ message: 'wrong user or password, please try again' });
      console.log("no good memberRoutes.js file username for login fail");
      return;
    }

    const validPassword = await memberData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'wrong user or password, please try again' });
        //what used to be in the .json: { message: 'wrong user or password, please try again' }
        //.status(400);
        console.log("no good memberRoutes.js file username for login fail");
      return;
    }

    //add code for sessions here later

  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
  
});


module.exports = router; 
