import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf8');

const expected = readFile('resultCompareFlat.txt', 'utf8');
const fileJson1 = getFixturePath('file1.json');
const fileJson2 = getFixturePath('file2.json');
const fileYaml1 = getFixturePath('file1.yaml');
const fileYaml2 = getFixturePath('file2.yaml');

test('stylish JSON files', () => {
  const actual = genDiff(fileJson1, fileJson2);
  expect(actual).toEqual(expected);
  test('stylish yaml files', () => {
    const actual = genDiff(fileYaml1, fileYaml2);
    expect(actual).toEqual(expected);
  });
});
