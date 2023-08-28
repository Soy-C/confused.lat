const express = require("express");

app.use(express.static('./views')); // ethan

const app = express();
const api = express.Router();

api.get('/', async (req, res) => {
    res.sendJSON({ name: ' uww'      })
});

module.exports = app;