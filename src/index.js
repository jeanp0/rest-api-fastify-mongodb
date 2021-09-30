const fastify = require('fastify')({
  logger: true,
});
const productRoutes = require('./routes/product.route');
const swagger = require('./utils/swagger');
require('./utils/db');

fastify.register(require('fastify-swagger'), swagger.options);

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

productRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  await fastify.listen(3000);
  fastify.log.info(`Server listening on ${fastify.server.address().port}`);
};

start();
