
import fs from 'fs';
import path from 'path';

describe('Grid Initialization', () => {
  beforeAll(() => {
    
    const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('Должен присутствовать контейнер с id="grid"', () => {
    const grid = document.getElementById('grid');
    expect(grid).not.toBeNull();
  });
});
