import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf8');

const expectedStylish = readFile('resultCompareStylish.txt', 'utf8');
const expectedPlain = readFile('resultComparePlain.txt', 'utf8');
const expectedJson = readFile('resultCompareJson.txt', 'utf8');

test.each([
  ['file1.json', 'file2.json', 'stylish', expectedStylish],
  ['file1.json', 'file2.json', 'plain', expectedPlain],
  ['file1.json', 'file2.json', 'json', expectedJson],
  ['file1.yaml', 'file2.yaml', 'stylish', expectedStylish],
  ['file1.yaml', 'file2.yaml', 'plain', expectedPlain],
  ['file1.yaml', 'file2.yaml', 'json', expectedJson],
])('comparing %s and %s using %s formatter', (fileName1, fileName2, formatName, expectedFile) => {
  const file1 = getFixturePath(fileName1);
  const file2 = getFixturePath(fileName2);
  expect(genDiff(file1, file2, formatName)).toEqual(expectedFile);
});
