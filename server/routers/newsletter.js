const express = require("express");
const NewsletterConstroller = require("../controllers/newsletter");

const api = express.Router();

api.post("/suscribe-newsletter/:email", NewsletterConstroller.suscribeEmail);

module.exports = api;
