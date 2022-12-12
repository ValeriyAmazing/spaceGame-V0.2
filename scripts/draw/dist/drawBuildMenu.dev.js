"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawBuildingMenuItem = drawBuildingMenuItem;

var _construct = require("../construct.js");

var _buildings = require("../gameObjects/buildings.js");

var _getCurrentItems = require("../getCurrentItems.js");

var _drawPlanet = require("./drawPlanet.js");

var _timer = require("../timer.js");

function drawBuildingMenuItem(buildingKey) {
  var cost = (0, _construct.calculateTheCost)(_buildings.buildings[buildingKey].baseCosts, 1);
  var menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  var itemTitle = document.createElement('item-title');
  itemTitle.classList.add('item-title');
  itemTitle.innerHTML = "".concat(_buildings.buildings[buildingKey].buildingInfo.title);
  var itemImg = document.createElement('img');
  itemImg.classList.add('item-img');
  itemImg.src = _buildings.buildings[buildingKey].imageSrc;
  itemImg.style.width = '100%';
  var itemDiscription = document.createElement('div');
  itemDiscription.classList.add('item-discription');
  itemDiscription.innerHTML = "<p>".concat(_buildings.buildings[buildingKey].buildingInfo.description, "</p>");
  var itemDetais = document.createElement('div');
  itemDetais.classList.add('item-costs-wrap');
  var itemCostMetal = document.createElement('div');
  itemCostMetal.classList.add('item-cost-metal');
  itemCostMetal.innerText = " ".concat(cost.metal);
  var itemCostPolimer = document.createElement('div');
  itemCostPolimer.classList.add('item-cost-polimer');
  itemCostPolimer.innerText = " ".concat(cost.polimer);
  var itemCostGas = document.createElement('div');
  itemCostGas.classList.add('item-cost-gas');
  itemCostGas.innerText = "".concat(cost.gas);
  var itemBuildTime = document.createElement('div');
  itemBuildTime.innerHTML = "Building time: ".concat((0, _timer.timeFormatted)(_buildings.buildings[buildingKey].baseConstructTime * 1000));
  var itemInfoBtn = document.createElement('button');
  itemInfoBtn.classList.add('item-info-btn');
  itemInfoBtn.innerText = 'Building info';
  itemInfoBtn.addEventListener('click', function () {
    infoDescription.classList.toggle('hide');
  });
  var itemButton = document.createElement('button');
  itemButton.classList.add('item-button');
  itemButton.innerText = 'Build';
  itemButton.addEventListener('click', function () {
    if (!_getCurrentItems.currents.cell.building && (0, _construct.takeCost)(cost, _getCurrentItems.currents.planet.currentStorage)) {
      _getCurrentItems.currents.cell.building = (0, _construct.generateNewBuilding)(buildingKey);
    }

    (0, _drawPlanet.drawPlanet)();
  });
  var infoDescription = document.createElement('div');
  infoDescription.classList.add('info-description');
  infoDescription.classList.add('hide');

  for (var i = 1; i < 26; i++) {
    var infoWrapper = document.createElement('div');
    infoWrapper.classList.add('info-wrapper');
    var infoLvl = document.createElement('div');
    infoLvl.classList.add('info-lvl');
    infoLvl.innerText = "LVL: ".concat(i);
    infoDescription.append(infoWrapper);
    infoWrapper.append(infoLvl);
    var infoIncomeWrap = document.createElement('div');
    infoIncomeWrap.classList.add('info-income-wrap');
    infoWrapper.append(infoIncomeWrap);
    var upgrades = (0, _construct.calculateUpgrades)(_buildings.buildings[buildingKey].upgrades, i);

    for (var income in upgrades) {
      var infoIncome = document.createElement('div');
      infoIncomeWrap.append(infoIncome);

      switch (income) {
        case 'metal':
          infoIncome.innerText = "".concat(upgrades[income], "/s");
          infoIncome.classList.add('item-cost-metal');
          break;

        case 'polimer':
          infoIncome.classList.add('item-cost-polimer');
          infoIncome.innerText = "".concat(upgrades[income], "/s");
          break;

        case 'gas':
          infoIncome.innerText = "".concat(upgrades[income], "/s");
          infoIncome.classList.add('item-cost-gas');
          break;

        case 'sp':
          break;

        default:
          break;
      }

      infoIncome.classList.add('info-income');
    }

    infoDescription.append(infoWrapper);
  }

  menuItem.append(itemTitle, itemImg, itemDiscription, itemButton, itemInfoBtn);
  itemDetais.append(itemCostMetal, itemCostPolimer, itemCostGas, itemBuildTime);
  itemDiscription.append(itemDetais);
  menuItem.append(infoDescription);
  return menuItem;
}