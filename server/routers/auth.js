const express = require("express");
const AuthControllers = require("../controllers/auth.js");

const api = express.Router();

api.post("/refresh-access-token", AuthControllers.refreshAccessToken);

module.exports = api;
