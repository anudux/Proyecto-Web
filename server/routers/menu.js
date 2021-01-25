const express = require("express");
const MenuControllers = require("../controllers/menu");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

api.post("/add-menu", [md_auth.ensureAuth], MenuControllers.AddMenu);
api.get("/get-menus", MenuControllers.getMenus);

module.exports = api;
