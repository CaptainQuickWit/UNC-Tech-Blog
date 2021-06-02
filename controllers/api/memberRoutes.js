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

// Set up sessions with a 'loggedIn' variable set to `true`
    
  } catch (err) {
    console.log("your code failed ==> /controlers/api/memberRoutes line 13 or close");
    console.log(err);
    res.status(500).json(err);
  }
});

// MESH LOGIN
router.post('/login', async (req, res) => {
  try {
    const memberData = await Member.findOne({ where: { username: req.body.username } });

    if (!memberData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await memberData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.member_id = memberData.id;
      req.session.username = memberData.username;
      req.session.logged_in = true;
      
      res.json({ member: memberData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

// MESH LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// DELETE existing mesh member with "Member" model
// TO ASK !!!! member page has no id will it affect this?


// WE WILL ADD AN UPDATE ACCOUNT ROUTE HERE!

module.exports = router; 
