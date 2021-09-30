const Product = require('../models/product.model');

const getAll = async (request, reply) => {
  const products = await Product.find();
  // reply.send(products);
  reply.code(200).send(products);
};

const getOne = async (request, reply) => {
  const product = await Product.findById(request.params.id);
  reply.code(200).send(product);
};

const create = async (request, reply) => {
  // Product.create(request.body);
  const product = new Product(request.body);
  await product.save();
  reply.code(201).send(product);
};

const update = async (request, reply) => {
  const product = await Product.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );
  reply.code(200).send(product);
};

const remove = async (request, reply) => {
  await Product.findByIdAndRemove(request.params.id);
  reply.code(204).send();
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
