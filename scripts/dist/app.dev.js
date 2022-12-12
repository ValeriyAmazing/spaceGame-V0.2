"use strict";

var _construct = require("./construct.js");

var _planets = require("./gameObjects/planets.js");

var _generatePlanetCells = require("./generators/generatePlanetCells.js");

var _getCurrentItems = require("./getCurrentItems.js");

var _tick = require("./tick.js");

var container = document.querySelector('.container');
var cell = document.createElement('div');
container.append(cell);
(0, _getCurrentItems.getCurrentPlanet)();

_planets.planetList.push(_getCurrentItems.currents.planet);

function showStorage() {
  cell.innerHTML = "".concat(_getCurrentItems.currents.planet.currentStorage.metal);
  requestAnimationFrame(showStorage);
}

_getCurrentItems.currents.planet.currentStorage.metal = 1000;
_getCurrentItems.currents.planet.currentStorage.gas = 1000;
_getCurrentItems.currents.planet.currentStorage.polimer = 1000;
_getCurrentItems.currents.planet.cells = (0, _generatePlanetCells.generatePlanetCells)(_getCurrentItems.currents.planet.type);
(0, _getCurrentItems.getCurrentCell)();

if ((0, _construct.takeCost)('metalMiner', 0, _getCurrentItems.currents.planet.currentStorage)) {
  _getCurrentItems.currents.cell.building = (0, _construct.generateNewBuilding)('metalMiner');
}

console.log(_getCurrentItems.currents.planet);
(0, _tick.tick)();
showStorage();