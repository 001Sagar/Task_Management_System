// Import the framework and instantiate it
// import * as functions from 'firebase-functions';
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

// export const api = functions.https.onRequest((req, res) => {
//   fastify.ready(err => {
//     if (err) throw err;
//     fastify.server.emit('request', req, res);
//   });
// });

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

