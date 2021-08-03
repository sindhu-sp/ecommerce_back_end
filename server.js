const express = require('express');
const routes = require('./routes');
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('./config/connection')
// import sequelize connection
// Include Sequelize module.
// const Sequelize = require('sequelize')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync all models that are not
// already in the database
sequelize.sync({force: false}).then(() => {

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`));
});
