//!!server does not use sessions!!
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const app = express();
//server now supports sessions
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const PORT = process.env.PORT || 3001;

//now adding middleware
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use : HANDLEBARS
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const asession = {
  secret: 'the only secrets are the ones that never existed in the first place',
  cookie: {},
  resave: false,
  // set to true because we want to save it even before the user has not logged in to check the login status is true or false. 
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// session here refers to the express-session package and it commands express app to use the object we created above:


app.use(session(asession));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port 3001'));
});
