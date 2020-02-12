const express = require('express');

const hubsRouter = require("./hubs/hubs-router.js");

const server = express();

server.use(express.json()); // needed to parse JSON from the body 


// urls beginning eith /api.hubs
server.use('/api', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
  <h2> Lambda HUbs API </h>
  <p> Welcome to the Lambda HUbs</p>`);
})



// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

const port = 4000
server.listen(4000, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
