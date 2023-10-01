import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})
import { sequelize } from './src/db/database';
import taskRoutes from './src/routes/task_routes';


// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.register(taskRoutes);


// Run the server!
async function start(){
    try {
        await fastify.listen({ port: 3000 })
      } catch (err) {
        fastify.log.error(err)
        process.exit(1)
      }
      // Initialize the database connection
sequelize.sync()
.then(() => {
  console.log('Database synced');
})
.catch(error => {
  console.error('Database sync error:', error);
});
}

start();

