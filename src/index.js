import './styles.css';
import characterImage from './assets/goblin.png';

const gridContainer = document.getElementById('grid');
const GRID_SIZE = 16;
let currentCellIndex = null;

function createGrid() {
  for (let i = 0; i < GRID_SIZE; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.dataset.index = i;
    gridContainer.appendChild(cell);
  }
}

function getRandomIndex(excludeIndex) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * GRID_SIZE);
  } while (randomIndex === excludeIndex);
  return randomIndex;
}