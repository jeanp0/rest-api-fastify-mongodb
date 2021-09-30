const productController = require('../controllers/product.controller');

const routes = [
  {
    url: '/products',
    method: 'GET',
    handler: productController.getAll,
  },
  {
    url: '/products/:id',
    method: 'GET',
    handler: productController.getOne,
  },
  {
    url: '/products',
    method: 'POST',
    handler: productController.create,
  },
  {
    url: '/products/:id',
    method: 'PUT',
    handler: productController.update,
  },
  {
    url: '/products/:id',
    method: 'DELETE',
    handler: productController.remove,
  },
];

module.exports = routes;
