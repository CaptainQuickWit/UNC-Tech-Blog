

const router = require('express').Router();
const { Member } = require('../../models');

//add this line later <here>: const withAuth = require('../../utils/auth');
router.post('/login', async (req, res) => {
  try {
    const memberData = await Member.findOne({ where: { username: req.body.username } });
    if (!memberData) {
      res
        .status(400)
        .json({ message: 'Login: failed. Issue may be with either username or password' });
      return;
    }
    const validPassword = await memberData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Login: failed. Issue may be with either username or password' });
      return;
    }
    req.session.save(() => {
      req.session.member_id = memberData.id;
      req.session.username = memberData.username;
      req.session.logged_in = true;
      res.json({ member: memberData, message: 'Login: successful' });
    });
  } catch (err) {
    res.status(400).json({ message: 'Login: failed. Status: 400 <account undefined>' });
  }
});

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

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router; 
