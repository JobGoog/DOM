// index.js
import './styles.css';
import characterImage from './assets/goblin.png';

const gridContainer = document.getElementById('grid');
const GRID_SIZE = 16; // 4x4
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

document.addEventListener('DOMContentLoaded', () => {
  createGrid();

  // Создаем элемент персонажа
  const img = document.createElement('img');
  img.src = characterImage;
  img.alt = 'Персонаж';

  // Размещаем персонажа в случайной ячейке при загрузке
  currentCellIndex = Math.floor(Math.random() * GRID_SIZE);
  let currentCell = gridContainer.querySelector(`[data-index="${currentCellIndex}"]`);
  currentCell.appendChild(img);

  setInterval(() => {
    const newIndex = getRandomIndex(currentCellIndex);
    const newCell = gridContainer.querySelector(`[data-index="${newIndex}"]`);
    // Перемещаем img в новый контейнер. При этом не требуется removeChild – img автоматически убирается из предыдущего родителя.
    newCell.appendChild(img);
    currentCellIndex = newIndex;
  }, 1000);
});
