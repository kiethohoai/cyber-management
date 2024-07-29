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
  status: {
    type: DataTypes.STRING,
  },
});

// todo Creat Task
const createTask = async (name, status) => {
  /*   
  // #C1 build()
  const newTask = Task.build({
    name,
    status,
  });
  await newTask.save();
  console.log('Create Task Successfully!');
 */

  // #C2 create()
  const newTask = await Task.create({
    name,
    status,
  });
};
// createTask('Learning NextJS', 'FINISH');

// todo getAllTask
const getAllTask = async () => {
  const taskList = await Task.findAll();
  console.log('🚀CHECK  taskList =', JSON.stringify(taskList, null, 2));
};
// getAllTask();

// todo getTaskById
const getTaskById = async (id) => {
  const task = await Task.findOne({
    where: {
      id,
    },
  });
  console.log('🚀CHECK  task =', JSON.stringify(task, null, 2));
};
// getTaskById(4);

// todo Model synchronization
const syncModal = async () => {
  // await Task.sync({ alter: true });
  await Task.sync({ force: true });
  console.log('The table for the Task model was just (re)created!');
};
// syncModal();
