// import { Request, Response } from 'fastify';
import { FastifyRequest as Request, FastifyReply as Response } from 'fastify';
import { Task } from '../models/task_model'
import { Sequelize } from 'sequelize';
import { sequelize } from '../db/database';

// API to Create the New Task
export const createTask = async (req: Request, reply: Response) => {
  try {
    const { task_id, task_name, description } = req.body as Record<string, any>;
    // Create a new task using Sequelize
    const query0 = `select * from task where task_id = ${task_id}`
    const data = await sequelize.query(query0)
    //  const existingtask = data[0][0].task_id;
    if (data[0].length > 0) {
      return reply.code(403).send({ message: "Task Id is already Used" });
    }
    const query = `insert into task(task_id, task_name, description)
    values
    ('${task_id}','${task_name}', '${description}')
    `
    console.log('query', query);
    const newTask = await sequelize.query(query);
    console.log(newTask)
    // Send a success response with the created task
     return reply.code(201).send({ message: "Task Addded Successfully" });
  } catch (error) {
    console.error(error);
     return reply.code(500).send(error);
  }
}

// API to get the All Tasks
export const listTasks = async (req: Request, reply: Response) => {
  try {
    const data = await sequelize.query('select * from task');
    console.log(data);
    return reply.code(202).send(data[0]);
  } catch (error) {
    console.log(error)
    reply.code(500).send(error);
  }
}

// API to update the Task By TaskId
export const updateTask = async (req: Request, reply: Response) => {
  try {
    const { task_id, task_name } = req.body as Record<string, any>;
    const query = `update task
  set task_name = '${task_name}'
  where task_id = '${task_id}' `
    const data = await sequelize.query(query);
    console.log(data);
    return reply.code(202).send({message :"Updates Successfullt"});
  } catch (error) {
    console.log(error)
    return reply.code(500).send(error);
  }
}

// API to Delete the Task By TaskId
export const deleteTask = async (req: Request, reply: Response) => {
  try {
    const { task_id} = req.body as Record<string, any>;
    const query0 = `select * from task where task_id = ${task_id}`
    const existdata = await sequelize.query(query0)
    //  const existingtask = data[0][0].task_id;
    if (existdata[0].length == 0) {
      return reply.code(403).send({ message: "Task does not exist" });
    }
    const query = `delete from task 
    where task_id = ${task_id}`
    const data = await sequelize.query(query);
    console.log(data);
    return reply.code(202).send({message :"Deleted  Successfullt"});
  } catch (error) {
    console.log(error)
    return reply.code(500).send(error);
  }
}
