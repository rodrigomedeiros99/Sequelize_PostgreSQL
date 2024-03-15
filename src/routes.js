const express = require("express");
const routes = express.Router();

/*
const Satelite = require("../models/satelite");
*/
const PlanetController = require("../Controller/PlanetController");
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

const SateliteController = require("../Controller/SateliteController");
routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

const CapController = require("../Controller/CapController");
routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

const SpaceshipController = require("../Controller/SpaceshipController");
routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;
