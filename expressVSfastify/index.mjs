// STARTING A SERVER USING EXPRESS
// import express from "express";
// const app = express();
// const port = 3000;
// let start = performance.now();
// app.listen(port, () => {
//   console.log(`Server listening with express!`);
// });
// let end = performance.now();
// console.log(`Execution timeStamp with Express: ${end - start} ms `);

import Fastify from "fastify";
const fastify = Fastify();
const port = 3000;
let start = performance.now();
fastify.listen({ port: port }, () => {
  console.log(`Server listening with fastify!`);
});
let end = performance.now();
console.log(`Execution timeStamp with Fastify: ${end - start} ms `);
