"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var router = express.Router();
exports.router = router;
var _a = require("../services/gameRequest"), createGameRequest = _a.createGameRequest, getRequests = _a.getRequests, getPlayers = _a.getPlayers, getPlayersByNickname = _a.getPlayersByNickname, deleteGameRequest = _a.deleteGameRequest;
router.post("/:id_receiver", createGameRequest);
router.get("/", getRequests);
router.get("/players", getPlayers);
router.get("/players/:nickname", getPlayersByNickname);
router.delete("/:id_game_request", deleteGameRequest);
