const express = require("express");
const router = require("./routerForm");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

// para la seguridad y los accesos
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use(router);


module.exports = server;