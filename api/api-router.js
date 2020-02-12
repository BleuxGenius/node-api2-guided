const express = require('express');

const hubsRouter = require("../hubs/hubs-router")
const router = express.Router();

// this router handles request beginning in /api

// handle /api/hubs
router.use('/hubs', hubsRouter)

module.exports = router