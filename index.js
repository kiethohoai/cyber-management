// todo Define
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('tm', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

// todo Check Connect
const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection Database successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
};
checkConnection();

// todo Create Modal (Table in MySQL)
const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// todo Model synchronization
const syncModal = async () => {
  // await Task.sync({ alter: true });
  await Task.sync({ force: true });
  console.log('The table for the Task model was just (re)created!');
};
syncModal();
