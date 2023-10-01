import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'Tasks',
  username: 'postgres',
  password: 'sagar123',
  host: 'localhost',
  port: 5432, // Default PostgreSQL port
  models: [__dirname + './models/task_model.ts'], // Load models from the models directory
});

// Add error handling for the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    if (err.name === 'SequelizeConnectionError' && err.parent && err.parent.code === '3D000') {
      // Handle the specific case where the "Tasks" database does not exist
      console.log('Please create the "Tasks" database in PostgreSQL.');
    } else {
      console.error('Unable to connect to the database:', err);
    }
    // Prevent the error from propagating further
    process.exit(1); // Exit the Node.js process with an error code
  });