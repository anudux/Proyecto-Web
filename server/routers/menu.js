const express = require("express");
const MenuControllers = require("../controllers/menu");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

api.post("/add-menu", [md_auth.ensureAuth], MenuControllers.AddMenu);
api.get("/get-menus", MenuControllers.getMenus);
api.put("/update-menu/:id", [md_auth.ensureAuth], MenuControllers.updateMenu);
api.put("/activate-menu/:id", [md_auth.ensureAuth], MenuControllers.activateMenu);
api.delete("/delete-menu/:id", [md_auth.ensureAuth], MenuControllers.deleteMenu);

module.exports = api;
