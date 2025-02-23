/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/assets/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "5089de856a7e39c47fa7.png";
;// ./src/index.js
// index.js


var gridContainer = document.getElementById('grid');
var GRID_SIZE = 16; // 4x4
var currentCellIndex = null;
function createGrid() {
  for (var i = 0; i < GRID_SIZE; i++) {
    var cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.dataset.index = i;
    gridContainer.appendChild(cell);
  }
}
function getRandomIndex(excludeIndex) {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * GRID_SIZE);
  } while (randomIndex === excludeIndex);
  return randomIndex;
}
document.addEventListener('DOMContentLoaded', function () {
  createGrid();

  // Создаем элемент персонажа
  var img = document.createElement('img');
  img.src = goblin_namespaceObject;
  img.alt = 'Персонаж';

  // Размещаем персонажа в случайной ячейке при загрузке
  currentCellIndex = Math.floor(Math.random() * GRID_SIZE);
  var currentCell = gridContainer.querySelector("[data-index=\"".concat(currentCellIndex, "\"]"));
  currentCell.appendChild(img);
  setInterval(function () {
    var newIndex = getRandomIndex(currentCellIndex);
    var newCell = gridContainer.querySelector("[data-index=\"".concat(newIndex, "\"]"));
    // Перемещаем img в новый контейнер. При этом не требуется removeChild – img автоматически убирается из предыдущего родителя.
    newCell.appendChild(img);
    currentCellIndex = newIndex;
  }, 1000);
});
/******/ })()
;