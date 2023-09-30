import { FastifyInstance } from 'fastify';
import {createTask, listTasks, updateTask, deleteTask } from '../controllers/task_controller';

export default function (fastify: FastifyInstance, opts: any, done: Function) {
  fastify.post('/createTask', createTask);
  fastify.get('/tasks', listTasks);
  fastify.put('/tasks_id_update', updateTask);
  fastify.delete('/tasks_id_delete', deleteTask);
  done();
}
