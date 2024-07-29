const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('tm', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
};

checkConnection();
