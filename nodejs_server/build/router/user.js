"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("../services/auth");
var express = require("express");
var router = express.Router();
var user_service = require("../services/user");
router.get("/allUsers", user_service.getAllUsers);
router.get("/:id", user_service.getUserInfo);
router.post("/nickname", user_service.updateNickname);
router.post("/set_info", user_service.updateInfo);
router.post("/ban/:id", auth_1.isAdmin(), user_service.banUser);
router.post("/unban/:id", auth_1.isAdmin(), user_service.unbanUser);
router.delete("/deleteUser", user_service.deleteUser);
module.exports = router;