# Server Benchmark: Express vs Fastify

This repository contains a simple Node.js code to start a server using both Express and Fastify frameworks. It measures the execution time of each server startup to compare their performance.

## Prerequisites

- Node.js installed on your machine.

## Installation and Usage

##### 1. Clone the repository to your local machine:

```bash
git clone git@github.com:cobragh/PerfomanceTests.git

```

##### 2. Navigate to the project directory:

```bash
cd expressVSfastify
```

##### 3. Install the dependencies:

```bash
npm install
```

##### 4. Start the server with Express:

Uncomment the following code block in the index.js file to use Express:

```javascript
// import express from "express";
// const app = express();
// const port = 3000;
// let start = performance.now();
// app.listen(port, () => {
// console.log(`Server listening with express!`);
// });
// let end = performance.now();
// console.log(`Execution timeStamp with Express: ${end - start} ms `);
```

##### 5. Start the server with Fastify:

Comment out the Express code block above and uncomment the following code block in the index.mjs file to use Fastify:

```
// STARTING A SERVER USING Fastify
import Fastify from "fastify";
const fastify = Fastify();
const port = 3000;
let start = performance.now();
fastify.listen({ port: port }, () => {
console.log(`Server listening with Fastify!`);
});
let end = performance.now();
console.log(`Execution timeStamp with Fastify: ${end - start} ms `);
```

##### 6. Run the server:

```bash
   npm start
```

##### 7. Observe the output in the console, which will show the execution time for each server startup.
