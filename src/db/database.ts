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
